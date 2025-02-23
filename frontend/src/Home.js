import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './components/Navbar';


   // Function to get the minimum date (today's date)
const getMinDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

// Function to check if the selected date is a Saturday or Sunday
const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const day = selectedDate.getDay();

    // If it's Saturday (6) or Sunday (0), show an alert and clear the date field
    if (day === 6 || day === 0) {
        alert('Appointments are not available on Saturdays and Sundays. Please select a weekday.');
        event.target.value = '';
    }
};


function Home() {
    const [formData, setFormData] = useState({
        id: null, 
        name: '',
        email: '',
        date: '',
        time: '',
        service: '',
        lawyer: '',
    });

    const [error, setError] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    
    const lawyersByService = {
        "Criminal Law": ["Mrs. Samanthi", "Mr. Nimesh", "Mr. Herath"],
        "Family Law": ["Mr. Samarawikrama", "Mrs. Wijethunga", "Mrs. Seenanayaka", "Miss. Fernando"],
        "Corporate Law": ["Mr. Krishanth", "Mr. David", "Mrs. Weerakkodi", "Mr. Thennakoon", "Mr. Subash"],
        "Other services": ["Mrs. Dilini", "Mrs. Subhodani", "Mr. Sumith", "Mrs. Niroshika", "Mr. Dinesh", "Mr. Ranathunga"],
    };

    
    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:8081/appointments');
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    // Handle Input Changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Reset lawyer selection if service changes
        if (e.target.name === "service") {
            setFormData({ ...formData, service: e.target.value, lawyer: '' });
        }
    };

    // Handle Form Submit for Create and Update
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, name, email, date, time, service, lawyer } = formData;

        if (!name || !email || !date || !time || service === 'Select a Service' || lawyer === '') {
            setError('Please fill in all fields correctly.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8081/appointments${isEdit ? `/${id}` : ''}`, {
                method: isEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    date,
                    time,
                    lawType: service,
                    lawyer,
                }),
            });

            if (response.ok) {
                alert(isEdit ? 'Appointment Updated Successfully!' : 'Appointment Scheduled Successfully!');
                setError('');
                setFormData({
                    id: null,
                    name: '',
                    email: '',
                    date: '',
                    time: '',
                    service: '',
                    lawyer: '',
                });
                setIsEdit(false);
                fetchAppointments();
            } else {
                const errorData = await response.json();
                setError(`Failed to ${isEdit ? 'update' : 'schedule'} appointment: ${errorData.message}`);
            }
        } catch (error) {
            setError(`An error occurred: ${error.message}`);
        }
    };

    // Handle Delete Operation
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this appointment?');
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:8081/appointments/${id}`, { method: 'DELETE' });
                if (response.ok) {
                    alert('Appointment Deleted Successfully!');
                    fetchAppointments();
                } else {
                    alert('Failed to delete appointment.');
                }
            } catch (error) {
                console.error('Error deleting appointment:', error);
            }
        }
    };

    // Handle Edit Operation
    const handleEdit = (appointment) => {
        setFormData({
            id: appointment.id,
            name: appointment.name,
            email: appointment.email,
            date: appointment.date,
            time: appointment.time,
            service: appointment.lawType,
            lawyer: appointment.lawyer,
        });
        setIsEdit(true);
    };

    const heroSlides = [
        {
            image: '/asset/img44.jpg',
            heading: 'We Are Prepared To Defend You',
            subtext: 'RESULTS YOU DESERVE',
        },
        {
            image: '/asset/img45.jpg',
            heading: 'Your Justice Is Our Priority',
            subtext: 'EXPERIENCED AND TRUSTED LAWYERS',
        },
        {
            image: '/asset/img46.jpg',
            heading: 'Legal Solutions Tailored to You',
            subtext: 'STRATEGIC AND EFFECTIVE REPRESENTATION',
        }
    ];
    
    
        const [currentSlide, setCurrentSlide] = useState(0);
    
        // Auto slide every 5 seconds
        useEffect(() => {
            const slideInterval = setInterval(() => {
                nextSlide();
            }, 5000); // Change slide every 5 seconds
            return () => clearInterval(slideInterval);
        }, [currentSlide]);
    
        // Next Slide Function
        const nextSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
        };
    
        // Previous Slide Function
        const prevSlide = () => {
            setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? heroSlides.length - 1 : prevSlide - 1
            );
        };
    
        return (
            <div className="home">
                <Navbar />
                <main>
                    {/* Hero Section */}
                    <section className="hero">
                        <div
                            className="hero-slide"
                            style={{
                                backgroundImage: `url(${heroSlides[currentSlide].image})`
                            }}
                        >
                            <div className="overlay"></div>
                            <div className="hero-content">
                                <h2>{heroSlides[currentSlide].heading}</h2>
                                <p>{heroSlides[currentSlide].subtext}</p>
                                <button className="call-button">Call Us Now</button>
                            </div>
                            
                            {/* Navigation Arrows */}
                            <button className="prev-arrow" onClick={prevSlide}>
                                &#10094;
                            </button>
                            <button className="next-arrow" onClick={nextSlide}>
                                &#10095;
                            </button>
                        </div>
                    </section>
                
<section className="lawadmin-system">
  <h2>How Our LawAdmin System Works</h2>
  <div className="lawadmin-steps">
    <div className="lawadmin-step">
      <img src="/asset/img35.jpg" alt="Select Service" />
      <h3>Step 1: Select Service</h3>
      <p>Choose from our range of legal services tailored to your needs.</p>
    </div>
    <div className="lawadmin-step">
      <img src="/asset/img29.jpg" alt="Select Lawyer" />
      <h3>Step 2: Choose Your Lawyer</h3>
      <p>Pick the best lawyer for your case from our team of experts.</p>
    </div>
    <div className="lawadmin-step">
      <img src="/asset/img37.jpg" alt="Schedule Appointment" />
      <h3>Step 3: Schedule Appointment</h3>
      <p>Book a convenient date and time for your legal consultation.</p>
    </div>
    <div className="lawadmin-step">
      <img src="/asset/img36.jpg" alt="Confirmation" />
      <h3>Step 4: Confirmation & Reminder</h3>
      <p>Receive a confirmation email and reminders for your appointment.</p>
    </div>
  </div>
</section>



    <section className="about-lawadmin">
  <div className="about-container">
    <div className="about-image"  >
      <div className="experience-badge">25 Years Experience</div>
    </div>
    <div className="about-content">
      <h4>LEARN ABOUT US</h4>
      <h2>We Provide Reliable And Effective Legal Services</h2>
      <p>
      At our firm, we are committed to delivering exceptional legal services with integrity and professionalism.
      Our team of experienced lawyers is dedicated to protecting your rights and achieving the best possible outcomes for your case. 
      Whether you need representation in criminal law, family disputes, corporate matters, or any other legal challenge, 
      we provide personalized solutions tailored to your needs. Trust us to stand by you every step of the way, 
      ensuring your voice is heard and your interests are safeguarded.
      </p>
      <button className="learn-more-button">Learn More</button>
    </div>
  </div>
    </section>
                {/* Appointment Form Section */}
<section className="appointment-section">
    <div className="appointment-form">
        <h2>{isEdit ? 'Edit Appointment' : 'Get An Appointment'}</h2>
        <p className="appointment-info">
            ⚠️ Please Note: We operate only on weekdays (Monday to Friday). 
            Appointments are available between 9:00 AM and 6:00 PM only. 
            Kindly avoid booking on Saturdays and Sundays.
        </p>
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
                    onBlur={handleDateChange}  // Trigger weekend check on date change
                    required
                    min={getMinDate()}  // Minimum date is today
                />
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    min="09:00"
                    max="18:00"
                />
            </div>
            <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
            >
                <option value="">Select a Service</option>
                <option>Criminal Law</option>
                <option>Family Law</option>
                <option>Corporate Law</option>
                <option>Other services</option>
            </select>
            {/* Show Lawyer dropdown based on selected service */}
            {formData.service && (
                <select
                    name="lawyer"
                    value={formData.lawyer}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select a Lawyer</option>
                    {lawyersByService[formData.service]?.map((lawyer, index) => (
                        <option key={index} value={lawyer}>
                            {lawyer}
                        </option>
                    ))}
                </select>
            )}
            <button type="submit" className="submit-button">
                {isEdit ? 'Update Appointment' : 'Get An Appointment'}
            </button>
        </form>
    </div>
</section>


                {/* Appointments Data Grid Section */}
                <section className="appointments-grid">
                    <h2>Your Appointments</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Service</th>
                                <th>Lawyer</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.email}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.lawType}</td>
                                    <td>{appointment.lawyer}</td>
                                    <td>
                                        <button onClick={() => handleEdit(appointment)}>Edit</button>
                                        <button onClick={() => handleDelete(appointment.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Footer Section */}
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

export default Home;
