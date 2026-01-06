import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import ME_IMG from "../../assets/suresh.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { leftToRightStiff } from "../../animation/experience";
import { bottomToTop } from "../../animation/project";

const About = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <AboutSection id="about">
      <header className="header_main">
        <motion.h5
          variants={bottomToTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Get To Know
        </motion.h5>
        <SectionTitle
          variants={bottomToTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me<span className="dot">.</span>
        </SectionTitle>
      </header>

      <AboutContainer className="container">
        <AboutMe
          variants={leftToRightStiff}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ImageContainer>
            <MorphingBlob />
            <GlowRing />
            <NeonFrame>
              <InnerContent>
                <img src={ME_IMG} alt="Suresh Suthar" />
              </InnerContent>
            </NeonFrame>
          </ImageContainer>
        </AboutMe>

        <AboutContent>
          <AboutCards>
            {[
              { icon: <FaAward />, title: "Specialization", desc: "MERN Stack" },
              { icon: <FiUsers />, title: "Experience", desc: "Junior Developer" },
              { icon: <VscFolderLibrary />, title: "Projects", desc: "20+ Built" },
            ].map((card, i) => (
              <AboutCard
                key={i}
                custom={i}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="icon_box">{card.icon}</div>
                <h5>{card.title}</h5>
                <small>{card.desc}</small>
                <div className="card_reflection" />
              </AboutCard>
            ))}
          </AboutCards>

          <Description
            variants={bottomToTop}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            I am a <span className="highlight">Full Stack / MERN Stack Developer</span> with hands-on experience designing, 
            developing, and deploying scalable web applications using <span className="code-style">React.js</span>, 
            <span className="code-style">Node.js</span>, <span className="code-style">Express.js</span>, and 
            <span className="code-style">MongoDB</span>. 
            <br /><br />
            I possess a deep understanding of <span className="highlight">RESTful APIs</span>, JWT authentication, 
            Redux, and Agile methodologies. My focus is on optimizing performance and enhancing user experience 
            by blending technical logic with aesthetic design to deliver high-quality software solutions.
          </Description>

          <CTAButton
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(77, 181, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </CTAButton>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;

// --- Animations (Keep your existing morph, rotateNeon, spin, pulse keyframes) ---
const morph = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

const rotateNeon = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
`;

// --- Styled Components ---

const AboutSection = styled.section`
  padding: 10rem 0;

  .header_main {
    text-align: center;
    margin-bottom: 5rem;
  }

  h5 { 
    color: var(--color-primary); 
    letter-spacing: 6px; 
    text-transform: uppercase; 
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 950;
  letter-spacing: -2px;
  color: var(--color-white);
  
  .dot {
    color: var(--color-primary);
    text-shadow: 0 0 15px rgba(77, 181, 255, 0.6);
  }
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 55%;
  gap: 10%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 0 5%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MorphingBlob = styled.div`
  position: absolute;
  width: 115%;
  height: 115%;
  background: linear-gradient(45deg, var(--color-primary), #00d4ff);
  filter: blur(50px);
  opacity: 0.2;
  animation: ${morph} 8s ease-in-out infinite;
  z-index: -1;
`;

const GlowRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px dashed var(--color-primary);
  border-radius: 50%;
  animation: ${spin} 20s linear infinite, ${pulse} 5s ease-in-out infinite;
  opacity: 0.2;
`;

const NeonFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #111;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: conic-gradient(transparent, var(--color-primary), transparent 30%);
    animation: ${rotateNeon} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    background: #080808;
    inset: 4px;
    border-radius: 2.3rem;
  }
`;

const InnerContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  border-radius: 2.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.8rem;
    filter: grayscale(100%) contrast(1.1);
    transition: 0.8s cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.08);
  }
`;

const AboutMe = styled(motion.div)`
  width: 100%;
  @media screen and (max-width: 1024px) {
    width: 60%;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const AboutContent = styled.div`
  .highlight { color: var(--color-primary); font-weight: 700; }
  .code-style { 
    background: rgba(255,255,255,0.05); 
    padding: 3px 8px; 
    border-radius: 4px; 
    font-family: 'Fira Code', monospace; 
    font-size: 0.85rem; 
    color: var(--color-white);
    border: 1px solid rgba(255,255,255,0.1);
    margin: 0 4px;
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 600px) { grid-template-columns: 1fr; }
`;

const AboutCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  padding: 2.5rem 1rem;
  text-align: center;
  transition: 0.4s ease;

  &:hover {
    border-color: var(--color-primary);
    background: rgba(77, 181, 255, 0.02);
    transform: translateY(-10px);
  }

  .icon_box {
    background: #111;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    margin: 0 auto 1.5rem;
    color: var(--color-primary);
    font-size: 1.6rem;
    border: 1px solid rgba(255,255,255,0.05);
  }

  h5 { color: var(--color-white); font-size: 1rem; margin-bottom: 0.5rem; }
  small { color: var(--color-light); opacity: 0.6; font-size: 0.8rem; letter-spacing: 0.5px; }
`;

const Description = styled(motion.p)`
  margin: 3rem 0;
  line-height: 1.8;
  color: var(--color-light);
  font-size: 1.05rem;
  font-weight: 400;
  opacity: 0.9;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: var(--color-primary);
  color: #000;
  padding: 1.2rem 3.5rem;
  border-radius: 4px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  text-decoration: none;
  transition: 0.3s ease;
`;