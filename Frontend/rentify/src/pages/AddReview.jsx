import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaStar,
    FaCommentDots,
    FaCalendarAlt,
    FaArrowRight
} from "react-icons/fa";
import "../css/Crud.css";

function AddReview() {

    const { id } = useParams();

    const nav = useNavigate();

    const [review, setReview] = useState({
        rating: 5,
        comment: "",
        reviewDate: ""
    });

    const change = (e) => {

        setReview({

            ...review,

            [e.target.name]: e.target.value

        });

    };

    const submit = async (e) => {

        e.preventDefault();

        try {

            const obj = {

                rating: Number(review.rating),

                comment: review.comment,

                reviewDate: review.reviewDate,

                user: {
                    id: Number(localStorage.getItem("id"))
                },

                item: {
                    id: Number(id)
                }

            };

            await api.post("/reviews/add", obj);

            alert("Review Added Successfully");

            nav("/my-bookings");

        } catch (err) {

            alert("Failed To Add Review");

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

                                CUSTOMER REVIEW

                            </span>

                            <h2>

                                Share Your Experience

                            </h2>

                            <p>

                                Help other users by rating and reviewing your rental experience.

                            </p>

                        </div>

                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-7">

                            <div className="formCard">

                                <form onSubmit={submit}>

                                    <div className="input-box">

                                        <FaStar />

                                        <select
                                            name="rating"
                                            value={review.rating}
                                            onChange={change}
                                        >

                                            <option value="5">

                                                ⭐⭐⭐⭐⭐ (5)

                                            </option>

                                            <option value="4">

                                                ⭐⭐⭐⭐ (4)

                                            </option>

                                            <option value="3">

                                                ⭐⭐⭐ (3)

                                            </option>

                                            <option value="2">

                                                ⭐⭐ (2)

                                            </option>

                                            <option value="1">

                                                ⭐ (1)

                                            </option>

                                        </select>

                                    </div>

                                    <div className="input-box textarea-box">

                                        <FaCommentDots />

                                        <textarea
                                            rows="5"
                                            name="comment"
                                            placeholder="Write your review..."
                                            value={review.comment}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaCalendarAlt />

                                        <input
                                            type="date"
                                            name="reviewDate"
                                            value={review.reviewDate}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <button
                                        type="submit"
                                        className="primary-btn"
                                    >

                                        Submit Review

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

export default AddReview;