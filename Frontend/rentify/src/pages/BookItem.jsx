import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaRupeeSign,
    FaArrowRight,
    FaBoxOpen
} from "react-icons/fa";
import "../css/Crud.css";

function BookItem() {

    const { id } = useParams();
    const nav = useNavigate();

    const [item, setItem] = useState(null);

    const [booking, setBooking] = useState({
        startDate: "",
        endDate: ""
    });

    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadItem();
    }, []);

    const loadItem = async () => {

        try {

            const res = await api.get("/items/get/" + id);

            setItem(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        if (booking.startDate && booking.endDate && item) {

            const s = new Date(booking.startDate);
            const e = new Date(booking.endDate);

            const days = (e - s) / (1000 * 60 * 60 * 24);

            if (days > 0) {

                setTotal(days * item.pricePerDay);

            } else {

                setTotal(0);

            }

        }

    }, [booking, item]);

    const change = (e) => {

        setBooking({

            ...booking,
            [e.target.name]: e.target.value

        });

    };

    const bookItem = (e) => {

        e.preventDefault();

        const obj = {

            startDate: booking.startDate,
            endDate: booking.endDate,
            totalAmount: total,

            user: {
                id: Number(localStorage.getItem("id"))
            },

            item: {
                id: item.id
            }

        };

        nav("/payment", {

            state: {

                booking: obj

            }

        });

    };

    if (!item) {

        return (

            <>
                <Navbar />

                <div className="crudPage">

                    <div className="container">

                        <div className="empty-state">

                            <h3>Loading Item...</h3>

                        </div>

                    </div>

                </div>

            </>

        );

    }

    return (

        <>

            <Navbar />

            <section className="crudPage">

                <div className="container">

                    <div className="page-header">

                        <div>

                            <span className="login-badge">

                                RENTIFY BOOKING

                            </span>

                            <h2>

                                Book Your Item

                            </h2>

                            <p>

                                Select your rental duration and continue to payment.

                            </p>

                        </div>

                    </div>

                    <div className="row g-5 align-items-center">

                        <div className="col-lg-6">

                            <div className="itemCard">

                                <div className="item-image">

                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                    />

                                </div>

                                <div className="item-content">

                                    <h3>

                                        {item.title}

                                    </h3>

                                    <p>

                                        {item.description}

                                    </p>

                                    <div className="item-info">

                                        <span>

                                            <FaRupeeSign />

                                            ₹ {item.pricePerDay}/Day

                                        </span>

                                        <span>

                                            <FaMapMarkerAlt />

                                            {item.location}

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="formCard">

                                <form onSubmit={bookItem}>

                                    <div className="input-box">

                                        <FaCalendarAlt />

                                        <input
                                            type="date"
                                            name="startDate"
                                            value={booking.startDate}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaCalendarAlt />

                                        <input
                                            type="date"
                                            name="endDate"
                                            value={booking.endDate}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="welcome mt-4">

                                        <h3>

                                            ₹ {total}

                                        </h3>

                                        <p>

                                            Total Rental Amount

                                        </p>

                                    </div>

                                    <button
                                        type="submit"
                                        className="primary-btn w-100 mt-4"
                                    >

                                        Proceed To Payment

                                        <FaArrowRight />

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default BookItem;