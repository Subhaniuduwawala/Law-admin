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
                <section className="about-content-wrapper">
                    <div className="about-content">
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

                            <h2>Our Vision</h2>
                            <p>
                                To be the leading legal firm recognized for integrity, professionalism, and excellence in legal solutions worldwide.
                            </p>

                            <h2>Core Values</h2>
                            <ul className="core-values">
                                <li>Integrity and Honesty in every interaction</li>
                                <li>Commitment to Excellence in service delivery</li>
                                <li>Empathy and Compassion towards clients</li>
                                <li>Transparency and Accountability in our practices</li>
                                <li>Innovation and Adaptability in legal solutions</li>
                            </ul>

                            <h2>Why Choose Us?</h2>
                            <ul className="why-choose-us">
                                <li> Experienced and professional team of dedicated legal experts</li>
                                <li> Comprehensive legal solutions tailored to meet your unique needs</li>
                                <li> Dedicated support and guidance throughout every stage of your case</li>
                                <li> Proven track record of successful outcomes and client satisfaction</li>
                                <li> Transparent communication to keep you informed at all times</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section">
                    <div className="container">
                        <h2>Meet Our Special Team</h2>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={img10} alt="Team Member" />
                                <h3>Mrs. Dilini</h3>
                                <p>Founder & Senior Attorney</p>
                            </div>
                            <div className="team-member">
                                <img src={img11} alt="Team Member" />
                                <h3>Mr. Samarawikrama</h3>
                                <p>Family Law Specialist</p>
                            </div>
                            <div className="team-member">
                                <img src={img12} alt="Team Member" />
                                <h3>Mr. Krishanth</h3>
                                <p>Corporate Law Specialist</p>
                            </div>
                            <div className="team-member">
                                <img src={img13} alt="Team Member" />
                                <h3>Mrs. Samanthi</h3>
                                <p>Criminal Defense Law Specialist</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials-section">
    <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
            <div className="testimonial">
                <p>"LawAdmin helped me navigate a difficult case with professionalism and care. Their attention to detail and dedication made a challenging situation much easier to handle."</p>
                <h4>- Sumith perera</h4>
            </div>
            <div className="testimonial">
                <p>"Their team is knowledgeable and supportive. I felt confident throughout my case, knowing they were always available to answer my questions and provide sound legal advice."</p>
                <h4>- Sarah Thennakoon</h4>
            </div>
            <div className="testimonial">
                <p>"I was impressed by the level of personalized service I received. LawAdmin genuinely cared about my case and worked tirelessly to achieve the best possible outcome."</p>
                <h4>- Michael Johnson</h4>
            </div>
            <div className="testimonial">
                <p>"The team at LawAdmin is incredibly professional and attentive. They kept me informed every step of the way, ensuring I understood my options and legal rights."</p>
                <h4>- Imaya Watson</h4>
            </div>
            <div className="testimonial">
                <p>"I cannot thank LawAdmin enough for their dedication and hard work. They provided me with peace of mind and a positive resolution to a complicated legal issue."</p>
                <h4>- Jayani sashinika </h4>
            </div>
            <div className="testimonial">
                <p>"From the initial consultation to the final resolution, the team displayed exceptional professionalism. Their strategic approach and attention to detail were remarkable."</p>
                <h4>-Madhuka weerasinghe</h4>
            </div>
            <div className="testimonial">
                <p>"I highly recommend LawAdmin for their expertise and commitment. They treated me with respect and compassion, guiding me through a challenging legal situation with care."</p>
                <h4>- Kevin perera</h4>
            </div>
            <div className="testimonial">
                <p>"LawAdmin's legal team provided outstanding support and guidance. They explained complex legal terms in simple language, ensuring I felt comfortable and well-prepared throughout."</p>
                <h4>- Chamodi thimeshika</h4>
            </div>
        </div>
    </div>
</section>
  
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-column">
                            <h3>Our Office</h3>
                            <p>317 Darley Rd, Colombo 01000, Sri Lanka</p>
                        </div>
                        <div className="footer-column">
                            <h3>Email Us</h3>
                            <p>info@lawadmin.com</p>
                        </div>
                        <div className="footer-column">
                            <h3>Call Us</h3>
                            <p>+012 345 6789</p>
                        </div>
                    </div>
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

export default AboutUs;
