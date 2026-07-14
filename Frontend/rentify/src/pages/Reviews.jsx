import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaStar,
    FaUserCircle,
    FaCalendarAlt,
    FaCommentDots
} from "react-icons/fa";
import "../css/Crud.css";

function Reviews() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        loadReviews();

    }, []);

    const loadReviews = async () => {

        try {

            const res = await api.get("/reviews/getall");

            setReviews(res.data);

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

                                CUSTOMER REVIEWS

                            </span>

                            <h2>

                                What Customers Say

                            </h2>

                            <p>

                                Read genuine reviews and ratings shared by our users.

                            </p>

                        </div>

                    </div>

                    {

                        reviews.length === 0 ?

                        <div className="empty-state">

                            <FaCommentDots
                                size={70}
                                color="#2563eb"
                            />

                            <h3 className="mt-4">

                                No Reviews Yet

                            </h3>

                            <p>

                                Customer reviews will appear here after completed rentals.

                            </p>

                        </div>

                        :

                        <div className="row g-4">

                            {

                                reviews.map(review => (

                                    <div
                                        className="col-lg-4 col-md-6"
                                        key={review.id}
                                    >

                                        <div className="itemCard">

                                            <div className="item-content">

                                                <h4>

                                                    {review.item.title}

                                                </h4>

                                                <div className="item-info">

                                                    <span>

                                                        <FaStar />

                                                        {review.rating}/5

                                                    </span>

                                                    <span>

                                                        <FaCalendarAlt />

                                                        {review.reviewDate}

                                                    </span>

                                                </div>

                                                <p>

                                                    "{review.comment}"

                                                </p>

                                                <hr />

                                                <div className="d-flex align-items-center gap-2">

                                                    <FaUserCircle
                                                        size={28}
                                                        color="#2563eb"
                                                    />

                                                    <strong>

                                                        {review.user.name}

                                                    </strong>

                                                </div>

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

export default Reviews;