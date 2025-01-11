import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../assets/logo1.jpg';

function Navbar() {
    const navigate = useNavigate();

    const handleLoginClick = (event) => {
        event.preventDefault();
        const confirmLogout = window.confirm("Do you want to logout?");
        if (confirmLogout) {
            navigate('/login');
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/" className="logo">
                    <img src={logo1} alt="LawAdmin Logo" />
                    LawAdmin
                </NavLink>
            </div>

            <div className="hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                    <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>

            <nav className="nav-links">
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Home
                </NavLink>
                <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    About Us
                </NavLink>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Services
                </NavLink>
                <NavLink to="/attorneys" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Attorneys
                </NavLink>
                <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Contact Us
                </NavLink>
                <button onClick={handleLoginClick} className="login-button">
                    Logout
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
