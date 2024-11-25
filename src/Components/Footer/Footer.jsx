import React from "react";
import "./Footer.css";
import logo_pic from "../../assets/logo-pic.jpg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo_pic} alt="footer logo" />
          <p>
            I'm a full stack developer from, ethiopia with 3 yers of experience.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Birhanu lamesa. All right served
        </p>
        <div className="footer-bottom-right">
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
