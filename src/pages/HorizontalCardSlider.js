import React, { useState } from 'react';
import './HorizontalCardSlider.css'; // Import the CSS file for styling

// Sample images
import img1 from './images/agh.jpg';
import img2 from './images/hey2.png';
import img3 from './images/hey.png';

const HorizontalCardSlider = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        setScrollPosition(prev => Math.min(prev + window.innerWidth, 0));
    };

    const scrollRight = () => {
        setScrollPosition(prev => Math.max(prev - window.innerWidth, -window.innerWidth * 2)); // Adjust the limit based on the number of cards
    };

    return (
        <div className="slider-container">
            <button className="slider-button left" onClick={scrollLeft}>❮</button>
            <div className="slider-wrapper">
                <div className="slider-content" style={{ transform: `translateX(${scrollPosition}px)` }}>
                    <div className="card">
                        <img src={img1} alt="Home Top" className="card-image" />
                        
                    </div>
                    <div className="card">
                        <img src={img2} alt="Feed the Hungry" className="card-image" />
                        
                    </div>
                    <div className="card">
                        <img src={img3} alt="Support Education" className="card-image" />
                        
                    </div>
                </div>
            </div>
            <button className="slider-button right" onClick={scrollRight}>❯</button>
        </div>
    );
};

export default HorizontalCardSlider;
