import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1>About Us</h1>
        <p>
          At our platform, we believe in the power of healthy food to improve your overall well-being. We are dedicated to helping you select the best nutritious meals that benefit both your body and health. Whether you're looking to improve your diet or need guidance on the best food choices, we are here to assist you. Our goal is to make healthy eating easy and accessible for everyone.
        </p>
      </div>
      
      <div className="aboutus-image">
        <img src="/helth1.jpg" alt="Healthy Food" />
      </div>
      
      <div className="Map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.764686335583!2d76.86866537597788!3d43.214424671126416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368581d609ad9%3A0xe1f0af0b0d83729e!2z0YPQuy4g0JbQsNC90LTQvtGB0L7QstCwIDU1!5e0!3m2!1sru!2skz!4v1716501889305!5m2!1sru!2skz"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    </div>
  );
};

export default About;
