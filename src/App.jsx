import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AppointmentPage from "./pages/AppointmentPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import BangladeshMap from "./components/Map";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <div className="app">
          <Toast />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
          <BangladeshMap onDivisionClick={(name) => alert(`You clicked on ${name} division`)} />
          <Footer />
        </div>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
