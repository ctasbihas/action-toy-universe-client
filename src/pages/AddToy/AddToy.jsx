import { useContext } from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext)
    useTitle("Add A Toy")

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = parseFloat(form.toyPrice.value);
        const ratings = parseFloat(form.ratings.value);
        const quantity = parseInt(form.quantity.value);
        const toyImage = form.toyPhoto.value;
        const description = form.description.value;
        const toyData = { toyName, sellerName, sellerEmail, category, price, ratings, quantity, toyImage, description };

        fetch('https://action-toy-universe-server.onrender.com/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(() => {
                toast.success('Toy added successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                form.reset();
            })
            .catch(() => toast.error('Failed to add toy', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }));
    }
    return (
        <div className="hero bg-base-200 my-10">
            <div className="w-full flex-col">
                <div className="text-center mx-auto md:w-1/2">
                    <h1 className="text-2xl md:text-5xl font-bold">Add Your Own Toy</h1>
                    <p className="md:py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddToy} className="card-body">
                        <div className="md:flex space-x-2">
                            <div className="md:w-1/2 form-control">
                                <label className="label">
                                    <span className="label-text">Toy name</span>
                                </label>
                                <input type="text" placeholder="Toy name" name="toyName" className="input input-bordered" required />
                            </div>
                            <div className="md:w-1/2 form-control">
                                <label className="label">
                                    <span className="label-text">Seller name</span>
                                </label>
                                <input type="text" placeholder="Seller name" name="sellerName" className="input input-bordered" defaultValue={user?.displayName} required />
                            </div>
                            <div className="md:w-1/2 form-control">
                                <label className="label">
                                    <span className="label-text">Seller email</span>
                                </label>
                                <input type="email" name="sellerEmail" defaultValue={user?.email} placeholder="Seller email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex space-x-2">
                            <div className="md:w-full form-control">
                                <label className="label">
                                    <span className="label-text">Toy category</span>
                                </label>
                                <select name="category" className="select select-success" required>
                                    <option disabled defaultValue="">Pick your toy category</option>
                                    <option>Marvel</option>
                                    <option>DC</option>
                                    <option>Transformer</option>
                                </select>
                            </div>
                            <div className="md:w-full form-control">
                                <label className="label">
                                    <span className="label-text">Toy price</span>
                                </label>
                                <input type="number" name="toyPrice" placeholder="Toy price" className="input input-bordered" required />
                            </div>
                            <div className="md:w-full form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered" required />
                            </div>
                            <div className="md:w-full form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex space-x-2">
                            <div className="md:w-1/2 form-control">
                                <label className="label">
                                    <span className="label-text">Toy photo</span>
                                </label>
                                <input type="text" name="toyPhoto" placeholder="Toy photo" className="input input-bordered" required />
                            </div>
                            <div className="md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy description</span>
                                </label>
                                <textarea placeholder="Bio" name="description" className="textarea textarea-bordered w-full" required ></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Add Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;