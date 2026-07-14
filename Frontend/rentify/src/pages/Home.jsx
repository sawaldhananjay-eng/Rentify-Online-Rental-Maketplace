import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero.jpg";
import "../css/Home.css";

import { useNavigate } from "react-router-dom";

import {
    FaLaptop,
    FaBicycle,
    FaCouch,
    FaFootballBall,
    FaShieldAlt,
    FaUserCheck,
    FaBolt,
    FaStar,
    FaArrowRight,
    FaBoxOpen,
    FaUsers,
    FaCalendarCheck
} from "react-icons/fa";

function Home() {

    const nav = useNavigate();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const dashboard = () => {

        if (role === "OWNER") {

            nav("/owner");

        } else {

            nav("/customer");

        }

    };

    return (

        <>

            <Navbar />

            <section className="hero">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <span className="hero-badge">

                                India's Smart Rental Platform

                            </span>

                            <h1>

                                Rent Anything.
                                <br />

                                <span>

                                    Earn From Everything.

                                </span>

                            </h1>

                            <p>

                                Discover trusted rentals for electronics,
                                furniture, bikes and sports equipment.
                                Secure bookings, verified owners and
                                seamless experience.

                            </p>

                            <div className="hero-buttons">

                                {

                                    !token ?

                                        <>

                                            <button
                                                className="primary-btn"
                                                onClick={() => nav("/register")}
                                            >

                                                Get Started

                                            </button>

                                            <button
                                                className="secondary-btn"
                                                onClick={() => nav("/login")}
                                            >

                                                Login

                                            </button>

                                        </>

                                        :

                                        <button
                                            className="primary-btn"
                                            onClick={dashboard}
                                        >

                                            Dashboard

                                        </button>

                                }

                            </div>

                            <div className="hero-stats">

                                <div>

                                    <h3>1200+</h3>

                                    <span>Products</span>

                                </div>

                                <div>

                                    <h3>500+</h3>

                                    <span>Owners</span>

                                </div>

                                <div>

                                    <h3>10K+</h3>

                                    <span>Bookings</span>

                                </div>

                                <div>

                                    <h3>4.9★</h3>

                                    <span>Ratings</span>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 text-center">

                            <div className="hero-image-card">

                                <img
                                    src={hero}
                                    className="img-fluid"
                                    alt="Hero"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className=" section-space">

                <div className="container-fluid">

                <div className="section-title">

                    <h2>

                        Browse Popular Categories

                    </h2>

                    <p>

                        Everything you need is just a few clicks away.

                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-lg-3 col-md-6">

                        <div className="category-card">

                            <FaLaptop />

                            <h4>Electronics</h4>

                            <p>

                                Laptops, Cameras,
                                Tablets and more.

                            </p>

                            <span>

                                Explore

                                <FaArrowRight />

                            </span>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6">

                        <div className="category-card">

                            <FaBicycle />

                            <h4>Vehicles</h4>

                            <p>

                                Bikes, Scooters and
                                Daily commute rentals.

                            </p>

                            <span>

                                Explore

                                <FaArrowRight />

                            </span>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6">

                        <div className="category-card">

                            <FaCouch />

                            <h4>Furniture</h4>

                            <p>

                                Sofas, Chairs,
                                Tables and Beds.

                            </p>

                            <span>

                                Explore

                                <FaArrowRight />

                            </span>

                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6">

                        <div className="category-card">

                            <FaFootballBall />

                            <h4>Sports</h4>

                            <p>

                                Sports gear
                                for every game.

                            </p>

                            <span>

                                Explore

                                <FaArrowRight />

                            </span>

                        </div>

                    </div>

                </div>

                </div>


            </section>
	                <section className="why-section">

                <div className="container">

                    <div className="section-title">

                        <h2>
                            Why Choose Rentify
                        </h2>

                        <p>
                            Built for speed, trust and convenience.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card">

                                <div className="feature-icon">

                                    <FaShieldAlt />

                                </div>

                                <h4>Secure Platform</h4>

                                <p>

                                    JWT authentication keeps your
                                    account protected.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card">

                                <div className="feature-icon">

                                    <FaUserCheck />

                                </div>

                                <h4>Verified Users</h4>

                                <p>

                                    Rent confidently from trusted
                                    community members.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card">

                                <div className="feature-icon">

                                    <FaBolt />

                                </div>

                                <h4>Instant Booking</h4>

                                <p>

                                    Fast booking process with
                                    smooth rental experience.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="feature-card">

                                <div className="feature-icon">

                                    <FaStar />

                                </div>

                                <h4>Top Rated</h4>

                                <p>

                                    Honest reviews help you
                                    choose the right product.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="stats-section">

                <div className="container">

                    <div className="row text-center g-4">

                        <div className="col-lg-4">

                            <div className="stats-card">

                                <FaBoxOpen />

                                <h2>1200+</h2>

                                <p>Rental Products</p>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="stats-card">

                                <FaUsers />

                                <h2>500+</h2>

                                <p>Trusted Owners</p>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="stats-card">

                                <FaCalendarCheck />

                                <h2>10,000+</h2>

                                <p>Successful Bookings</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="cta-section">

                <div className="container">

                    <div className="cta-card">

                        <h2>

                            Ready To Start Renting?

                        </h2>

                        <p>

                            Join thousands of users who rent smarter with Rentify.

                        </p>

                        {

                            !token ?

                            <div className="hero-buttons">

                                <button
                                    className="primary-btn"
                                    onClick={() => nav("/register")}
                                >

                                    Get Started

                                </button>

                                <button
                                    className="secondary-btn"
                                    onClick={() => nav("/login")}
                                >

                                    Login

                                </button>

                            </div>

                            :

                            <button
                                className="primary-btn"
                                onClick={dashboard}
                            >

                                Go To Dashboard

                            </button>

                        }

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Home;