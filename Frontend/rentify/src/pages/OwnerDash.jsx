import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

import { useNavigate } from "react-router-dom";
import {
    FaPlusCircle,
    FaBoxOpen,
    FaStar,
    FaUser,
    FaSignOutAlt,
    FaArrowRight
} from "react-icons/fa";

function OwnerDash() {

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

                            OWNER PANEL

                        </span>

                        <h2>

                            Welcome back,
                            <br />
                            {name} 👋

                        </h2>

                        <p>

                            Manage your products, bookings and customer requests
                            from one beautiful dashboard.

                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">

                            <div
                                className="dashCard"
                                onClick={() => nav("/add-item")}
                            >

                                <FaPlusCircle />

                                <h5>

                                    Add Item

                                </h5>

                                <p>

                                    Publish a new rental product.

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
                                onClick={() => nav("/my-items")}
                            >

                                <FaBoxOpen />

                                <h5>

                                    My Items

                                </h5>

                                <p>

                                    Manage all your listed products.

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
                                onClick={() => nav("/owner-bookings")}
                            >

                                <FaBoxOpen />

                                <h5>

                                    Booking Requests

                                </h5>

                                <p>

                                    Accept or reject customer requests.

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

                                    Read ratings and customer feedback.

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

                                    Profile

                                </h5>

                                <p>

                                    Update your personal information.

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

                                    Securely sign out of your account.

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

export default OwnerDash;