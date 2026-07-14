import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaClipboardList,
    FaTrashAlt,
    FaUser,
    FaBoxOpen,
    FaRupeeSign,
    FaCheckCircle
} from "react-icons/fa";
import "../css/Crud.css";

function ManageBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        loadBookings();

    }, []);

    const loadBookings = async () => {

        try {

            const res = await api.get("/bookings/getall");

            setBookings(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteBooking = async (id) => {

        if (!window.confirm("Delete this booking?")) return;

        try {

            await api.delete("/bookings/delete/" + id);

            alert("Booking Deleted");

            loadBookings();

        } catch (err) {

            alert("Delete Failed");

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

                                ADMIN PANEL

                            </span>

                            <h2>

                                Manage Bookings

                            </h2>

                            <p>

                                Monitor and manage every booking across the Rentify platform.

                            </p>

                        </div>

                    </div>

                    {

                        bookings.length === 0 ?

                        <div className="empty-state">

                            <FaClipboardList
                                size={70}
                                color="#2563eb"
                            />

                            <h3 className="mt-4">

                                No Bookings Found

                            </h3>

                            <p>

                                Booking records will appear here.

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

                                            <div className="item-content">

                                                <h4>

                                                    {book.item?.title}

                                                </h4>

                                                <div className="item-info">

                                                    <span>

                                                        <FaUser />

                                                        {book.user?.name}

                                                    </span>

                                                </div>

                                                <div className="item-info">

                                                    <span>

                                                        <FaRupeeSign />

                                                        ₹ {book.totalAmount}

                                                    </span>

                                                </div>

                                                <div className="item-info">

                                                    <span>

                                                        <FaCheckCircle />

                                                        {book.status}

                                                    </span>

                                                </div>

                                                <button
                                                    className="logout-btn"
                                                    onClick={() => deleteBooking(book.id)}
                                                >

                                                    <FaTrashAlt />

                                                    Delete Booking

                                                </button>

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

export default ManageBookings;