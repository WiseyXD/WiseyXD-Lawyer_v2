import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Lawyers from "../pages/Lawyers/Lawyers";
import LawyerDetails from "../pages/Lawyers/LawyersDetails";
import MyAccount from "../Dashboard/user-account/MyAccount.jsx";
import Dashboard from "../Dashboard/lawyer-account/Dashboard";
import CheckoutSuccess from "../component/Lawyer/CheckoutSuccess";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lawyers" element={<Lawyers />} />
            <Route path="/lawyers/:id" element={<LawyerDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/users/profile/me" element={<MyAccount />} />
            <Route path="/lawyers/profile/me" element={<Dashboard />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />

            <Route
                path="/users/profile/me"
                element={
                    <ProtectedRoutes allowedRoles={["client"]}>
                        <MyAccount />
                    </ProtectedRoutes>
                }
            />
            <Route
                path="/lawyers/profile/me"
                element={
                    <ProtectedRoutes allowedRoles={["lawyer"]}>
                        <Dashboard />
                    </ProtectedRoutes>
                }
            />
        </Routes>
    );
};

export default Router;
