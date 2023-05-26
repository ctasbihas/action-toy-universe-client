import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ToysRow from './ToysRow';

const AllToys = () => {
    const [toyData, setToyData] = useState([]);
    useTitle('All Toys');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const { totalToys } = useLoaderData();
    const totalPages = Math.ceil(totalToys / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    const options = [5, 10, 20]

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://action-toy-universe-server.onrender.com/toys?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json()
            setToyData(data)
        }
        fetchData();
    }, [currentPage, itemsPerPage]);

    const [searchTerm, setSearchTerm] = useState('');

    // Filter toy data based on the search term
    const filteredToys = toyData.filter(toy => toy.toyName.toLowerCase().includes(searchTerm.toLowerCase()));

    // Handle search input change
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }
    return (
        <div className='my-10'>
            <input
                className="input input-bordered w-full max-w-xs mb-5"
                type="text"
                placeholder="Search by toy name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredToys.map((toy, index) =>
                            <ToysRow key={index} toy={toy} index={index} />
                        )}
                    </tbody>
                </table>

            </div>
            {/* Pagination */}
            <div className='flex justify-end mt-5'>
                <div className="btn-group">
                    {pageNumbers.map(number =>
                        <button
                            className={currentPage === number ? "btn btn-md btn-active" : "btn btn-md"}
                            key={number} onClick={() => setCurrentPage(number)}>{number + 1}</button>
                    )}
                </div>
                <select value={itemsPerPage} onChange={handleSelectChange} className="select select-bordered w-full max-w-xs">
                    {options.map(option => (
                        <option value={option} key={option} >{option}</option>
                    ))}
                </select>
            </div>
        </div >
    );
};

export default AllToys;
