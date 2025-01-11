import React from 'react';
import './ContactUs.css';
import Navbar from './components/Navbar';
import img31 from './assets/img31.jpg';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import youtube from './assets/youtube.png';

function ContactUs() {
    return (
        <div className="contact-us-page">
            <Navbar />
            <header className="contact-header" style={{ backgroundImage: `url(${img31})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1>Contact Us</h1>
                <p>We’d love to hear from you. Feel free to reach out to us anytime!</p>
            </header>

            <main className="contact-container">
                {/* Contact Information Section */}
                <section className="contact-info">
                    <h2>Get in Touch</h2>
                    <div className="info-item">
                        <h3>Our Office</h3>
                        <p>317 Darley Rd, Colombo 01000, Sri Lanka</p>
                    </div>
                    <div className="info-item">
                        <h3>Email Us</h3>
                        <p>info@lawadmin.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Call Us</h3>
                        <p>+012 345 6789</p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </section>

                {/* Google Map Section */}
                <section className="contact-map">
                    <h2>Our Location</h2>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.953217107872!2d79.8692015!3d6.9228029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1633022821234!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </section>

                {/* Social Media Icons Section */}
                <section className="social-media">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={google} alt="Google" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" />
                        </a>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 LawAdmin. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default ContactUs;