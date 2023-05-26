import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShopByCategoryLoader } from '../../components/Loader/Loader';
import { AuthContext } from '../../providers/AuthProvider';

const ShopByCategory = () => {
    const { user } = useContext(AuthContext);
    const categories = [{ id: 1, category: "Marvel" }, { id: 2, category: "DC" }, { id: 3, category: "Transformer" }];
    const [toys, setToys] = useState(null);
    const [activeTab, setActiveTab] = useState("Marvel");
    const navigate = useNavigate();

    const handleTabChange = category => {
        setActiveTab(category);
        setToys(null)
    };
    const url = `https://action-toy-universe-server.onrender.com/shopbycategory?category=${activeTab}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);

    const handleViewDetails = (id) => {
        if (user === null) {
            toast.error('To view toy details at first you need to login', {
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
        navigate(`/toy/${id}`)
    }

    return (
        <section className="py-5 bg-gray-100 mt-10">
            <div className="container mx-auto">
                <h2 className="text-3xl text-center font-bold mb-8">Shop by Category</h2>
                <div className="flex justify-center space-x-4">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`px-4 py-2 rounded-lg focus:outline-none ${activeTab === category.category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                            onClick={() => handleTabChange(category.category)}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 md:mx-5">
                {toys ? toys.map(toy => (
                    <div
                        key={toy._id}
                        className="flex flex-col lg:flex-row justify-center items-center mb-4 bg-white rounded-lg p-4 shadow-md w-11/12 mx-auto lg:w-auto lg:px-10"
                    >
                        <img
                            src={toy.toyImage}
                            alt={toy.toyName}
                            className="w-48 h-40 bg-cover rounded-lg"
                        />
                        <div className="ml-4">
                            <h3 className="font-bold text-lg">{toy.toyName}</h3>
                            <p className="text-gray-600">${toy.price}</p>
                            <p className="text-gray-600">Rating: {toy.ratings}</p>
                            <button
                                onClick={() => handleViewDetails(toy._id)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 focus:outline-none" >
                                View Details
                            </button>
                        </div>
                    </div>
                )):
                <ShopByCategoryLoader/>
                }
            </div>
        </section>
    );
};

export default ShopByCategory;

/* const categories = [
        {
            id: 1,
            name: 'Marvel',
            toys: [
                {
                    id: 1,
                    name: 'Iron Man Action Figure',
                    price: 19.99,
                    rating: 4.5,
                    image: 'https://static-01.daraz.com.bd/p/c54ba8d351d809b90e983bc11e40969a.jpg'
                },
                {
                    id: 2,
                    name: 'Captain America Shield',
                    price: 24.99,
                    rating: 4.2,
                    image: 'https://m.media-amazon.com/images/I/715ycB5DWhL.jpg'
                },
                {
                    id: 3,
                    name: 'Spider-Man Web Shooter',
                    price: 14.99,
                    rating: 4.7,
                    image: 'https://m.media-amazon.com/images/I/71k+kjJMAFL._AC_UL1500_.jpg'
                },
                {
                    id: 4,
                    name: 'Hulk Smash Action Figure',
                    price: 29.99,
                    rating: 4.4,
                    image: 'https://i5.walmartimages.com/asr/8913647a-f4b3-4bcb-bb12-b3f6a4049159.4b61bc93c2696ba0e45aa623bf3f39c7.jpeg'
                }
            ]
        },
        {
            id: 2,
            name: 'DC',
            toys: [
                {
                    id: 1,
                    name: 'Batman Utility Belt',
                    price: 22.99,
                    rating: 4.8,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSncarYedtDfKmPDZQzA019AV-QuyuWIpJCyA&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Superman Action Figure',
                    price: 19.99,
                    rating: 4.6,
                    image: 'https://m.media-amazon.com/images/I/41KJTbe8waL.jpg'
                },
                {
                    id: 3,
                    name: 'Wonder Woman Doll',
                    price: 17.99,
                    rating: 4.3,
                    image: 'https://compote.slate.com/images/7a175991-d1c1-4be1-8f9b-7df7e7d5c7c5.png'
                },
                {
                    id: 4,
                    name: 'Flash Action Figure',
                    price: 21.99,
                    rating: 4.5,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0GvWkdyPzKzvv0C-PTkf5pU7NhzKnicFuA&usqp=CAU'
                }
            ]
        },
        {
            id: 3,
            name: 'Transformers',
            toys: [
                {
                    id: 1,
                    name: 'Optimus Prime Action Figure',
                    price: 34.99,
                    rating: 4.7,
                    image: 'https://static-01.daraz.com.bd/p/02e3537ae311493bfa357a1b08fc2682.jpg_720x720.jpg_.webp'
                },
                {
                    id: 2,
                    name: 'Bumblebee Transformer',
                    price: 27.99,
                    rating: 4.5,
                    image: 'https://www.toysrus.com.cn/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-master-catalog-toysrus/default/dw1f7744bc/f/6/3/8/f638c0756743368a82a8ad3327291bb65739ba18_89403_i1.jpg?sw=500&sh=500&q=75'
                },
                {
                    id: 3,
                    name: 'Megatron Action Figure',
                    price: 32.99,
                    rating: 4.4,
                    image: 'https://i5.walmartimages.com/asr/105c1e8f-5b02-4478-ab24-2bb79a110c10.5153b1abb02dcb5fc5c6dca4ed400364.jpeg'
                },
                {
                    id: 4,
                    name: 'Starscream Transformer',
                    price: 29.99,
                    rating: 4.3,
                    image: 'https://cdn11.bigcommerce.com/s-cpuexkide6/images/stencil/1280x1280/products/3195/21715/399ea79c-c777-4286-a620-c134933a4935__38138.1669664033.jpg?c=2'
                }
            ]
        }
    ]; */