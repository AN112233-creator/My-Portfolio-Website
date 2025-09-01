import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <h4>Andrews</h4>
          <p>Passionate UI/UX Designer & Web Developer.</p>
        </div>
        <div className="footer-item">
          <h4>Phone No.</h4>
          <p>(+233) 20 332 5968</p>
        </div>
        <div className="footer-item">
          <h4>Email</h4>
          <p>andrewsnaworagyere1@gmail.com.com</p>
        </div>
        <div className="footer-item">
          <h4>Address</h4>
          <p>Kwadaso, Kumasi, Ghana.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Andrews © {currentYear}. All Right Reserved, Designed By Andrews Naworagyere.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
