import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147738789.jpg?size=626&ext=jpg&ga=GA1.2.14140731.1683269659&semt=ais" alt="404 Error" className="mb-8 w-64" />
      <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;