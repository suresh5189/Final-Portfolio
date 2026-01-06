import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Assets
import CoffeeShopApp from "../../assets/CoffeeShopApp.jpg";
import TeslaApp from "../../assets/TeslaApp.jpg";
import PvrApp from "../../assets/PvrApp.jpg";
import NikeApp from "../../assets/NikeApp.jpg";
import InstagramApp from "../../assets/Feed.png";

// Animations
import { bottomToTop } from "../../animation/project";
import { leftToRight } from "../../animation/experience";

const Data = [
  {
    id: 0,
    image: CoffeeShopApp,
    title: "Coffee Shop App",
    github: "https://github.com/suresh5189/Coffee-Shop-App",
    category: "React Native",
    tech: ["React Native", "Zustand", "React Navigation"],
    features: [
      "Zustand State Management",
      "Cross-Platform (iOS/Android)",
      "Real-time Cart & UI Updates",
      "Modular Architecture",
    ],
  },
  {
    id: 1,
    image: PvrApp,
    title: "PVR Booking App",
    github: "https://github.com/suresh5189/PVR-Movie-Booking-App",
    category: "Flutter",
    tech: ["Flutter", "Dart", "Firebase"],
    features: [
      "Dynamic Seat Selection",
      "Razorpay Integration",
      "Movie API Consumption",
    ],
  },
  {
    id: 2,
    image: NikeApp,
    title: "Nike Shoe",
    github: "https://github.com/suresh5189/Nike-App",
    category: "UI/UX",
    tech: ["React Native", "Reanimated", "Framer"],
    features: [
      "Shared Element Transitions",
      "Parallax Hero Effects",
      "Micro-interactions",
    ],
  },
  {
    id: 3,
    image: TeslaApp,
    title: "Tesla Clone",
    github: "https://github.com/suresh5189/Tesla-Clone-Android-App",
    category: "React Native",
    tech: ["React Native", "Redux", "Maps API"],
    features: [
      "Live Battery Tracking",
      "Remote Vehicle Controls",
      "Tesla Design Language",
    ],
  },
  {
    id: 4,
    image: InstagramApp,
    title: "Social Feed App",
    github: "https://github.com/suresh5189/instagram-clone",
    category: "Full Stack",
    tech: ["React Native", "Firebase", "Cloudinary"],
    features: [
      "Real-time Likes/Comments",
      "Image Upload & Storage",
      "Firebase Authentication",
    ],
  },
];

const PortfolioApp = () => {
  return (
    <PortfolioSection id="portfolio-app">
      <header className="header_main">
        <motion.h5
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Technical Implementations
        </motion.h5>
        <SectionTitle
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          App Portfolio<span className="dot">.</span>
        </SectionTitle>
        <SubHeading>Click on devices to explore system architecture</SubHeading>
      </header>

      <AppContainer
        variants={bottomToTop}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        {Data.map(({ id, image, title, github, category, tech, features }) => (
          <AppCard
            key={id}
            whileHover={{ y: -15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DeviceFrame>
              <div className="status-bar" />
              <img src={image} alt={title} loading="lazy" />

              <div className="overlay">
                <h4>Architecture Highlights</h4>
                <FeatureList>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </FeatureList>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  View Source Code
                </a>
              </div>
            </DeviceFrame>

            <AppInfo>
              <span className="category">{category}</span>
              <h3>{title}</h3>
              <TechStackTags>
                {tech.map((item, index) => (
                  <span key={index} className="tech-tag">
                    {item}
                  </span>
                ))}
              </TechStackTags>
            </AppInfo>
          </AppCard>
        ))}
      </AppContainer>
    </PortfolioSection>
  );
};

export default PortfolioApp;

// --- Styled Components ---

const PortfolioSection = styled.section`
  padding: 10rem 0;

  .header_main {
    text-align: center;
    margin-bottom: 6rem;
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
  text-align: center;
  color: var(--color-white);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 950;
  margin-bottom: 0.5rem;
  letter-spacing: -2px;
  color: rgba(255, 255, 255, 0.6);

  .dot {
    color: var(--color-primary);
    text-shadow: 0 0 15px rgba(77, 181, 255, 0.6);
  }
`;

const SubHeading = styled.h4`
  text-align: center;
  color: var(--color-light);
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  opacity: 0.6;
`;

const AppContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 0 5%;
  }
`;

const DeviceFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/18.5;
  background: #111;
  border-radius: 2.8rem;
  border: 10px solid #1a1a1a;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .status-bar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 38%;
    height: 25px;
    background: #1a1a1a;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    z-index: 5;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.4s ease;
    backdrop-filter: blur(10px);
    z-index: 10;

    h4 {
      color: var(--color-primary);
      font-size: 0.8rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  &:hover {
    border-color: var(--color-primary);
    .overlay {
      opacity: 1;
    }
    img {
      transform: scale(1.1);
    }
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
  li {
    color: var(--color-white);
    font-size: 0.85rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: left;
    width: 100%;
    &::before {
      content: "//";
      color: var(--color-primary);
      font-family: monospace;
      font-weight: bold;
    }
  }
`;

const AppInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  .category {
    font-size: 0.65rem;
    color: var(--color-primary);
    background: rgba(77, 181, 255, 0.1);
    padding: 4px 14px;
    border-radius: 2rem;
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  h3 {
    color: var(--color-white);
    font-size: 1.4rem;
    margin: 1rem 0 0.5rem;
    font-weight: 700;
  }
`;

const TechStackTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  .tech-tag {
    font-size: 0.6rem;
    color: var(--color-light);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 3px 10px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.02);
    font-weight: 500;
  }
`;

const AppCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .github-btn {
    background: #fff;
    color: #000;
    padding: 0.8rem 1.8rem;
    border-radius: 4px;
    font-weight: 800;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s ease;
    text-decoration: none;
    &:hover {
      background: var(--color-primary);
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;
