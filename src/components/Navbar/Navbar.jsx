import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const NavItems = (
        <>
            <li>
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/alltoys" className="nav-link">
                    All Toys
                </Link>
            </li>
            {user?.email ? (
                <>
                    <li>
                        <Link to="/mytoys" className="nav-link">
                            My Toys
                        </Link>
                    </li>
                    <li>
                        <Link to="/addtoy" className="nav-link">
                            Add a Toy
                        </Link>
                    </li>
                </>
            ) : (
                <li>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            )}
            <li>
                <Link to="/blogs" className="nav-link">
                    Blogs
                </Link>
            </li>
        </>
    );
    const handleLogout = () => {
        logOut();
    };
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown dropdown-start">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl space-x-2">
                    <img className="w-12 h-12" src={logo} alt="" />
                    <span className="hidden sm:flex">Action Toy Universe</span>
                    <span className="sm:hidden">AUT</span>
                </Link>
            </div>
            <div
                className={
                    user?.email
                        ? "navbar-center hidden lg:flex"
                        : "navbar-end hidden lg:flex"
                }
            >
                <ul className="menu menu-horizontal items-center px-1 gap-x-3">
                    {NavItems}
                </ul>
            </div>
            {user?.email && (
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-success" data-tip={user.displayName}>
                            <div className="w-full rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="nav-link">Profile</a>
                            </li>
                            <li>
                                <a className="nav-link">Settings</a>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="nav-link">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;