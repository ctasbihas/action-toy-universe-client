import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialAuth from '../../components/SocialAuth/SocialAuth';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    useTitle("Sign Up")

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoUrl.value;

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, { displayName: name, photoURL })
                    .then(navigate(from, { replace: true }))
            })
            .catch(err =>
                setError(<div className="alert alert-error shadow-lg mb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! {err.code}.</span>
                    </div>
                </div>))
    }
    return (
        <div className="md:py-10 flex items-center justify-center bg-gray-100">
            <div className="w-full p-6 bg-white rounded-lg shadow-md flex items-center">
                <div className="w-1/2 mr-6 hidden md:flex">
                    <img
                        src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg"
                        alt="Signup Image"
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
                    <p className="mb-4 text-gray-600 text-xl">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                    <form onSubmit={handleSignUp}>
                        <div className='md:flex md:space-x-5'>
                            <div className="mb-4 md:w-1/2">
                                <label htmlFor="name" className="block mb-2 text-gray-800">
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4 md:w-1/2">
                                <label htmlFor="email" className="block mb-2 text-gray-800">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-gray-800">
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoUrl" className="block mb-2 text-gray-800">
                                Photo URL
                            </label>
                            <input
                                required
                                type="url"
                                id="photoUrl"
                                name="photoUrl"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your profile picture url"
                            />
                        </div>
                        {error}
                        <button
                            type="submit"
                            className="bg-red-400 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-red-500"
                        >
                            Sign Up
                        </button>
                    </form>
                    <SocialAuth />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
