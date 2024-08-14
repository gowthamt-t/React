import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling
import r1 from './images/hopeful hands.png'

const Header = () => {
    return (
        <header className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">
                Hopeful Hands</Link>
                <nav className="navbar-nav">
                    <Link to="/donate" className="nav-item">Donate</Link>
                    <Link to="/discover-ngos" className="nav-item">Discover NGOs</Link>
                    <Link to="/payment" className="nav-item">PaymentPage</Link>
                    <Link to="/login" className="nav-item">Login</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
