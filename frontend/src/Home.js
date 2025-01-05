import React, { useState } from 'react';
import './Home.css';
import Navbar from './components/Navbar';

function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        service: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, date, time, service } = formData;
        if (!name || !email || !date || !time || service === 'Select a Service') {
            setError('Please fill in all fields correctly.');
        } else {
            alert('Appointment Scheduled Successfully!');
            setError('');
        }
    };
     
    return (
        <div className="home">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="hero">
                    <div className="overlay"></div>
                    <div className="hero-content">
                        <h2>We Are Prepared To Defend You</h2>
                        <p>RESULTS YOU DESERVE</p>
                        <button className="call-button">Call Us Now</button>
                    </div>
                </section>

                {/* Appointment Form Section */}
                <section className="appointment-section">
                    <div className="appointment-form">
                        <h2>Get An Appointment</h2>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="date-time-picker">
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                required
                            >
                                <option>Select a Service</option>
                                <option>Criminal Law</option>
                                <option>Family Law</option>
                                <option>Corporate Law</option>
                            </select>
                            <button type="submit" className="submit-button">
                                Get An Appointment
                            </button>
                        </form>
                    </div>
                </section>

                {/* Footer Section with multiple columns */}
                <footer className="footer">
                    <div className="footer-container">
                        {/* Contact Info Section */}
                        <div className="footer-column">
                            <h3>Our Office</h3>
                            <p>Location, City, Country</p>
                        </div>
                        <div className="footer-column">
                            <h3>Email Us</h3>
                            <p>info@example.com</p>
                        </div>
                        <div className="footer-column">
                            <h3>Call Us</h3>
                            <p>+012 345 6789</p>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Popular Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Attorney</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>FAQs</li>
                                <li>Help</li>
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Site Map</li>
                            </ul>
                        </div>

                        
                        
                    </div>

                    <p className="footer-bottom-text">&copy; 2025 Justice. All Rights Reserved.</p>
                </footer>
            </main>
        </div>
    );
}

export default Home;
