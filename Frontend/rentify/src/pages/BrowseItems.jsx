import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaMapMarkerAlt,
    FaRupeeSign,
    FaArrowRight,
    FaSearch
} from "react-icons/fa";
import "../css/Crud.css";

function BrowseItems() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {

        const res = await api.get("/items/getall");
        setItems(res.data);

    };

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <>

            <Navbar />

            <section className="crudPage">

                <div className="container">

                    <div className="page-header">

                        <div>

                            <span className="login-badge">

                                RENTIFY MARKETPLACE

                            </span>

                            <h2>

                                Browse Rental Items

                            </h2>

                            <p>

                                Find the perfect product for your next rental.

                            </p>

                        </div>

                        <div className="search-box">

                            <FaSearch />

                            <input
                                type="text"
                                placeholder="Search by title or location..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </div>

                    </div>

                    <div className="row g-4">

                        {

                            filteredItems.map(item => (

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

                                                    {item.pricePerDay}/Day

                                                </span>

                                                <span>

                                                    <FaMapMarkerAlt />

                                                    {item.location}

                                                </span>

                                            </div>

                                            <button
                                                className="primary-btn w-100"
                                                onClick={() => nav("/book-item/" + item.id)}
                                            >

                                                Book Now

                                                <FaArrowRight />

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))

                        }

                        {

                            filteredItems.length === 0 &&

                            <div className="text-center py-5">

                                <h4>

                                    No Items Found

                                </h4>

                                <p>

                                    Try another search keyword.

                                </p>

                            </div>

                        }

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default BrowseItems;