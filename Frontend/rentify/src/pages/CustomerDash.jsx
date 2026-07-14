import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

import { useNavigate } from "react-router-dom";

import {
    FaSearch,
    FaClipboardList,
    FaStar,
    FaUser,
    FaSignOutAlt,
    FaArrowRight
} from "react-icons/fa";

function CustomerDash() {

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

                            CUSTOMER PANEL

                        </span>

                        <h2>

                            Welcome back,
                            <br />
                            {name} 👋

                        </h2>

                        <p>

                            Browse products, manage bookings and track all your rentals from one place.

                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard"
                                onClick={() => nav("/browse-items")}
                            >

                                <FaSearch />

                                <h5>

                                    Browse Items

                                </h5>

                                <p>

                                    Explore electronics, furniture, bikes and much more.

                                </p>

                                <span>

                                    Explore

                                    <FaArrowRight />

                                </span>

                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard"
                                onClick={() => nav("/my-bookings")}
                            >

                                <FaClipboardList />

                                <h5>

                                    My Bookings

                                </h5>

                                <p>

                                    View all your active and completed bookings.

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

                                    Share your experience and read customer reviews.

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
                                onClick={() => nav("/profile")}
                            >

                                <FaUser />

                                <h5>

                                    My Profile

                                </h5>

                                <p>

                                    Update your personal information and account settings.

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

                                    Securely sign out of your Rentify account.

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

export default CustomerDash;