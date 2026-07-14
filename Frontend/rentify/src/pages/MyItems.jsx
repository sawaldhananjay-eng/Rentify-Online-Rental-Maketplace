import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaMapMarkerAlt,
    FaRupeeSign,
    FaTrashAlt,
    FaBoxOpen,
    FaArrowRight
} from "react-icons/fa";
import "../css/Crud.css";

function MyItems() {

    const [items, setItems] = useState([]);

    const ownerId = localStorage.getItem("id");

    useEffect(() => {

        loadItems();

    }, []);

    const loadItems = async () => {

        try {

            const res = await api.get("/items/owner/" + ownerId);

            setItems(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteItem = async (id) => {

        if (!window.confirm("Delete Item?")) return;

        await api.delete("/items/delete/" + id);

        loadItems();

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

                                My Rental Items

                            </h2>

                            <p>

                                View and manage all the products you have listed.

                            </p>

                        </div>

                    </div>

                    {

                        items.length === 0 ?

                        <div className="empty-state">

                            <FaBoxOpen
                                size={70}
                                color="#2563eb"
                            />

                            <h3 className="mt-4">

                                No Items Yet

                            </h3>

                            <p>

                                Add your first rental item and start earning.

                            </p>

                            <button
                                className="primary-btn"
                                onClick={() => window.location.href="/add-item"}
                            >

                                Add Item

                                <FaArrowRight />

                            </button>

                        </div>

                        :

                        <div className="row g-4">

                            {

                                items.map(item => (

                                    <div
                                        className="col-lg-4 col-md-6"
                                        key={item.id}
                                    >

                                        <div className="itemCard">

                                            <div className="item-image">

                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.title}
                                                />

                                            </div>

                                            <div className="item-content">

                                                <h4>

                                                    {item.title}

                                                </h4>

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

                                                <button
                                                    className="logout-btn w-100"
                                                    onClick={() => deleteItem(item.id)}
                                                >

                                                    <FaTrashAlt />

                                                    Delete Item

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

export default MyItems;