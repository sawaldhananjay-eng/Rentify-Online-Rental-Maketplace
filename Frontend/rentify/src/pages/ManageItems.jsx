import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaBoxOpen,
    FaTrashAlt,
    FaMapMarkerAlt,
    FaRupeeSign,
    FaUser,
    FaArrowRight
} from "react-icons/fa";
import "../css/Crud.css";

function ManageItems() {

    const [items, setItems] = useState([]);

    useEffect(() => {

        loadItems();

    }, []);

    const loadItems = async () => {

        try {

            const res = await api.get("/items/getall");

            setItems(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteItem = async (id) => {

        if (!window.confirm("Delete this item?")) return;

        try {

            await api.delete("/items/delete/" + id);

            alert("Item Deleted");

            loadItems();

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

                                Manage Items

                            </h2>

                            <p>

                                View, monitor and remove rental items from the marketplace.

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

                                No Items Found

                            </h3>

                            <p>

                                Rental items will appear here.

                            </p>

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
                                                    onError={(e)=>{
                                                        e.target.src="https://placehold.co/600x400?text=No+Image";
                                                    }}
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

                                                <div className="item-info">

                                                    <span>

                                                        <FaUser />

                                                        {item.owner?.name || "Unknown"}

                                                    </span>

                                                </div>

                                                <button
                                                    className="logout-btn"
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

export default ManageItems;