import React from 'react';
import './AgaramFoundation.css';
import cardImage from './images/agaram.jpeg'; // Import the image for the card

const AgaramFoundation = () => {
  return (
    <div className="agaram-foundation-page">
      <div className="joker-section">
        <h1>Agaram Foundation</h1>
        <p>Empowering the underprivileged through education and sustainable development.</p>
      </div>
      
      <div className="half-card-section">
        <div className="half-card">
          <div className="half-card-image">
            <img src={cardImage} alt="Half Card Image" />
          </div>
          <div className="half-card-content">
            <h3>Empowerment through Education</h3>
            <p>We believe in creating opportunities for underprivileged communities by providing access to quality education and sustainable resources.</p>
          </div>
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to bridge the socio-economic gap by providing quality education and life-changing opportunities to underprivileged children. We believe in the power of education to transform lives and build a better future for all.</p>
      </div>
      
      <div className="impact-stories-section">
        <h2>Impact Stories</h2>
        <div className="story-card">
          <h3>Transforming Lives through Education</h3>
          <p>Meet Rani, a young girl who, through Agaram Foundation's scholarship program, has been able to pursue her dream of becoming a doctor...</p>
        </div>
        <div className="story-card">
          <h3>Sustainable Development Initiatives</h3>
          <p>Our foundation has been actively involved in promoting sustainable agricultural practices in rural areas, helping communities to thrive...</p>
        </div>
      </div>
      
      <div className="donate-section">
        <h2>Support Our Cause</h2>
        <p>Your donations help us continue our work and reach more children in need. Join us in making a difference.</p>
        {/* <button className="donate-button">Donate Now</button> */}
        <a href="/Payment" className="donate-button">Donate Now</a>
      </div>
    </div>
  );
};

export default AgaramFoundation;
