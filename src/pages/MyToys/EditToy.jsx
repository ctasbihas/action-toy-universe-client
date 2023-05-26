import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const EditToy = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    useTitle("Edit Toy")

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const description = form.description.value;
        const newToyData = { price, quantity, description }

        fetch(`https://action-toy-universe-server.onrender.com/toy/${id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newToyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Toy updated successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate("/mytoys")
                }
                else {
                    toast.error('Failed to update toy', {
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
    return (
        <form onSubmit={handleUpdateToy}>
            <div className="card-body">
                <h1 className='text-2xl'>Change You Toy Information</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' placeholder="New toy price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder="New toy quantity" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy description</span>
                    </label>
                    <textarea placeholder="New toy description" name="description" className="textarea textarea-bordered w-full" required ></textarea>
                </div>
            </div>
            <div className="form-control mb-6">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    );
};

export default EditToy;