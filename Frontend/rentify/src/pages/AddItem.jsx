import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

import {
    FaBoxOpen,
    FaFileAlt,
    FaRupeeSign,
    FaMapMarkerAlt,
    FaImage,
    FaTags,
    FaArrowRight
} from "react-icons/fa";

import "../css/Crud.css";

function AddItem() {

    const nav = useNavigate();

    const [cats, setCats] = useState([]);

    const [item, setItem] = useState({

        title: "",
        description: "",
        pricePerDay: "",
        location: "",
        imageUrl: "",
        available: true,

        owner: {
            id: localStorage.getItem("id")
        },

        category: {
            id: ""
        }

    });

    useEffect(() => {

        loadCategories();

    }, []);

    const loadCategories = async () => {

        try {

            const res = await api.get("/categories/getall");

            setCats(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const change = (e) => {

        const { name, value } = e.target;

        if (name === "category") {

            setItem({

                ...item,

                category: {
                    id: value
                }

            });

        } else {

            setItem({

                ...item,

                [name]: value

            });

        }

    };

    const save = async (e) => {

        e.preventDefault();

        try {

            await api.post("/items/add", item);

            alert("Item Added Successfully");

            nav("/my-items");

        } catch (err) {

            alert("Unable To Add Item");

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

                                Add Rental Item

                            </h2>

                            <p>

                                List your product and start earning from rentals.

                            </p>

                        </div>

                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-8">

                            <div className="formCard">

                                <form onSubmit={save}>

                                    <div className="input-box">

                                        <FaBoxOpen />

                                        <input
                                            type="text"
                                            placeholder="Item Title"
                                            name="title"
                                            value={item.title}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box textarea-box">

                                        <FaFileAlt />

                                        <textarea
                                            rows="4"
                                            placeholder="Item Description"
                                            name="description"
                                            value={item.description}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaRupeeSign />

                                        <input
                                            type="number"
                                            placeholder="Price Per Day"
                                            name="pricePerDay"
                                            value={item.pricePerDay}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaMapMarkerAlt />

                                        <input
                                            type="text"
                                            placeholder="Location"
                                            name="location"
                                            value={item.location}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaImage />

                                        <input
                                            type="text"
                                            placeholder="Image URL"
                                            name="imageUrl"
                                            value={item.imageUrl}
                                            onChange={change}
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaTags />

                                        <select
                                            className="role-select"
                                            name="category"
                                            onChange={change}
                                            required
                                        >

                                            <option value="">

                                                Select Category

                                            </option>

                                            {

                                                cats.map(c => (

                                                    <option
                                                        key={c.id}
                                                        value={c.id}
                                                    >

                                                        {c.name}

                                                    </option>

                                                ))

                                            }

                                        </select>

                                    </div>

                                    <button
                                        type="submit"
                                        className="primary-btn w-100"
                                    >

                                        Add Item

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

export default AddItem;