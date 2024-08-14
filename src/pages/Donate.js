import React, { useState } from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import './Donate.css'; // Import the CSS file for styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import i7 from './images/donate3.png'; // Image for the horizontal card
import i8 from './images/iam.png'; // New image for the horizontal card
import a1 from './images/hunger.jpg'
import a2 from './images/edu.jpg'
import a3 from './images/elder.jpg'
import a4 from './images/periods.jpg'
import a5 from './images/abuse.jpg'
import a6 from './images/labor.jpg'
import i9 from './images/donate2.png'; 
import i0 from './images/you.png'; 
import i88 from './images/io.png'; 
import i99 from './images/ioo.png'; 



const Donate = () => {
    
    const horizontalSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1    
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="donate-container">
            {/* Horizontal Card Carousel */}
            <Slider {...horizontalSettings} className="horizontal-card-slider">
                <div className="horizontal-card">
                    <img src={i7} alt="Special Mission" className="horizontal-card-image" />
                    <div className="horizontal-card-content">
                       
                    </div>
                </div>
                <div className="vertical-card">
                    <img src={i8} alt="New Special Mission" className="horizontal-card-image" />
                    <div className="horizontal-card-content">
                       
                    </div>
                </div>
            </Slider>
            
            {/* Eight Impact Cards */}
            <section className="impact-section">
               <div className="impact-cards">
                    <div className="impact-card">
                        <img src={a1} alt="Feed the Hungry" className="impact-card-image" />
                        <h3>Feed the Hungry</h3>
                        <p>We provide meals to those in need, ensuring no one goes hungry.</p>
                        <Link to="/mission1" className="card-btn">Pledge Monthly</Link>
                    </div>
                    <div className="impact-card">
                        <img src={a2} alt="Support Education" className="impact-card-image" />
                        <h3>Support Education</h3>
                        <p>Your donations help children receive quality education.</p>
                        <Link to="/mission2" className="card-btn">Pledge Monthly</Link>
                    </div>
                    <div className="impact-card">
                        <img src={a3} alt="Protect the Elderly" className="impact-card-image" />
                        <h3>Protect the Elderly</h3>
                        <p>We offer support and care for abandoned and elderly individuals.</p>
                        <Link to="/mission3" className="card-btn">Pledge Monthly</Link>
                    </div>
                    <div className="impact-card">
                        <img src={a4} alt="Feed the Hungry" className="impact-card-image" />
                        <h3>End Period Poverty</h3>
                        <p>Provide Sanitary Pads for girls and womens in need.</p>
                        <Link to="/mission4" className="card-btn">Pledge Monthly</Link>
                    </div>
                    <div className="impact-card">
                        <img src={a5} alt="Support Education" className="impact-card-image" />
                        <h3>Child Abuse</h3>
                        <p>Your donations help children from being thrown into sexual harassments.</p>
                        <Link to="/mission5" className="card-btn">Pledge Monthly</Link>
                    </div>
                    <div className="impact-card">
                        <img src={a6} alt="Protect the Elderly" className="impact-card-image" />
                        <h3>Prevent Child labours</h3>
                        <p>We offer support and care for child labours Rescued from various regions.</p>
                        <Link to="/mission6" className="card-btn">Pledge Monthly</Link>
                    </div>   
                </div>
            </section>

            <Slider {...horizontalSettings} className="horizontal-card-slider">
                <div className="horizontal-card">
                    <img src={i88} alt="Special Mission" className="horizontal-card-image" />
                    <div className="horizontal-card-content">
                       
                    </div>
                </div>
                <div className="vertical-card">
                    <img src={i99} alt="New Special Mission" className="horizontal-card-image" />
                    <div className="horizontal-card-content">
                       
                    </div>
                </div>
            </Slider>
            <footer className="query">
    <div className="query-content">
        <div className="query-section">
             <h3>Choose the Donation Amount</h3>
             <p>Select an amount that you'd be comfortable donating every month to the cause.</p>
        </div>
        <div className="query-section">
            <h3>Provide us with your information</h3>
            <p>Help us with some information like PAN details, address which would help us serve you better in the future</p>
        </div>
        <div className="query-section">
            <h3>Donate & Share among people</h3>
            <p2>Donate every month and share your achievement with your group and invite them to donate as well!</p2>
        </div>
    </div>
</footer>
               
<Slider {...horizontalSettings} className="horizontal-card-slider">
                <div className="horizontal-card">
                    <img src={i9} alt="Special Mission" className="horizontal-card-image" />
                    <div className="horizontal-card-content">
                </div>
                </div>
                <div className="vertical-card">
                    <img src={i0} alt="New Special Mission" className="horizontal-card-image" />
                    <div className="horizontal-card-content">
                </div>
                </div>
            </Slider>

            <section className="faq-section">
                <h2>FAQs</h2>
                <p>Everything you need to know about our initiatives. If you have any other questions, please reach out to us at: <a href="mailto:support@hopefulhands.org">support@hopefulhands.org</a></p>
                <div className="faq-questions">
                    <div className="faq-question" onClick={() => toggleAnswer(0)}>
                        <h3>Why Donate Monthly?</h3>
                        {activeIndex === 0 && (
                            <div className="faq-answer">
                                <p>Donating to an NGO every month through a monthly contribution has multiple benefits, both for you and the organisation you are supporting. By being a monthly donor, you provide a steady stream of support to NGOs to help them make a long term impact. For example, a monthly contribution to an education campaign gives a student the assurance that they have enough support to stay in school until the end of the school year. Or, people in remote areas will have the guarantee that they will have access to long term medical treatment. Making a monthly contribution also gives you, the donor, tax benefits through Section 80G of the Income Tax Act which assists your financial planning. Starting at ₹600 a month, you can make an impact in the lives of girls going to school, orphans and elderly people, and donate meals to malnourished children and elders, end period poverty and save the environment. Explore our monthly miss</p>
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
                    <h>Disclaimer</h>
                    <p> Use of children’s information including images, videos, testimonials, etc. in the Campaign is necessary for creating awareness about the charitable cause in order to bring traction to the said charitable cause and obtain donations which can then be used for charitable activities. Information is used and processed with valid consent. This statement is issued in compliance with the Consumer Protection Act, 2019, as amended from time to time.</p>
                </div>
            </footer>
</div>
  );
    
}
export default Donate;
