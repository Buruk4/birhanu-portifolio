import React from "react";
import "./Hero.css";
import profile from "../../assets/profile-img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Birhanu_Lamesa_Resume.docx";
function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="profile images" />

      <h1>
        <span>I'm Birhanu Lamesa</span>, full-stack developer in Ethiopia
      </h1>
      <p>
        Full stack web developer and computer science student with a passion for
        building dynamic, user-focused application and a commitment to driving
        digital innovation.
      </p>
      <div className="hero-action">
        <div id="connect-me" className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          href={resume}
          download="birhanu-lamesa-resume.docx"
          className="resume"
        >
          <div>My Resume</div>
        </a>
      </div>
    </div>
  );
}
export default Hero;
