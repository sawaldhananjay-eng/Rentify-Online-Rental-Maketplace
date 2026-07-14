import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    FaEnvelope,
    FaLock,
    FaArrowRight,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";
import "../css/Login.css";

function Login() {

    const nav = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const change = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const login = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/users/login", user);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("name", res.data.name);

            if (res.data.role === "ADMIN") {

                nav("/admin");

            } else if (res.data.role === "OWNER") {

                nav("/owner");

            } else {

                nav("/customer");

            }

        } catch (err) {

            alert("Invalid Email or Password");

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
                                    Welcome Back 👋
                                </span>

                                <h1>
                                    Access your
                                    <span> Rentify </span>
                                    account.
                                </h1>

                                <p>
                                    Manage rentals, bookings and products
                                    from one clean dashboard.
                                </p>

                                <div className="login-points">
                                    <div>✔ Secure Authentication</div>
                                    <div>✔ Fast Booking</div>
                                    <div>✔ Verified Owners</div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-5 col-md-8">

                            <div className="login-card">

                                <h2>Login</h2>

                                <p>
                                    Sign in to continue.
                                </p>

                                <form onSubmit={login}>

                                    <div className="input-box">

                                        <FaEnvelope />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={user.email}
                                            onChange={change}
                                            required
                                        />

                                    </div>

                                    <div className="input-box">

                                        <FaLock />

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Password"
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

                                    <button
                                        type="submit"
                                        className="login-btn"
                                    >

                                        Login

                                        <FaArrowRight />

                                    </button>

                                </form>

                                <div className="register-link">

                                    Don't have an account?

                                    <Link to="/register">

                                        Register

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

export default Login;