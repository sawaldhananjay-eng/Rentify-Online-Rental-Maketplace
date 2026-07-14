import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

import { useNavigate } from "react-router-dom";
import {
    FaUsers,
    FaBoxOpen,
    FaClipboardList,
    FaStar,
    FaSignOutAlt,
    FaArrowRight
} from "react-icons/fa";

function AdminDash() {

    const nav = useNavigate();

    const logout = () => {

        localStorage.clear();
        nav("/login");

    };

    const name = localStorage.getItem("name");

    return (

        <>

            <Navbar />

            <section className="dashboard-page">

                <div className="container">

                    <div className="welcome">

                        <span className="login-badge">

                            ADMIN PANEL

                        </span>

                        <h2>

                            Welcome back,
                            <br />

                            {name} 👋

                        </h2>

                        <p>

                            Manage users, products, bookings and keep the
                            Rentify platform running smoothly.

                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard"
                                onClick={() => nav("/manage-users")}
                            >

                                <FaUsers />

                                <h5>

                                    Manage Users

                                </h5>

                                <p>

                                    View, update and manage platform users.

                                </p>

                                <span>

                                    Open

                                    <FaArrowRight />

                                </span>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard"
                                onClick={() => nav("/manage-items")}
                            >

                                <FaBoxOpen />

                                <h5>

                                    Manage Items

                                </h5>

                                <p>

                                    Approve and maintain all listed products.

                                </p>

                                <span>

                                    Open

                                    <FaArrowRight />

                                </span>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard"
                                onClick={() => nav("/manage-bookings")}
                            >

                                <FaClipboardList />

                                <h5>

                                    Bookings

                                </h5>

                                <p>

                                    Monitor every booking on the platform.

                                </p>

                                <span>

                                    Open

                                    <FaArrowRight />

                                </span>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard"
                                onClick={() => nav("/reviews")}
                            >

                                <FaStar />

                                <h5>

                                    Reviews

                                </h5>

                                <p>

                                    Moderate ratings and customer feedback.

                                </p>

                                <span>

                                    Open

                                    <FaArrowRight />

                                </span>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard logout-card"
                                onClick={logout}
                            >

                                <FaSignOutAlt />

                                <h5>

                                    Logout

                                </h5>

                                <p>

                                    Securely sign out of the admin account.

                                </p>

                                <span>

                                    Logout

                                    <FaArrowRight />

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default AdminDash;