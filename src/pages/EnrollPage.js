import React from 'react';
import './EnrollPage.css';
import i1 from './images/ko.png';
import e1 from './images/PO.jpg'; // Replace with your image paths
import e2 from './images/lp.jpg'; // Replace with your image paths

const EnrollPage = () => {
  return (
    <div className="enroll-page">
      <div className="image-card">
        <img src={i1} alt="Community Impact" />
        <div className="image-card-content">
          <h3>Make a Difference</h3>
          <p>By enrolling with us, your organization can reach more people and make a significant impact in the community.</p>
          <a href="/fundraiser-form" className="cta-button">Sign up with Hopeful hand</a>
        </div>
      </div>
      
      <div className="content-section">
        <h2>Why Enroll with Us?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Visibility</h3>
            <p>Gain exposure to a wide audience of potential donors and volunteers.</p>
          </div>
          <div className="benefit">
            <h3>Support</h3>
            <p>Access resources and support to help your organization grow.</p>
          </div>
          <div className="benefit">
            <h3>Impact</h3>
            <p>Increase your impact by connecting with others who share your mission.</p>
          </div>

          <div className='yolo'>
            <h1>Resources</h1>
            <p>Improve your fundraising skills, make better connections with your donors, and raise more funds!</p>
          </div>

          {/* New section for image cards */}
          <div className="image-cards">
            <div className="image-card-item">
              <img src={e1} alt="Card 1" />
              <div className="card-content">
                <h4></h4>
                <p>Raise funds for NGOs with hopefulhands</p>
              </div>
            </div>
            <div className="image-card-item">
              <img src={e2} alt="Card 2" />
              <div className="card-content">
                
                <p>You can create your own fundraiser</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3>Fundraiser Support</h3>
            <p><a href="#faqs">FAQs</a></p>
            <p><a href="#reach-out">Reach out</a></p>
        </div>
        <div class="footer-section">
            <h3>Start a Fundraiser for</h3>
            <p><a href="#ngo">NGO</a></p>
        </div>
        <div class="footer-section">
            <h3>About Us</h3>
            <p><a href="#blog">Blog</a></p>
        </div>
    </div>
    <div class="footer-bottom">
        <h3>Disclaimer</h3>
        <p>Use of children’s information including images, videos, testimonials, etc. in the Campaign is necessary for creating awareness about the charitable cause in order to bring traction to the said charitable cause and obtain donations which can then be used for charitable activities. Information is used and processed with valid consent. This statement is issued in compliance with the Consumer Protection Act, 2019, as amended from time to time.</p>
    </div>
</footer>

    </div>
    
    

    
  );
};

export default EnrollPage;
