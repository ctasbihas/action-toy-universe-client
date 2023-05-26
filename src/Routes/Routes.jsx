import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ToyDetail from "../components/ToyDetail/ToyDetail";
import Main from "../layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Blogs from "../pages/Blogs/Blogs";
import EditToy from "../pages/MyToys/EditToy";
import MyToys from "../pages/MyToys/MyToys";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AllToys from "../pages/Toys/Toys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/alltoys",
                element: <AllToys/>,
                loader: () => fetch('https://action-toy-universe-server.onrender.com/totalToys')
            },
            {
                path: "/addtoy",
                element: <PrivateRoute><AddToy/></PrivateRoute>
            },
            {
                path: "/mytoys",
                element: <PrivateRoute><MyToys/></PrivateRoute>
            },
            {
                path: "/toy/:id",
                element: <PrivateRoute><ToyDetail/></PrivateRoute>
            },
            {
                path: "/edittoy/:id",
                element: <PrivateRoute><EditToy/></PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]);

export default router;