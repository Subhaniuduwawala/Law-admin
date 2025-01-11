import React from 'react';
import './Attorneys.css';
import Navbar from './components/Navbar';
import img10 from './assets/img10.jpg';
import img13 from './assets/img13.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img9 from './assets/img9.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import img16 from './assets/img16.jpg';
import img17 from './assets/img17.jpg';
import img18 from './assets/img18.jpg';
import img19 from './assets/img19.jpg';
import img20 from './assets/img20.jpg';
import img21 from './assets/img21.jpg';
import img22 from './assets/img22.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';
import img25 from './assets/img25.jpg';import img26 from './assets/img26.jpg';import img27 from './assets/img27.jpg';

function Attorneys() {
    const categories = [
        {
            category: "Criminal Law",
            description: "These lawyers specialize in defending individuals accused of crimes or representing clients in criminal cases.",
            roles: [
                {
                    title: "Criminal Defense Law Specialist",
                    name: "Mrs. Samanthi",
                    photo: img13 ,
                    details: "Defends clients accused of criminal activities like theft, assault, or fraud. Prepares legal defenses and represents clients in court."
                },
                {
                    title: "Domestic Violence Lawyer",
                    name: "Mr.Nimesh",
                    photo: img14,
                    details: "Represents clients in cases involving domestic abuse or restraining orders. Provides legal protection and advocacy for victims."
                },
                {
                    title: "Juvenile Defense Lawyer",
                    name: "Mr.Herath" ,
                    photo: img15,
                    details: "Focuses on representing minors accused of crimes. Navigates the juvenile justice system to ensure fair treatment."
                }
            ]
        },
        {
            category: "Family Law",
            description: "These lawyers handle legal matters related to families, relationships, and domestic issues.",
            roles: [
                {
                    title: "Family Law Specialist",
                    name: "Mr.Samarawikrama",
                    photo: img11,
                    details: "Assists clients with legal separation, divorce proceedings, and alimony. Handles asset division and mediation between parties."
                },
                {
                    title: "Child Custody Lawyer",
                    name: "Mrs.wijethunga",
                    photo: img16 ,
                    details: "Advocates for parental rights and helps clients secure custody of their children. Drafts parenting agreements and represents clients in custody hearings."
                },
                {
                    title: "Divorce Lawyer",
                    name: "Mrs.Seananayaka",
                    photo: img17,
                    details: "Assists families with legal procedures for adopting a child. Handles paperwork, legal filings, and compliance with adoption laws."
                },
                {
                    title: "Prenuptial Agreement Lawyer",
                    name: "Miss.Fernando",
                    photo: img18,
                    details: "Drafts and reviews prenuptial or postnuptial agreements. Ensures fair distribution of assets in case of divorce."
                }
            ]
        },
        {
            category: "Corporate Law",
            description: "These lawyers work with businesses and corporations on legal compliance, contracts, and disputes.",
            roles: [
                {
                    title: "Corporate Law Specialist",
                    name: "Mr.krishanth",
                    photo: img12 ,
                    details: "Drafts and reviews business agreements like vendor contracts, NDAs, and employee contracts. Ensures compliance with contract law."
                },
                {
                    title: "Business Contracts Lawyer",
                    name: "Mr.David",
                    photo: img19,
                    details: "Advises businesses on corporate governance policies. Handles boardroom disputes and compliance with corporate laws."
                },
                {
                    title: "Mergers and Acquisitions Lawyer",
                    name: "Mrs.weerakkodi",
                    photo: img20,
                    details: "Facilitates mergers, acquisitions, and business transactions. Conducts due diligence and drafts agreements."
                },
                {
                    title: "Intellectual Property Lawyer",
                    name: "Mr.Thennakoon",
                    photo: img21,
                    details: "Protects copyrights, patents, and trademarks for businesses. Handles cases involving infringement or licensing disputes."
                },
                {
                    title: "Employment Lawyer",
                    name: "Mr.Subash",
                    photo: img22 ,
                    details: "Advises businesses on workplace disputes, labor laws, and employment contracts. Handles cases of wrongful termination, harassment, or discrimination."
                }
            ]
        },
        {
            category: "Other Services",
            description: "These lawyers provide services outside the above categories and handle specialized legal needs.",
            roles: [
                {
                    title: "Founder & Senior Attorney",
                    name: "Mrs.Dilini",
                    photo: img10 , 
                    details: "Founder of LawAdmin, with 25+ years of experience across Criminal, Family, and Corporate Law. Alexander specializes in complex litigation and firm strategy."
                },
                {
                    title: "Immigration Lawyer",
                    name: "Mrs.Subhodani",
                    photo: img23,
                    details: "Helps clients with visa applications, green cards, and citizenship. Represents clients in immigration hearings or disputes."
                },
                {
                    title: "Personal Injury Lawyer",
                    name: "Mr.Sumith",
                    photo: img24,
                    details: "Represents clients injured due to accidents or negligence. Negotiates settlements for compensation."
                },
                {
                    title: "Tax Lawyer",
                    name: "Mrs.Niroshika",
                    photo: img25,
                    details: "Advises individuals or businesses on tax compliance and audits. Helps with tax planning and resolving disputes with tax authorities."
                },
                {
                    title: "Environmental Lawyer",
                    name: "Mr.Dinesh",
                    photo: img26,
                    details: "Handles cases related to environmental regulations and pollution disputes. Represents clients in issues like land use or natural resource management."
                },
                {
                    title: "Estate Planning Lawyer",
                    name: "Mr.Ranathunga",
                    photo: img27,
                    details: "Helps clients draft wills, trusts, and manage estates. Advises on inheritance and succession planning."
                }
            ]
        }
    ];

    return (
        <div className="attorneys-page">
            <Navbar />
            <main>
                <header className="attorneys-header" style={{ backgroundImage: `url(${img9})` }}>
                    <h1>Our Attorneys</h1>
                    <p>Explore the expertise of our highly qualified team of attorneys.</p>
                </header>

                <section className="attorneys-categories">
                    {categories.map((category, index) => (
                        <div key={index} className="category">
                            <h2>{category.category}</h2>
                            <p className="category-description">{category.description}</p>
                            <div className="roles">
                                {category.roles.map((role, idx) => (
                                    <div key={idx} className="role-card">
                                        <img src={role.photo} alt={role.name} className="attorney-photo" />
                                        <h3>{role.title}</h3>
                                        <p><strong>{role.name}</strong></p>
                                        <p>{role.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 LawAdmin. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Attorneys;
