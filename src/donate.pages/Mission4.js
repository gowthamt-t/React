import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import a1 from './image/mitun.jpg'

const Mission1 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/');
    };

    return (
        <div className="mission-container">
            <section className="image-card">
                <img src={a1} alt="Period Poverty" />
            </section>
            <section className="mission-intro">
                <h1>Mission: Combat Period Poverty</h1>
                <p>Period poverty is a pressing issue affecting millions of menstruators worldwide, preventing them from accessing essential menstrual products and maintaining proper hygiene. Our mission is to address this critical need by providing menstrual products, education, and support to those in need. By raising awareness and delivering essential supplies, we aim to ensure that everyone can manage their period with dignity and without barriers. Join us in our fight against period poverty and help us make a difference in the lives of those affected.</p>
            </section>
            <section className="impact-stats">
                <h2>Our Impact</h2>
                <div className="stats">
                    <div className="stat">
                        <h3>100,000+</h3>
                        <p>Menstrual Products Distributed</p>
                    </div>
                    <div className="stat">
                        <h3>20,000+</h3>
                        <p>Individuals Educated</p>
                    </div>
                    <div className="stat">
                        <h3>50+</h3>
                        <p>Communities Supported</p>
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
