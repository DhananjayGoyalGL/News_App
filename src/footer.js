import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Stay informed with the latest news from around the world. We bring
            you the most trending and reliable news.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="#" className="social-icon">
            Facebook
          </a>
          <a href="#" className="social-icon">
            Twitter
          </a>
          <a href="#" className="social-icon">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 NewsApp | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
