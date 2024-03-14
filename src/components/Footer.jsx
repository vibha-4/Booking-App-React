import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer-icon">
        <h6 className="footer-icon-text"> Get Connected</h6>
        <a target="_blank" href="https://twitter.com/example">
          <FaTwitter />
        </a>
        <a target="_blank" href="https://instagram.com/example">
          <FaInstagram />
        </a>
        <a target="_blank" href="https://facebook.com/example">
          <FaFacebook />
        </a>
        <a target="_blank" href="https://youtube.com/example">
          <FaYoutube />
        </a>
      </div>
      <div className="footer-text-1">
        <br />
        Made with ❤ by Tech Tribe
        <br />
        Note: This project is made for educational purposes only.
      </div>
      <div className="footer-mid-text">hllo</div>
    </div>
  );
};
export default Footer;
