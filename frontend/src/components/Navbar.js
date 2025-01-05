import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo1 from '../assets/logo1.jpg'; // Ensure the path is correct

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);  // For Mobile Menu
    const [dropdownOpen, setDropdownOpen] = useState(false); // For Dropdown Menu
    const dropdownRef = useRef(null);

    // Toggle for the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Toggle for the dropdown menu
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false); // Close dropdown if clicked outside
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            {/* Logo Section */}
            <div className="logo">
                <img src={logo1} alt="LawAdmin Logo" />
                LawAdmin
            </div>

            {/* Hamburger Menu Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                
                {/* Dropdown with Clickable Functionality */}
                <div className="dropdown" ref={dropdownRef}>
                    <a href="#" onClick={toggleDropdown}>Services</a>
                    <ul className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                        <li><a href="#">Criminal Law</a></li>
                        <li><a href="#">Family Law</a></li>
                        <li><a href="#">Corporate Law</a></li>
                    </ul>
                </div>

                <a href="#">Attorneys</a>
                <a href="#">Contact Us</a>
            </nav>
        </header>
        
    );
}

export default Navbar;
