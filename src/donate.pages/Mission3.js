import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import a1 from './image/darshi.jpg'; // Update the path to your image

const Mission1 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/');
    };

    return (
        <div className="mission-container">
            <section className="image-card">
                <img src={a1} alt="Protect the Elderly" />
            </section>
            <section className="mission-intro">
                <h1>Mission: Protect the Elderly</h1>
                <p>As our loved ones age, they often face unique challenges, including isolation, health issues, and financial insecurity. Our mission is to safeguard the well-being of the elderly by providing support, care, and community resources. We aim to enhance their quality of life through programs that offer companionship, medical assistance, and financial aid. Join us in our mission to protect and honor the elderly in our community.</p>
            </section>
            <section className="impact-stats">
                <h2>Our Impact</h2>
                <div className="stats">
                    <div className="stat">
                        <h3>5,000+</h3>
                        <p>Elderly Individuals Assisted</p>
                    </div>
                    <div className="stat">
                        <h3>1,200+</h3>
                        <p>Health Check-ups Provided</p>
                    </div>
                    <div className="stat">
                        <h3>800+</h3>
                        <p>Companion Visits Made</p>
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
