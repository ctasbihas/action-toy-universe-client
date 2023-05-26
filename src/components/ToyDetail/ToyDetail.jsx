import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetail = () => {
    const { id } = useParams();
    const [toy, setToy] = useState(null);
    useEffect(() => {
        fetch(`https://action-toy-universe-server.onrender.com/toy/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [id]);
    useTitle(toy?.toyName || "Toy Detail")
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 pr-0 md:pr-8">
                    <img src={toy?.toyImage} alt="Toy" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-8">
                    <h2 className="text-2xl font-bold mb-4">{toy?.toyName}</h2>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-600">Seller:</span>
                        <span className="text-gray-800">{toy?.sellerName}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-600">Seller Email:</span>
                        <span className="text-gray-800">{toy?.sellerEmail}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-600">Category:</span>
                        <span className="text-gray-800">{toy?.category}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-600">Price:</span>
                        <span className="text-green-600">${toy?.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-600">Quantity:</span>
                        <span className="text-gray-800">{toy?.quantity}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-600">Ratings:</span>
                        <span className="text-yellow-500">{toy?.ratings}</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Description:</h4>
                        <p className="text-gray-800">{toy?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetail;