import React from 'react';
import './Services.css';
import Navbar from './components/Navbar';
import img33 from './assets/img33.jpg';

function Services() { 
    const serviceCategories = [
        {
            title: "Criminal Law",
            description: "Our criminal law services specialize in defending individuals accused of crimes and representing clients in criminal cases.",
            services: [
                {
                    name: "Criminal Defense",
                    details: "Defends clients accused of theft, assault, fraud, and other criminal activities.",
                },
                {
                    name: "Domestic Violence Cases",
                    details: "Provides advocacy and protection for clients in domestic violence situations.",
                },
                {
                    name: "Juvenile Defense",
                    details: "Represents minors accused of crimes, ensuring fair treatment within the juvenile justice system.",
                },
            ],
        },
        {
            title: "Family Law",
            description: "We provide compassionate legal support for families navigating challenging times and important decisions.",
            services: [
                {
                    name: "Divorce Proceedings",
                    details: "Handles legal separations, alimony, and asset division during divorce.",
                },
                {
                    name: "Child Custody",
                    details: "Assists parents in securing custody and drafting parenting agreements.",
                },
                {
                    name: "Adoption Services",
                    details: "Guides families through the legal adoption process with compliance support.",
                },
                {
                    name: "Prenuptial Agreements",
                    details: "Drafts and reviews prenuptial and postnuptial agreements to ensure asset security.",
                },
            ],
        },
        {
            title: "Corporate Law",
            description: "Our corporate law services help businesses navigate legal challenges, compliance, and transactions.",
            services: [
                {
                    name: "Business Contracts",
                    details: "Drafts and reviews contracts, NDAs, and agreements to ensure legal protection.",
                },
                {
                    name: "Corporate Governance",
                    details: "Advises businesses on compliance policies and resolves boardroom disputes.",
                },
                {
                    name: "Mergers and Acquisitions",
                    details: "Facilitates business transactions, conducts due diligence, and drafts agreements.",
                },
                {
                    name: "Employment Law",
                    details: "Guides businesses on labor laws, employment contracts, and workplace dispute resolution.",
                },
            ],
        },
    ];

    return (
        <div className="services-page">
            <Navbar />
            <header className="services-header" style={{ backgroundImage: `url(${img33})` }}>
                <h1>Our Services</h1>
                <p>We offer a wide range of legal services tailored to your needs. Explore our expertise below.</p>
            </header>

            <main className="services-container">
                {serviceCategories.map((category, index) => (
                    <section key={index} className="service-category">
                        <h2>{category.title}</h2>
                        <p className="category-description">{category.description}</p>
                        <div className="service-list">
                            {category.services.map((service, idx) => (
                                <div key={idx} className="service-item">
                                    <h3>{service.name}</h3>
                                    <p>{service.details}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 LawAdmin. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Services;
