import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import a1 from './image/buvi.jpg'

const Mission1 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/');
    };

    return (
        <div className="mission-container">
            <section className="image-card">
                <img src={a1} alt="Preventing Child Labor" />
            </section>
            <section className="mission-intro">
                <h1>Mission: Preventing Child Labor</h1>
                <p>Child labor remains a significant challenge, with countless children forced into work instead of receiving an education. Our mission is to combat child labor by providing support and resources to rescue and rehabilitate affected children. We focus on providing education, vocational training, and family support to ensure that children can grow up free from exploitation. Join us in our efforts to eradicate child labor and offer every child a chance to build a better future.</p>
            </section>
            <section className="impact-stats">
                <h2>Our Impact</h2>
                <div className="stats">
                    <div className="stat">
                        <h3>8,000+</h3>
                        <p>Children Rescued and Rehabilitated</p>
                    </div>
                    <div className="stat">
                        <h3>300+</h3>
                        <p>Education Programs Implemented</p>
                    </div>
                    <div className="stat">
                        <h3>150+</h3>
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
