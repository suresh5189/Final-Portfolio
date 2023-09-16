import React from 'react';
import {FaInstagram,FaFacebookF,FaGithub,FaLinkedin} from 'react-icons/fa';
import './footer.css';
import icon from "../../assets/icon.png"

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'><img src={icon} alt="" /></a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/suresh_242000/" target="_blank" rel="noreferrer"><FaInstagram/></a>
        <a href="https://github.com/suresh5189" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/suresh780/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://www.facebook.com/SURESHSUTHAR780/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Suresh Suthar All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
