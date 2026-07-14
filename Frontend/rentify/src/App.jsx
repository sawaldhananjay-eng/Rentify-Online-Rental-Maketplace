import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import OwnerDash from "./pages/OwnerDash";
import CustomerDash from "./pages/CustomerDash";
import AdminDash from "./pages/AdminDash";

import AddItem from "./pages/AddItem";
import MyItems from "./pages/MyItems";
import ManageUsers from "./pages/ManageUsers";
import ManageBookings from "./pages/ManageBookings";
import ManageItems from "./pages/ManageItems";

import BrowseItems from "./pages/BrowseItems";
import Payment from "./pages/Payment";
import BookItem from "./pages/BookItem";
import MyBookings from "./pages/MyBookings";
import OwnerBookings from "./pages/OwnerBookings";

import Reviews from "./pages/Reviews";
import AddReview from "./pages/AddReview";


import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Public */}

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Owner */}

                <Route
                    path="/owner"
                    element={
                        <PrivateRoute role="OWNER">
                            <OwnerDash />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/add-item"
                    element={
                        <PrivateRoute role="OWNER">
                            <AddItem />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/my-items"
                    element={
                        <PrivateRoute role="OWNER">
                            <MyItems />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/owner-bookings"
                    element={
                        <PrivateRoute role="OWNER">
                            <OwnerBookings />
                        </PrivateRoute>
                    }
                />

                {/* Customer */}

                <Route
                    path="/customer"
                    element={
                        <PrivateRoute role="CUSTOMER">
                            <CustomerDash />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/browse-items"
                    element={
                        <PrivateRoute role="CUSTOMER">
                            <BrowseItems />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/payment"
                    element={
                        <PrivateRoute role="CUSTOMER">
                            <Payment />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/book-item/:id"
                    element={
                        <PrivateRoute role="CUSTOMER">
                            <BookItem />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/my-bookings"
                    element={
                        <PrivateRoute role="CUSTOMER">
                            <MyBookings />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/reviews"
                    element={
                        <PrivateRoute>
                            <Reviews />
                        </PrivateRoute>
                    }
                />


                <Route
                    path="/AddReview/:id"
                    element={
                        <PrivateRoute role="CUSTOMER">
                            <AddReview />
                        </PrivateRoute>
                    }
                />


                {/* ADMIN */}

                <Route
                    path="/admin"
                    element={
                        <PrivateRoute role="ADMIN">
                            <AdminDash />
                        </PrivateRoute>
                    }
                />

                                <Route
                    path="/manage-users"
                    element={
                        <PrivateRoute role="ADMIN">
                            <ManageUsers />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/manage-bookings"
                    element={
                        <PrivateRoute role="ADMIN">
                            <ManageBookings />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/manage-items"
                    element={
                        <PrivateRoute role="ADMIN">
                            <ManageItems />
                        </PrivateRoute>
                    }
                />


                {/* Common */}

                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />

                {/* 404 */}

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;