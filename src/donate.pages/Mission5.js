import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mission.css';
import a1 from './image/neha.jpg'; // Update the path to your image

const Mission1 = () => {
    const navigate = useNavigate();

    const handleJoinUsClick = () => {
        navigate('/');
    };

    return (
        <div className="mission-container">
            <section className="image-card">
                <img src={a1} alt="Child Abuse" />
            </section>
            <section className="mission-intro">
                <h1>Mission: Combat Child Abuse</h1>
                <p>Child abuse remains a critical issue, impacting the lives of countless children worldwide. Our mission is to combat child abuse by providing support, intervention, and prevention programs. We aim to create a safe environment for children by offering counseling, educational resources, and legal assistance. Join us in our efforts to protect vulnerable children and ensure they have the opportunity to grow up in a safe and nurturing environment.</p>
            </section>
            <section className="impact-stats">
                <h2>Our Impact</h2>
                <div className="stats">
                    <div className="stat">
                        <h3>10,000+</h3>
                        <p>Children Provided with Support</p>
                    </div>
                    <div className="stat">
                        <h3>500+</h3>
                        <p>Cases of Abuse Intervened</p>
                    </div>
                    <div className="stat">
                        <h3>200+</h3>
                        <p>Educational Workshops Conducted</p>
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
