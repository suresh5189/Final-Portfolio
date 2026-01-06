import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsArrowRight,
} from "react-icons/bs";
import {
  FiChevronDown,
  FiActivity,
  FiZap,
  FiDownload,
  FiCode,
  FiCpu,
} from "react-icons/fi";

// Assets
import ME_IMG from "../../assets/my.png";
import ResumePDF from "../../Resume/Resume.pdf";

const Header = () => {
  const { scrollY } = useScroll();
  const [isHovered, setIsHovered] = useState(false);

  const yRange = useTransform(scrollY, [0, 1000], [0, 200]);
  const drift = useSpring(yRange, { stiffness: 100, damping: 30 });

  return (
    <HeroWrapper id="home">
      <BackgroundIndex>
        <motion.span style={{ y: drift }}>01</motion.span>
      </BackgroundIndex>
      <GridOverlay />
      <GradientGlow />

      <TopStatus>
        <div className="logo_brand">
          S.SUTHAR<span className="dot">.</span>
        </div>
        <div className="system_metrics">
          <div className="metric">
            <FiCpu className="icon" /> <span>CORE_V8.0.1</span>
          </div>
          <div className="availability">
            <span className="pulse_dot" /> OPEN FOR PROJECTS
          </div>
        </div>
      </TopStatus>

      <SideNav>
        <div className="line" />
        <SocialIcon href="https://github.com/suresh5189" target="_blank">
          <BsGithub />
          <span className="tooltip">GitHub</span>
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/suresh780/" target="_blank">
          <BsLinkedin />
          <span className="tooltip">LinkedIn</span>
        </SocialIcon>
        <SocialIcon href="https://instagram.com/suresh_242000" target="_blank">
          <BsInstagram />
          <span className="tooltip">Instagram</span>
        </SocialIcon>
        <span className="scroll_text">ESTABLISHED 2021</span>
      </SideNav>

      <MainStage>
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <CategoryTag>
              <FiZap className="zap" /> FULL-STACK ARCHITECT
            </CategoryTag>

            <HeroTitle>
              <span className="outline-fill">SURESH</span>
              <span className="outline">SUTHAR</span>
            </HeroTitle>

            <DescriptionBox>
              <p>
                Crafting <span className="highlight">high-concurrency</span>{" "}
                Node architectures and{" "}
                <span className="highlight">pixel-perfect</span> React
                ecosystems that bridge the gap between logic and human
                experience.
              </p>
            </DescriptionBox>

            <ActionGroup>
              <MainBtn href="#contact">
                Work Together <BsArrowRight className="arrow" />
              </MainBtn>
              <DownloadBtn href={ResumePDF} download>
                Get CV <FiDownload />
              </DownloadBtn>
            </ActionGroup>
          </motion.div>
        </LeftPanel>

        <RightPanel>
          <ImageContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FloatingStat
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <FiActivity className="icon" />
              <div>
                <span className="label">System Health</span>
                <span className="val">OPTIMAL</span>
              </div>
            </FloatingStat>

            <TechTerminal
              animate={{
                x: isHovered ? -15 : 0,
                y: isHovered ? -10 : 0,
                boxShadow: isHovered
                  ? "0 20px 40px rgba(0,0,0,0.8)"
                  : "0 10px 20px rgba(0,0,0,0.4)",
              }}
            >
              <div className="term_header">
                <span className="dot red" /> <span className="dot yellow" />{" "}
                <span className="dot green" />
                <FiCode className="code_icon" />
              </div>
              <div className="term_body">
                <code>{`> npm start`}</code>
                <code>
                  <span className="green_text">✓</span> STACK_READY
                </code>
                <code>
                  <span className="blue_text">λ</span> MERN_DEPLOYED
                </code>
              </div>
            </TechTerminal>

            <PhotoFrame>
              <motion.img
                src={ME_IMG}
                alt="Suresh"
                animate={{
                  scale: isHovered ? 1.08 : 1,
                  filter: isHovered
                    ? "grayscale(0%) brightness(1.1)"
                    : "grayscale(100%) brightness(0.8)",
                }}
                transition={{ duration: 0.8 }}
              />
              <div className="vignette" />
              <ScanLine
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="corner tl" />
              <div className="corner br" />
            </PhotoFrame>
          </ImageContainer>
        </RightPanel>
      </MainStage>

      <BottomBar>
        <div className="coord">26.2389° N, 73.0243° E // SURAT, IN</div>
        <ScrollIndicator
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiChevronDown />
        </ScrollIndicator>
        <div className="copyright">DESIGNED BY SUTHAR © 2026</div>
      </BottomBar>
    </HeroWrapper>
  );
};

export default Header;

// --- STYLED COMPONENTS ---

const pulse = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
`;

const HeroWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #030303;
  color: #fafafa;
  display: flex;
  position: relative;
  overflow: hidden;
  font-family: "Inter", -apple-system, sans-serif;
`;

const GradientGlow = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(
    circle,
    rgba(77, 181, 255, 0.08) 0%,
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

const BackgroundIndex = styled.div`
  position: absolute;
  right: -5%;
  bottom: -5%;
  font-size: 35vw;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.02);
  z-index: 0;
  user-select: none;
`;

const TopStatus = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 30px 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  .logo_brand {
    font-weight: 900;
    letter-spacing: 6px;
    font-size: 1rem;
    .dot {
      color: #4db5ff;
    }
  }

  .system_metrics {
    display: flex;
    gap: 40px;
    align-items: center;
    .metric {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: "JetBrains Mono", monospace;
      font-size: 0.7rem;
      color: #666;
      .icon {
        color: #4db5ff;
        font-size: 1rem;
      }
    }
  }

  .availability {
    font-size: 0.65rem;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 8px 18px;
    border-radius: 4px;
    color: #eee;
    .pulse_dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      box-shadow: 0 0 10px #10b981;
      animation: ${pulse} 2s infinite;
    }
  }
`;

const SideNav = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  z-index: 100;
  @media (max-width: 1024px) {
    display: none;
  }
  .line {
    width: 1px;
    height: 120px;
    background: linear-gradient(to top, #4db5ff, transparent);
    margin-bottom: 30px;
  }
  .scroll_text {
    writing-mode: vertical-rl;
    font-size: 0.6rem;
    letter-spacing: 6px;
    color: #444;
    margin-top: 40px;
  }
`;

const SocialIcon = styled.a`
  position: relative;
  color: #666;
  font-size: 1.4rem;
  margin: 18px 0;
  transition: 0.4s;
  &:hover {
    color: #fff;
    transform: translateY(-5px);
  }
  .tooltip {
    position: absolute;
    left: 50px;
    background: #ffffffff;
    color: #000;
    font-size: 0.6rem;
    font-weight: 900;
    padding: 4px 10px;
    border-radius: 2px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    transform: translateX(-10px);
  }
  &:hover .tooltip {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MainStage = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  padding: 0 10%;
  align-items: center;
  z-index: 2;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 120px 5%;
    text-align: center;
    justify-items: center;
  }
`;

const LeftPanel = styled.div`
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const CategoryTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #4db5ff;
  margin-bottom: 30px;
  .zap {
    filter: drop-shadow(0 0 5px #4db5ff);
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 950;
  line-height: 0.85;
  letter-spacing: -2px;
  .outline {
    display: block;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.15);
  }
  .outline-fill {
    display: block;
    margin-bottom: 10px;
    -webkit-text-stroke: 1.5px rgba(255, 255, 255);
  }
`;

const DescriptionBox = styled.div`
  margin: 40px 0;
  max-width: 550px;
  @media (max-width: 1024px) {
    margin: 30px auto;
  }
  p {
    font-size: clamp(1rem, 1.8vw, 1.25rem);
    line-height: 1.8;
    color: #999;
    .highlight {
      color: #fff;
      font-weight: 600;
      text-decoration: underline rgba(77, 181, 255, 0.4);
    }
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 25px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const MainBtn = styled.a`
  padding: 22px 48px;
  background: #fff;
  color: #000;
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 3px;
  border-radius: 2px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #4db5ff;
    color: #fff;
    box-shadow: 0 15px 40px rgba(77, 181, 255, 0.3);
    transform: translateY(-5px);
  }
`;

const DownloadBtn = styled(MainBtn)`
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  &:hover {
    border-color: #fff;
    background: transparent;
  }
`;

const RightPanel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
`;

const PhotoFrame = styled.div`
  position: relative;
  aspect-ratio: 0.85;
  background: #0a0a0a;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, transparent 20%, #030303 100%);
  }
  .corner {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 3px solid #4db5ff;
    &.tl {
      top: -5px;
      left: -5px;
      border-right: 0;
      border-bottom: 0;
    }
    &.br {
      bottom: -5px;
      right: -5px;
      border-left: 0;
      border-top: 0;
    }
  }
`;

const ScanLine = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4db5ff, transparent);
  opacity: 0.3;
  z-index: 2;
`;

const TechTerminal = styled(motion.div)`
  position: absolute;
  bottom: -8%;
  left: -15%;
  width: 240px;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 15px;
  z-index: 10;
  .term_header {
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
    align-items: center;
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .red {
      background: #ff5f56;
    }
    .yellow {
      background: #ffbd2e;
    }
    .green {
      background: #27c93f;
    }
    .code_icon {
      margin-left: auto;
      color: #444;
    }
  }
  .term_body code {
    display: block;
    font-size: 0.7rem;
    color: #888;
    font-family: "JetBrains Mono", monospace;
    margin-bottom: 8px;
    .green_text {
      color: #27c93f;
    }
    .blue_text {
      color: #4db5ff;
    }
  }
  @media (max-width: 600px) {
    width: 180px;
    left: -5%;
  }
`;

const FloatingStat = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: -10%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  padding: 15px 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 10;
  border-radius: 2px;
  .icon {
    color: #4db5ff;
    font-size: 1.5rem;
    filter: drop-shadow(0 0 8px #4db5ff);
  }
  .label {
    display: block;
    font-size: 0.55rem;
    color: #666;
    text-transform: uppercase;
    font-weight: 800;
  }
  .val {
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 1px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const BottomBar = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 40px 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.65rem;
  color: #444;
  font-weight: 600;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    .coord {
      display: none;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #4db5ff;
  }
`;
