import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/About.css";

import {
    FaBullseye,
    FaEye,
    FaLaptopCode,
    FaShieldAlt,
    FaReact,
    FaDatabase,
    FaLock,
    FaMobileAlt
} from "react-icons/fa";

function About() {

    return (

        <>

            <Navbar />

            <section className="aboutHero">

                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="about-badge">

                                ABOUT RENTIFY

                            </span>

                            <h1>

                                Smarter Rentals.
                                <span> Better Experience.</span>

                            </h1>

                            <p>

                                Rentify is a modern rental marketplace where owners
                                can list products and customers can securely browse,
                                book and review rental items. Built using modern web
                                technologies with a clean, responsive and user-friendly
                                experience.

                            </p>

                            <div className="about-features">

                                <div>

                                    <FaShieldAlt />

                                    Secure Authentication

                                </div>

                                <div>

                                    <FaMobileAlt />

                                    Fully Responsive

                                </div>

                                <div>

                                    <FaReact />

                                    Modern React Frontend

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <img
                                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200"
                                className="img-fluid hero-image"
                                alt="Rentify"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="about-section">

                <div className="container">

                    <div className="row g-4">

                        <div className="col-lg-6">

                            <div className="infoCard">

                                <FaBullseye />

                                <h3>

                                    Our Mission

                                </h3>

                                <p>

                                    Build a trusted rental platform where people
                                    can rent instead of buying, helping save money
                                    while making better use of available resources.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="infoCard">

                                <FaEye />

                                <h3>

                                    Our Vision

                                </h3>

                                <p>

                                    Become one of India's most reliable rental
                                    marketplaces by providing a secure, transparent
                                    and seamless rental experience.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="tech-section">

                <div className="container">

                    <div className="section-title">

                        <h2>

                            Technologies Behind Rentify

                        </h2>

                        <p>

                            Built using a modern full stack architecture.

                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">

                            <div className="techCard">

                                <FaReact />

                                <h4>

                                    React

                                </h4>

                                <p>

                                    Responsive frontend using React Router,
                                    Axios and reusable components.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="techCard">

                                <FaDatabase />

                                <h4>

                                    MySQL

                                </h4>

                                <p>

                                    Secure relational database for users,
                                    products, bookings and reviews.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="techCard">

                                <FaLock />

                                <h4>

                                    JWT Security

                                </h4>

                                <p>

                                    Authentication and role-based access
                                    for Admin, Owner and Customer.

                                </p>

                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6">

                            <div className="techCard">

                                <FaLaptopCode />

                                <h4>

                                    Spring Boot

                                </h4>

                                <p>

                                    REST APIs powering the complete
                                    rental management system.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default About;