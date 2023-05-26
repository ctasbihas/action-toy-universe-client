import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import TableRow from './TableRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortBy, setSortBy] = useState("default");
    useTitle('My Toys');

    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    }
    const url = `https://action-toy-universe-server.onrender.com/toys?email=${user?.email}&sortBy=${sortBy}`
    useEffect(() => {
        fetch(url) // Replace with your API endpoint for retrieving user's toys
            .then((response) => response.json())
            .then((data) => setToys(data));
    }, [url]);


    const handleDelete = (id) => {
        const proceed = confirm("Are You Sure You Want To Delete?");
        if (proceed) {
            fetch(`https://action-toy-universe-server.onrender.com/toys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = toys.filter(booking => booking._id !== id);
                        setToys(remaining);
                        toast.success('Toy deleted successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
        }
    }

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4 text-center">My Toys</h2>
            <div className="flex justify-end md:mr-10">
                <select onChange={handleSortBy} className="select select-warning max-w-xs mb-5">
                    <option value="default">Default</option>
                    <option value="ascending">Price Low to High</option>
                    <option value="descending">Price High to Low</option>
                </select>
            </div>
            <div className="overflow-x-auto mx-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Ratings</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.length !== 0 ?
                                toys.map(toy => <TableRow key={toy._id} toy={toy} handleDelete={handleDelete} />)
                                :
                                <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
