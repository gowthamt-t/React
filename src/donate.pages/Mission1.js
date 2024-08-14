import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import a1 from './image/dinesh.jpg'


const Mission1 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/');
    };

    return (
        <div className="mission-container">
            <section className="image-card">
                <img src={a1} alt="Mission" />
            </section>
            <section className="mission-intro">
                <h1>Mission: Feed the Hunger</h1>
                <p>In India, millions of people struggle with hunger every day. Our mission is to ensure that no one goes to bed hungry. Through our food distribution programs, we provide nutritious meals to underprivileged communities, street children, and the homeless. Join us in our fight against hunger and help us make a difference, one meal at a time.</p>
            </section>
            <section className="impact-stats">
                <h2>Our Impact</h2>
                <div className="stats">
                    <div className="stat">
                        <h3>1 Million</h3>
                        <p>Meals Provided</p>
                    </div>
                    <div className="stat">
                        <h3>500K</h3>
                        <p>Children Fed</p>
                    </div>
                    <div className="stat">
                        <h3>300K</h3>
                        <p>Families Supported</p>
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
