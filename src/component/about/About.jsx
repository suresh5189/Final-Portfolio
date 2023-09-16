import React from "react";
import "./about.css";
import ME from "../../assets/suresh.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>0 Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Internship</h5>
              <small>1 Completed</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello! My name is Suresh, Front-developer and Designer based in
            Surat. My interest in Web development started when I got to know
            about the inspect element where we can change anything on the
            website with just a click. This taught me the endless possibilities
            of what we can build on the internet.
            <br />
            <br />
            Currently I am Pre-final
            student, pursuing my majors in Computer Science and Engineering from
            SRM, KTR
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
