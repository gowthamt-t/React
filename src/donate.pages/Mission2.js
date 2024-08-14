import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import a1 from './image/roshan.jpg'; // Update the path to your image

const Mission1 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/');
    };

    return (
        <div className="mission-container">
            <section className="image-card">
                <img src={a1} alt="Education Support" />
            </section>
            <section className="mission-intro">
                <h1>Mission: Support Education</h1>
                <p>Education is the cornerstone of a brighter future. In many underprivileged communities, children lack access to quality education. Our mission is to bridge this gap by providing resources, scholarships, and support to ensure every child has the opportunity to learn and grow. Join us in our effort to empower the next generation through education and make a lasting impact on their lives.</p>
            </section>
            <section className="impact-stats">
                <h2>Our Impact</h2>
                <div className="stats">
                    <div className="stat">
                        <h3>10,000+</h3>
                        <p>Students Supported</p>
                    </div>
                    <div className="stat">
                        <h3>200+</h3>
                        <p>Schools Funded</p>
                    </div>
                    <div className="stat">
                        <h3>50,000+</h3>
                        <p>Books Distributed</p>
                    </div>
                </div>
            </section>
            <section className="call-to-action">

                 <a href="/Payment" className="join-us-button">Join Us</a>
            </section>
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2024 Hopeful Hands. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Mission1;
