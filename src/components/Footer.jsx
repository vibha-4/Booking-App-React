import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import QRCode from "react-qr-code";
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
      <div className="footer-mid-text">
        <p className="footer-text-l">Created by Vibha</p>
        <p className="footer-text-l">Made with ❤ by the Tech Tribe</p>
        <p>Note: This project is made for educational purposes only.</p>
      </div>

      <div className="qr-div">
        <QRCode
          value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="qr-code"
          bgColor="transparent"
          fgColor="white"
        />
      </div>
    </div>
  );
};
export default Footer;
