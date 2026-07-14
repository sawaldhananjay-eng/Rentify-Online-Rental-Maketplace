import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaCalendarAlt,
    FaRupeeSign,
    FaCheckCircle,
    FaArrowRight,
    FaBoxOpen
} from "react-icons/fa";
import "../css/Crud.css";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    const userId = localStorage.getItem("id");

    const nav = useNavigate();

    useEffect(() => {

        loadBookings();

    }, []);

    const loadBookings = async () => {

        try {

            const res = await api.get("/bookings/user/" + userId);

            setBookings(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <>

            <Navbar />

            <section className="crudPage">

                <div className="container">

                    <div className="page-header">

                        <div>

                            <span className="login-badge">

                                MY BOOKINGS

                            </span>

                            <h2>

                                Rental History

                            </h2>

                            <p>

                                View all your current and previous rental bookings.

                            </p>

                        </div>

                    </div>

                    {

                        bookings.length === 0 ?

                        <div className="empty-state">

                            <FaBoxOpen
                                size={70}
                                color="#2563eb"
                            />

                            <h3 className="mt-4">

                                No Bookings Found

                            </h3>

                            <p>

                                Start exploring products and make your first booking.

                            </p>

                            <button
                                className="primary-btn"
                                onClick={() => nav("/browse-items")}
                            >

                                Browse Items

                                <FaArrowRight />

                            </button>

                        </div>

                        :

                        <div className="row g-4">

                            {

                                bookings.map(book => (

                                    <div
                                        className="col-lg-4 col-md-6"
                                        key={book.id}
                                    >

                                        <div className="itemCard">

                                            <div className="item-image">

                                                <img
                                                    src={book.item.imageUrl}
                                                    alt={book.item.title}
                                                />

                                            </div>

                                            <div className="item-content">

                                                <h4>

                                                    {book.item.title}

                                                </h4>

                                                <div className="item-info">

                                                    <span>

                                                        <FaRupeeSign />

                                                        ₹ {book.totalAmount}

                                                    </span>

                                                    <span>

                                                        <FaCheckCircle />

                                                        {book.status}

                                                    </span>

                                                </div>

                                                <div className="item-info">

                                                    <span>

                                                        <FaCalendarAlt />

                                                        {book.startDate}

                                                    </span>

                                                    <span>

                                                        <FaCalendarAlt />

                                                        {book.endDate}

                                                    </span>

                                                </div>

                                                {

                                                    book.status === "COMPLETED" &&

                                                    <button
                                                        className="primary-btn w-100"
                                                        onClick={() => nav("/AddReview/" + book.item.id)}
                                                    >

                                                        Add Review

                                                        <FaArrowRight />

                                                    </button>

                                                }

                                            </div>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    }

                </div>

            </section>

            <Footer />

        </>

    );

}

export default MyBookings;