import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

import {
    FaCreditCard,
    FaUser,
    FaLock,
    FaRupeeSign,
    FaArrowRight
} from "react-icons/fa";

import "../css/Crud.css";

function Payment() {

    const { state } = useLocation();
    const nav = useNavigate();

    const pay = async () => {

        try{

            await api.post("/bookings/add", state.booking);

            alert("Payment Successful");

            nav("/my-bookings");

        }catch(err){

            alert("Payment Failed");

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

                                SECURE PAYMENT

                            </span>

                            <h2>

                                Complete Your Payment

                            </h2>

                            <p>

                                Your booking will be confirmed after successful payment.

                            </p>

                        </div>

                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-7">

                            <div className="formCard">

                                <div className="welcome mb-4">

                                    <h3>

                                        ₹ {state.booking.totalAmount}

                                    </h3>

                                    <p>

                                        Total Amount Payable

                                    </p>

                                </div>

                                <div className="input-box">

                                    <FaCreditCard />

                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                    />

                                </div>

                                <div className="input-box">

                                    <FaUser />

                                    <input
                                        type="text"
                                        placeholder="Card Holder Name"
                                    />

                                </div>

                                <div className="input-box">

                                    <FaLock />

                                    <input
                                        type="password"
                                        placeholder="CVV"
                                        maxLength="3"
                                    />

                                </div>

                                <button
                                    className="primary-btn"
                                    onClick={pay}
                                >

                                    <FaRupeeSign />

                                    Pay Now

                                    <FaArrowRight />

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Payment;