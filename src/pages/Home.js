import React, { useState } from 'react';
import './Home.css'; // Import the CSS file for styling
import HorizontalCardSlider from './HorizontalCardSlider'; // Import the slider component
import a1 from './images/feed1.jpeg'
import a2 from './images/feed2.jpeg'
import a3 from './images/feed3.jpg'
import b1 from './images/amazon.png'
import b2 from './images/flip.png'
import b3 from './images/x.png'
import b4 from './images/tata.jpeg'
import b5 from './images/ash.png'
import b6 from './images/puma.png'



const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="home-container">
            <HorizontalCardSlider /> {/* Add the slider here */}
            <div className="centered-intro">
                <h1>Give Monthly</h1>
                <p>Join us in making a difference by supporting various causes. Your generosity can change lives.</p>
            </div>
        
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hhhhh">Raise Funds For Your Cause!</h1>
                    <p>Onboard you can create impact by raising funds for your initiatives.</p>
                    <div className="cta-buttons">
                        <a href="/enroll" className="cta-button">Enroll Your Cause</a>
                    </div>
                </div>
            </header>

            <div className="trusted-platform">
                <h1>India’s most trusted online donation platform</h1>
            </div>

            <div className="abd">
                <div className="abc">
                    <h3>20M+</h3>
                    <p>Donations</p>
                </div>
                <div className="abc">
                    <h3>18M+</h3>
                    <p>Trusted NGOs</p>
                </div>
                <div className="abc">
                    <h3>20M+</h3>
                    <p>Lives Rescued</p>
                </div>
            </div>
            <section className="impact-section">
    <div className="impact-cards">
        <div className="impact-card">
            <img src={a1} alt="Feed the Hungry" className="impact-card-image" />
            <h3>Feed the Hungry</h3>
            <p>We provide meals to those in need, ensuring no one goes hungry.Without adequate food, one in three children under the of age five years are underweight and malnourished, making them more vulnerable to infections.</p>
        </div>
        <div className="impact-card">
            <img src={a2} alt="Support Education" className="impact-card-image" />
            <h3>Support Education</h3>
            <p>Your donations help children receive quality education and a brighter future.Educated girls are SIX times less likely to marry early and bear children before adulthood.</p>
        </div>
        <div className="impact-card">
            <img src={a3} alt="Protect the Elderly" className="impact-card-image" />
            <h3>Protect the Elderly</h3>
            <p>We offer support and care for abandoned and elderly individuals.Supporting the health, nutritional and emotional needs of abandoned</p>
        </div>
    </div>
</section>


            <div className="marquee">
                <div className="marquee-content">
                    * DINESH B just donated ₹500 | * ASHNA S just donated ₹1000 | * SAYED FARREED just donated ₹2000 | * SUDHA T just donated ₹1500 | * DARSHIKA PV just donated ₹2000 | * JAYASURYA JS just donated ₹2500
                </div>
            </div>

            <div className="corporate-partners-heading">
    <h2>Our Corporate Partners</h2>
</div>



            <section className="brands-section">
    <div className="brands-cards">
        <div className="brands-card">
            <img src={b1} alt="Brand 1" className="brands-card-image" />
            
        </div>
        <div className="brands-card">
            <img src={b2} alt="Brand 2" className="brands-card-image" />
            
        </div>
        <div className="brands-card">
            <img src={b3} alt="Brand 3" className="brands-card-image" />
            
        </div>
        <div className="brands-card">
            <img src={b4} alt="Brand 4" className="brands-card-image" />
            
        </div>
        <div className="brands-card">
            <img src={b5} alt="Brand 5" className="brands-card-image" />
           
        </div>
        <div className="brands-card">
            <img src={b6} alt="Brand 6" className="brands-card-image" />
            
        </div>
    </div>
</section>


            

            <section className="faq-section">
                <h2>FAQs</h2>
                <p>Everything you need to know about our initiatives. If you have any other questions, please reach out to us at: <a href="mailto:support@hopefulhands.org">support@hopefulhands.org</a></p>
                <div className="faq-questions">
                    <div className="faq-question" onClick={() => toggleAnswer(0)}>
                        <h3>Why Donate Monthly?</h3>
                        {activeIndex === 0 && (
                            <div className="faq-answer">
                                <p>Donating to an NGO every month through a monthly contribution has multiple benefits, both for you and the organisation you are supporting. By being a monthly donor, you provide a steady stream of support to NGOs to help them make a long term impact. For example, a monthly contribution to an education campaign gives a student the assurance that they have enough support to stay in school until the end of the school year. Or, people in remote areas will have the guarantee that they will have access to long term medical treatment. Making a monthly contribution also gives you, the donor, tax benefits through Section 80G of the Income Tax Act which assists your financial planning. Starting at ₹600 a month, you can make an impact in the lives of girls going to school, orphans and elderly people, and donate meals to malnourished children and elders, end period poverty and save the environment. Explore our monthly missions.

</p>
                            </div>
                        )}
                    </div>
                    
                    <div className="faq-question" onClick={() => toggleAnswer(1)}>
                        <h3>How Can I Donate Online?</h3>
                        {activeIndex === 1 && (
                            <div className="faq-answer">
                                <p>It has never been easier to support a charity than in today’s digital age. If you want to make a positive impact, all you need to do is browse fundraisers on give.do and donate online to an NGO of your choice. Give.do is India’s most trusted online donation platform that has more than 3,000 vetted NGOs. From issues such as poverty alleviation to child welfare, you will find thousands of fundraisers that are working in the areas you are passionate about. To donate online, simply search for the NGO or the cause you want to support, make a safe and secure online donation and receive an official email acknowledgement confirming your donation. After you donate online, you can constantly check an NGO’s page on give.do for updates on the cause you have chosen to support. To donate online, search for causes on give.do and start your journey to make a positive impact! <a href="/donate">donation page</a>. Choose your preferred donation method and follow the instructions to make a secure donation.</p>
                            </div>
                        )}
                    </div>
                    
                    <div className="faq-question" onClick={() => toggleAnswer(2)}>
                        <h3>Is There a Minimum Donation Amount?</h3>
                        {activeIndex === 2 && (
                            <div className="faq-answer">
                                <p>When you choose to donate to an NGO on give.do, every donation counts. Each contribution, small or large, allows NGOs to reach suffering people in need and make a positive impact in their lives. To cover operational costs, there may be a minimum donation amount on some fundraisers, but this amount is small - yet effective. Every donation makes a difference, so whether you are donating to help build a school or purchase medical equipment for a rural hospital, your donation goes far in making a meaningful impact in the lives of so many people in desperate need.</p>
                            </div>
                            
                        )}
                    </div>
                </div>
            </section>
            
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Fundraiser Support</h3>
                        <p>FAQs</p>
                        <p>Reach out</p>
                    </div>
                    <div className="footer-section">
                        <h3>Start a Fundraiser for</h3>
                        <p>NGO</p>
                        
                    </div>
                    <div className="footer-section">
                        <h3>About Us</h3>
                        
                        <p2>Blog</p2>

                    </div>
                </div>
                <div className="footer-bottom">
                    <h>Disclaimer
                   </h>
                    <p> Use of children’s information including images, videos, testimonials, etc. in the Campaign is necessary for creating awareness about the charitable cause in order to bring traction to the said charitable cause and obtain donations which can then be used for charitable activities. Information is used and processed with valid consent. This statement is issued in compliance with the Consumer Protection Act, 2019, as amended from time to time.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
