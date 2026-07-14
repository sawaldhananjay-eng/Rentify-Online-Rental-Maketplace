import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaUsers,
    FaTrashAlt,
    FaUserCircle,
    FaEnvelope,
    FaPhone,
    FaUserTag
} from "react-icons/fa";
import "../css/Crud.css";

function ManageUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        try {

            const res = await api.get("/users/getall");

            setUsers(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteUser = async (id) => {

        if (!window.confirm("Delete this user?")) return;

        try {

            await api.delete("/users/delete/" + id);

            alert("User Deleted");

            loadUsers();

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

                                Manage Users

                            </h2>

                            <p>

                                View and manage all registered users.

                            </p>

                        </div>

                    </div>

                    {

                        users.length === 0 ?

                        <div className="empty-state">

                            <FaUsers
                                size={70}
                                color="#2563eb"
                            />

                            <h3 className="mt-4">

                                No Users Found

                            </h3>

                            <p>

                                Registered users will appear here.

                            </p>

                        </div>

                        :

                        <div className="row g-4">

                            {

                                users.map(user => (

                                    <div
                                        className="col-lg-4 col-md-6"
                                        key={user.id}
                                    >

                                        <div className="itemCard">

                                            <div className="item-content">

                                                <div className="text-center mb-4">

                                                    <FaUserCircle
                                                        size={70}
                                                        color="#2563eb"
                                                    />

                                                </div>

                                                <h4 className="text-center">

                                                    {user.name}

                                                </h4>

                                                <div className="item-info">

                                                    <span>

                                                        <FaEnvelope />

                                                        {user.email}

                                                    </span>

                                                </div>

                                                <div className="item-info">

                                                    <span>

                                                        <FaPhone />

                                                        {user.phone}

                                                    </span>

                                                </div>

                                                <div className="item-info">

                                                    <span>

                                                        <FaUserTag />

                                                        {user.role}

                                                    </span>

                                                </div>

                                                <button
                                                    className="logout-btn mt-3"
                                                    onClick={() => deleteUser(user.id)}
                                                >

                                                    <FaTrashAlt />

                                                    Delete User

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

export default ManageUsers;