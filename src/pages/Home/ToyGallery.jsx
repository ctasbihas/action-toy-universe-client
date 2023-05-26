import { useEffect, useState } from "react";

const ToyGallery = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://action-toy-universe-server.onrender.com/hotdealtoys')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <section className="mt-10 px-2">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Hottest Deals of the Season!</h2>
                <p className="text-lg text-gray-700 mt-2 lg:w-1/2 mx-auto">
                    Discover our curated collection of the hottest deals of the season.
                    Explore top-selling products with incredible discounts and take
                    advantage of these limited-time offers. From trendy gadgets to
                    must-have accessories, find unbeatable prices on high-quality items.
                    Don't miss out on these amazing deals – shop now and save big!
                </p>
            </div>
            <div className="grid gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => (
                        <div key={product._id} className="card card-compact mx-auto w-11/12 bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt={product.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <span className="text-gray-500 line-through mr-1">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <span className="text-red-500 font-bold">
                                            ${(
                                                product.price -
                                                (product.price * product.discount) / 100
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ToyGallery;
