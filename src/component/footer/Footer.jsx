import React from "react";
import styled, { keyframes } from "styled-components";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import icon from "../../assets/icon.png";

// --- Animations ---
const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1); opacity: 0; }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      link: "https://www.linkedin.com/in/suresh780/", 
      color: "#0077b5", 
      label: "LinkedIn" 
    },
    { 
      icon: <FaGithub />, 
      link: "https://github.com/suresh5189", 
      color: "#f0f6fc", 
      label: "GitHub" 
    },
    { 
      icon: <FaInstagram />, 
      link: "https://www.instagram.com/suresh_242000/", 
      color: "#E1306C", 
      label: "Instagram" 
    },
    { 
      icon: <FaWhatsapp />, 
      link: "https://api.whatsapp.com/send?phone=917801972499", 
      color: "#25D366", 
      label: "WhatsApp" 
    },
  ];

  return (
    <StyledFooter>
      <div className="ambient_glow" />
      
      <div className="container">
        <GlassCard>
          <FooterMain>
            {/* Left Section: Branding */}
            <BrandSide>
              <LogoBox href="#home">
                <img src={icon} alt="Logo" />
                <div className="logo_text">
                  <h3>Suresh Suthar</h3>
                  <p>Full-Stack Developer</p>
                </div>
              </LogoBox>
              <p className="bio">
                Building high-performance web applications with a focus on 
                user-centric design and scalable architecture.
              </p>
              
              <SocialDock>
                {socialLinks.map((item, i) => (
                  <IconButton
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    $brandColor={item.color}
                    whileHover={{ y: -8 }}
                  >
                    <div className="icon_layer">{item.icon}</div>
                    <div className="glow_layer" />
                    <span className="tooltip">{item.label}</span>
                  </IconButton>
                ))}
              </SocialDock>
            </BrandSide>

            {/* Right Section: Navigation */}
            <NavSide>
              <div className="nav_column">
                <h4>Navigation</h4>
                <nav>
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#experience">Work</a>
                  <a href="#portfolio">Projects</a>
                  <a href="#contact">Contact</a>
                </nav>
              </div>
              <div className="nav_column">
                <h4>Let's Talk</h4>
                <p className="contact_text">sureshsuthar2499@gmail.com</p>
                <p className="contact_text">+91 78019 72499</p>
              </div>
            </NavSide>
          </FooterMain>

          <BottomStrip>
            <div className="copyright">
              &copy; {currentYear} • Handcrafted by <span>Suresh Suthar</span>
            </div>
            <div className="status_indicator">
              <div className="dot_wrapper">
                <div className="dot" />
                <div className="ping" />
              </div>
              Available for Hire
            </div>
          </BottomStrip>
        </GlassCard>
      </div>
    </StyledFooter>
  );
};

export default Footer;

// --- Styled Components ---

const StyledFooter = styled.footer`
  padding: 8rem 0 3rem;
  position: relative;
  overflow: hidden;

  .ambient_glow {
    position: absolute;
    bottom: -150px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(circle, rgba(77, 181, 255, 0.07) 0%, transparent 70%);
    filter: blur(60px);
    z-index: -1;
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 40px;
  padding: 4rem;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    padding: 2rem;
    border-radius: 30px;
  }
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const BrandSide = styled.div`
  .bio {
    margin: 1.5rem 0 2.5rem;
    color: #94a3b8;
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 400px;
  }
`;

const LogoBox = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;

  img {
    width: 50px;
    filter: drop-shadow(0 0 12px rgba(77, 181, 255, 0.4));
  }

  .logo_text {
    h3 { color: #fff; font-size: 1.5rem; margin: 0; font-weight: 800; }
    p { color: var(--color-primary); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-weight: 600; }
  }
`;

const NavSide = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  .nav_column {
    h4 { color: #fff; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem; }
    nav {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    a { 
      color: #94a3b8; 
      text-decoration: none; 
      font-size: 0.95rem; 
      transition: 0.3s;
      width: fit-content;
      &:hover { color: var(--color-primary); transform: translateX(5px); }
    }
    .contact_text { color: #fff; font-size: 0.95rem; margin-bottom: 0.5rem; font-weight: 500; }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const SocialDock = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const IconButton = styled(motion.a)`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #94a3b8;
  font-size: 1.3rem;
  transition: all 0.4s ease;

  .icon_layer { z-index: 2; display: flex; }
  .glow_layer {
    position: absolute;
    width: 100%; height: 100%;
    background: ${props => props.$brandColor};
    filter: blur(15px);
    opacity: 0;
    transition: 0.4s ease;
    z-index: 1;
    border-radius: 14px;
  }

  .tooltip {
    position: absolute;
    top: -45px;
    background: #fff;
    color: #000;
    padding: 5px 12px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    color: ${props => props.$brandColor === '#f0f6fc' ? '#000' : '#fff'};
    background: ${props => props.$brandColor};
    border-color: transparent;
    transform: translateY(-5px);

    .glow_layer { opacity: 0.5; transform: scale(1.4); }
    .tooltip { opacity: 1; transform: translateY(0); }
  }
`;

const BottomStrip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  margin-top: 1rem;
  color: #64748b;
  font-size: 0.9rem;

  span { color: #fff; font-weight: 600; }

  .status_indicator {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(0, 255, 136, 0.05);
    padding: 6px 16px;
    border-radius: 100px;
    color: #00ff88;
    font-weight: 600;
    font-size: 0.8rem;

    .dot_wrapper {
      position: relative;
      width: 8px; height: 8px;
      .dot { width: 8px; height: 8px; background: #00ff88; border-radius: 50%; }
      .ping {
        position: absolute;
        top: 0; left: 0;
        width: 8px; height: 8px;
        background: #00ff88;
        border-radius: 50%;
        animation: ${pulse} 2s infinite;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
    text-align: center;
  }
`;