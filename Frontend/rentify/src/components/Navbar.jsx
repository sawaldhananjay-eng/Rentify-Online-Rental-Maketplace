import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaCube
} from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {

    const nav = useNavigate();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const logout = () => {
        localStorage.clear();
        nav("/login");
    };

    return (

        <header className="nav-wrapper">

            <div className="container">

                <nav className="navbar navbar-expand-lg custom-navbar">

                    <Link className="navbar-brand brand" to="/">

                        <div className="brand-logo">

                            <FaCube />

                        </div>

                        <div>

                            <span className="brand-title">

                                Rentify

                            </span>

                            <small>

                                Smart Rental Marketplace

                            </small>

                        </div>

                    </Link>

                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="nav"
                    >

                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            <li className="nav-item">

                                <Link className="nav-link custom-link" to="/">

                                    <FaHome />

                                    <span>Home</span>

                                </Link>

                            </li>

                            <li className="nav-item">

                                <Link className="nav-link custom-link" to="/about">

                                    <FaInfoCircle />

                                    <span>About</span>

                                </Link>

                            </li>

                            {

                                !token ?

                                <>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link custom-link"
                                            to="/login"
                                        >

                                            <FaSignInAlt />

                                            <span>Login</span>

                                        </Link>

                                    </li>

                                    <li className="nav-item ms-lg-3">

                                        <Link
                                            className="primary-nav-btn"
                                            to="/register"
                                        >

                                            <FaUserPlus />

                                            <span>

                                                Get Started

                                            </span>

                                        </Link>

                                    </li>

                                </>

                                :

                                <>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link custom-link"
                                            to={
                                                role === "ADMIN"
                                                ? "/admin"
                                                : role === "OWNER"
                                                ? "/owner"
                                                : "/customer"
                                            }
                                        >

                                            <FaUser />

                                            <span>

                                                Dashboard

                                            </span>

                                        </Link>

                                    </li>

                                    <li className="nav-item ms-lg-3">

                                        <button
                                            className="logout-btn"
                                            onClick={logout}
                                        >

                                            <FaSignOutAlt />

                                            Logout

                                        </button>

                                    </li>

                                </>

                            }

                        </ul>

                    </div>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;