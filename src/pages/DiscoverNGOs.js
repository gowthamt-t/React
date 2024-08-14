import React, { useState } from 'react';
import './DiscoverNGOs.css'; // Import the CSS file for styling

const DiscoverNGOs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const ngos = [
        'Agaram Foundation',
        'Brothers Foundation',
        'Maatram Foundation',
        'Feeding Coimbatore',
        'Animals Rescue'
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredNGOs = ngos.filter(ngo =>
        ngo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="discover-container">
            <h1>Access Information About Nonprofits</h1>
            <p>Learn more about various NGOs and their missions.</p>
            <div className="search-container">
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="text" 
                        placeholder="Search for NGOs..." 
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                   <a href="/agaram-foundation-page" className="cta-button">Sign up with Hopeful hand</a>
                </form>

                {/* Only show results if there are filtered NGOs */}
                {searchTerm && filteredNGOs.length > 0 && (
                    <div className="results-container">
                        <ul className="results-list">
                            {filteredNGOs.map((ngo, index) => (
                                <li key={index} className="results-item">
                                    {ngo}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Optionally, show a message when no results are found */}
                {searchTerm && filteredNGOs.length === 0 && (
                    <p>No results found for "{searchTerm}". Please try a different search term.</p>
                )}
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Fundraiser Support</h3>
                        <p><a href="#faqs">FAQs</a></p>
                        <p><a href="#reach-out">Reach out</a></p>
                    </div>
                    <div className="footer-section">
                        <h3>Start a Fundraiser for</h3>
                        <p><a href="#ngo">NGO</a></p>
                    </div>
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p><a href="#blog">Blog</a></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <h3>Disclaimer</h3>
                    <p>Use of children’s information including images, videos, testimonials, etc. in the Campaign is necessary for creating awareness about the charitable cause in order to bring traction to the said charitable cause and obtain donations which can then be used for charitable activities. Information is used and processed with valid consent. This statement is issued in compliance with the Consumer Protection Act, 2019, as amended from time to time.</p>
                </div>
            </footer>
        </div>
    );
}

export default DiscoverNGOs;
