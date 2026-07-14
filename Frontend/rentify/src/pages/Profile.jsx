import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Profile.css";
import { FaUserCircle, FaIdBadge, FaUserTag } from "react-icons/fa";

function Profile() {

    return (

        <>

            <Navbar />

            <div className="profilePage">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-7">

                            <div className="profileCard">

                                <div className="profileIcon">

                                    <FaUserCircle />

                                </div>

                                <h2>My Profile</h2>

                                <p>Your account information</p>

                                <div className="profileInfo">

                                    <div className="infoBox">

                                        <FaUserCircle />

                                        <div>

                                            <span>Name</span>

                                            <h5>{localStorage.getItem("name")}</h5>

                                        </div>

                                    </div>

                                    <div className="infoBox">

                                        <FaUserTag />

                                        <div>

                                            <span>Role</span>

                                            <h5>{localStorage.getItem("role")}</h5>

                                        </div>

                                    </div>

                                    <div className="infoBox">

                                        <FaIdBadge />

                                        <div>

                                            <span>User ID</span>

                                            <h5>{localStorage.getItem("id")}</h5>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Profile;