// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer 
      id="footer" 
      className="text-black py-6"
      style={{ 
        background: 'linear-gradient(135deg, #f8c9d3, #fdf7b5, #d8c6a1)' // Main gradient color
      }}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Perfume Shop. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p>Contact us: info@perfumeshop.com | Phone: (123) 456-7890</p>
        <p>Visit us:</p>
        <div className="flex justify-center mt-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091386!2d144.95373631568677!3d-37.81627927975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b8b1%3A0x3e3b9c4c5b0b1a9!2sPerfume%20Shop!5e0!3m2!1sen!2sau!4v1635511325634!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
