import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer/>
        </div>
    );
};

export default Main;