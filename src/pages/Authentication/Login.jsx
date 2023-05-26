import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialAuth from '../../components/SocialAuth/SocialAuth';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    useTitle("Login")

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(() => navigate(from, { replace: true }))
            .catch(err =>
                setError(<div className="alert alert-error shadow-lg mb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! {err.code}.</span>
                    </div>
                </div>))
    }
    return (
        <div className="md:py-10 flex items-center justify-center bg-gray-100 md:px-20 px-5">
            <div className="w-full p-6 bg-white rounded-lg shadow-md flex flex-row-reverse items-center">
                <div className="w-1/2 mr-6 hidden md:flex">
                    <img
                        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
                        alt="Signup Image"
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">Login</h2>
                    <p className="mb-4 text-gray-600 text-xl">
                        New to Action Toy Universe?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
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
                        {error}
                        <button
                            type="submit"
                            className="bg-teal-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-teal-600"
                        >
                            Login
                        </button>
                    </form>
                    <SocialAuth />
                </div>
            </div>
        </div>
    );
};

export default Login;
