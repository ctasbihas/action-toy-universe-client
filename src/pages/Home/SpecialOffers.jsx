import { useEffect, useState } from "react";
import { OffersSectionLoader } from "../../components/Loader/Loader";

const SpecialOffers = () => {
    const [offers, setOffers] = useState(null);
    useEffect(() => {
        fetch('https://action-toy-universe-server.onrender.com/offeredtoys')
        .then(res => res.json())
        .then(data => setOffers(data))
    }, []);
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="md:text-3xl text-center font-bold mb-4">Special Offers for villains</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {offers ? offers.map((offer) => (
                        <div key={offer._id} className="mb-8">
                            <div className="relative">
                                <img src={offer.image} alt={offer.title} className="w-full rounded-lg mb-4" />
                                <span className="bg-red-500 text-white px-2 py-1 rounded-md absolute top-2 right-2">
                                    {offer.discount}% OFF
                                </span>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                                <p className="text-gray-600 mb-2">{offer.description}</p>
                                <div className="flex items-center">
                                    <span className="text-gray-600 line-through mr-2">${offer.price.toFixed(2)}</span>
                                    <span className="text-red-500 font-semibold">${(offer.price - (offer.price * offer.discount) / 100).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    )):
                    <OffersSectionLoader/>
                    }

                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;
