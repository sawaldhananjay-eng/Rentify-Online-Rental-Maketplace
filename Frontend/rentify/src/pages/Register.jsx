import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaArrowRight
} from "react-icons/fa";
import "../css/Register.css";

function Register() {

    const nav = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "CUSTOMER"
    });

    const [showPassword, setShowPassword] = useState(false);

    const change = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const register = async (e) => {

        e.preventDefault();

        try {

            await api.post("/users/register", user);

            alert("Registration Successful");

            nav("/login");

        } catch (err) {

            alert(err.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <>

            <Navbar />

            <section className="login-page">

                <div className="container">

                    <div className="row align-items-center justify-content-center">

                        <div className="col-lg-5 d-none d-lg-block">

                            <div className="login-left">

                                <span className="login-badge">

                                    Join Rentify 🚀

                                </span>

                                <h1>

                                    Create your
                                    <span> Rentify </span>
                                    account.

                                </h1>

                                <p>

                                    Become a customer or owner and start renting
                                    smarter today.

                                </p>

                                <div className="login-points">

                                    <div>✔ Secure Registration</div>
                                    <div>✔ Verified Community</div>
                                    <div>✔ Fast Rental Experience</div>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 col-md-8">

                            <div className="login-card">

                                <h2>

                                    Create Account

                                </h2>

                                <p>

                                    Fill in your details to continue.

                                </p>

                                <form onSubmit={register}>

                                    <div className="input-box">

                                        <FaUser />

                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            name="name"
                                            value={user.name}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaEnvelope />

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            value={user.email}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaLock />

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            name="password"
                                            value={user.password}
                                            onChange={change}
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >

                                            {
                                                showPassword
                                                    ? <FaEyeSlash />
                                                    : <FaEye />
                                            }

                                        </button>

                                    </div>

                                    <div className="input-box">

                                        <FaPhone />

                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phone"
                                            value={user.phone}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box textarea-box">

                                        <FaMapMarkerAlt />

                                        <input
                                            type="text"
                                            placeholder="Address"
                                            name="address"
                                            value={user.address}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                <div className="input-box">

                                    <FaUser />

                                    <select
                                        className="role-select"
                                        name="role"
                                        value={user.role}
                                        onChange={change}
                                    >

                                        <option value="CUSTOMER">
                                            Customer
                                        </option>

                                        <option value="OWNER">
                                            Owner
                                        </option>

                                    </select>

                                </div>

                                    <button
                                        type="submit"
                                        className="login-btn"
                                    >

                                        Create Account

                                        <FaArrowRight />

                                    </button>

                                </form>

                                <div className="register-link">

                                    Already have an account?

                                    <Link to="/login">

                                        Login

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Register;