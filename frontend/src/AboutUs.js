import React from 'react';
import './AboutUs.css';
import Navbar from './components/Navbar';
import img8 from './assets/img8.jpg';
import img10 from './assets/img10.jpg'; 
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';

function AboutUs() {
    return (
        <div className="about-us">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="about-hero" style={{ backgroundImage: `url(${img8})` }}>
                    <div className="overlay"></div>
                    <div className="hero-content">
                        <h1>About Us</h1>
                        <p>Learn more about who we are and what we stand for.</p>
                    </div>
                </section>

                {/* About Us Content */}
                <section className="about-content">
                    <div className="container">
                        <h2>Who We Are</h2>
                        <p>
                            At LawAdmin, we are a dedicated team of legal professionals committed to providing exceptional legal services. 
                            With years of expertise in various fields of law, we ensure our clients receive the justice they deserve.
                        </p>

                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to uphold justice and provide accessible legal solutions to everyone. 
                            We aim to simplify the legal process for our clients and guide them every step of the way.
                        </p>

                        <h2>Why Choose Us?</h2>
                        <ul>
                            <li>Experienced and professional team of attorneys</li>
                            <li>Comprehensive legal solutions tailored to your needs</li>
                            <li>Dedicated support and guidance throughout your case</li>
                        </ul>
                    </div>
                </section>
                <section className="team-section">
                    <div className="container">
                        <h2>Meet Our Special Team</h2>
                        <div className="team-grid">
                            <div className="team-member">
                            <img src={img10} alt="Team Member" />
                                <h3>Mrs.Dilini</h3>
                                <p>Founder & Senior Attorney</p>
                            </div>
                            <div className="team-member">
                                <img src={img11} alt="Team Member" />
                                <h3>Mr.Samarawikrama</h3>
                                <p>Family Law Specialist</p>
                            </div>
                            <div className="team-member">
                            <img src={img12} alt="Team Member" />
                                <h3>Mr.krishanth</h3>
                                <p>Corporate Law Specialist</p>
                            </div>
                            <div className="team-member">
                                <img src={img13} alt="Team Member" />
                                <h3>Mrs.Samanthi</h3>
                                <p>Criminal Defense Law Specialist</p>
                            </div>
                        </div>
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

export default AboutUs;