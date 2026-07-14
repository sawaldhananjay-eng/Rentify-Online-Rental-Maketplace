import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaUser,
    FaCalendarAlt,
    FaRupeeSign,
    FaCheckCircle,
    FaClock,
    FaArrowRight
} from "react-icons/fa";
import "../css/Crud.css";

function OwnerBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        loadBookings();

    }, []);

    const loadBookings = async () => {

        try {

            const res = await api.get(
                "/bookings/owner/" + localStorage.getItem("id")
            );

            setBookings(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const approveBooking = async (id) => {

        try {

            await api.put("/bookings/approve/" + id);

            alert("Booking Approved Successfully");

            loadBookings();

        } catch (err) {

            alert("Approval Failed");

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

                                OWNER PANEL

                            </span>

                            <h2>

                                Booking Requests

                            </h2>

                            <p>

                                Review incoming rental requests and approve bookings.

                            </p>

                        </div>

                    </div>

                    {

                        bookings.length === 0 ?

                        <div className="empty-state">

                            <FaClock
                                size={70}
                                color="#2563eb"
                            />

                            <h3 className="mt-4">

                                No Booking Requests

                            </h3>

                            <p>

                                New booking requests will appear here.

                            </p>

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
                                                    onError={(e)=>{
                                                        e.target.src="https://placehold.co/600x400?text=No+Image";
                                                    }}
                                                />

                                            </div>

                                            <div className="item-content">

                                                <h4>

                                                    {book.item.title}

                                                </h4>

                                                <div className="item-info">

                                                    <span>

                                                        <FaUser />

                                                        {book.user.name}

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

                                                {

                                                    book.status === "PENDING"

                                                    ?

                                                    <button
                                                        className="primary-btn"
                                                        onClick={() => approveBooking(book.id)}
                                                    >

                                                        Approve Booking

                                                        <FaArrowRight />

                                                    </button>

                                                    :

                                                    <button
                                                        className="logout-btn"
                                                        disabled
                                                    >

                                                        Approved

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

export default OwnerBookings;