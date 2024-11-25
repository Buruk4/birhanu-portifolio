import "./About.css";
import theme_picture from "../../assets/theme_pattern.svg";
import myPicture from "../../assets/profile-img.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about_title">
        <h1>About Me</h1>
        <img src={theme_picture} alt="mp picture" />
      </div>
      <div className="about_section">
        <div className="about-left">
          <img src={myPicture} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a dedicated full stack developer with a strong foundation in
              both front-end and back-end technologies, gained through a mix of
              academic learning and practical projects.
            </p>
            <p>
              My passion lies in building digital solutions that make a
              difference and bring ideas to life.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p>NODE JS </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achivement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};
export default About;
