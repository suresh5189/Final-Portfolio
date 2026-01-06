import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// --- Icons ---
import cplus from "../../images/c.svg";
import c from "../../images/cplus.svg";
import python from "../../images/python.svg";
import css3 from "../../images/css3.svg";
import html from "../../images/html.svg";
import js from "../../images/js.svg";
import bootstrap from "../../images/bootstrap.svg";
import node from "../../images/nodejs.svg";
import illustrator from "../../images/adobe-illustrator.svg";
import photoshop from "../../images/adobe-photoshop.svg";
import blender from "../../images/blender.svg";
import git from "../../images/git.svg";
import github from "../../images/github.svg";
import heroku from "../../images/heroku.svg";
import postman from "../../images/postman.svg";
import netlify from "../../images/netlify.svg";
import firebase from "../../images/firebase.svg";
import figma from "../../images/figma.svg";
import mysql from "../../images/mysql.svg";
import mongodb from "../../images/mongodb.svg";
import react from "../../images/react.svg";
import express from "../../images/express.svg";
import jquery from "../../images/jquery.svg";
import tailwind from "../../images/tailwind.svg";
import framerMotion from "../../images/framerMotion.svg";
import dart from "../../images/dart.svg";
import flutter from "../../images/flutter.svg";
import typescript from "../../images/typescript.svg";

const SkillCard = ({ title, items, cols, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <CardContainer className={className}>
      <CardContent>
        <CardHeader>
          <h3>{title}</h3>
          <div className="line" />
        </CardHeader>

        <Grid cols={cols}>
          {items.map((item, i) => (
            <SkillItem
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.1 }}
            >
              <AnimatePresence>
                {hoveredIndex === i && (
                  <Tooltip
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                  >
                    {item.name}
                  </Tooltip>
                )}
              </AnimatePresence>

              <IconBox>
                <img src={item.icon} alt={item.name} className="skill-icon" />
              </IconBox>
            </SkillItem>
          ))}
        </Grid>
      </CardContent>
    </CardContainer>
  );
};

const Experience = () => {
  const languages = [
    { icon: c, name: "C" },
    { icon: cplus, name: "C++" },
    { icon: python, name: "Python" },
    { icon: js, name: "JavaScript" },
    { icon: html, name: "HTML5" },
    { icon: css3, name: "CSS3" },
    { icon: dart, name: "Dart" },
    { icon: typescript, name: "TypeScript" },
  ];

  const frameworks = [
    { icon: react, name: "React" },
    { icon: node, name: "Node.js" },
    { icon: bootstrap, name: "Bootstrap" },
    { icon: express, name: "Express" },
    { icon: jquery, name: "jQuery" },
    { icon: tailwind, name: "Tailwind" },
    { icon: flutter, name: "Flutter" },
    { icon: framerMotion, name: "Framer" },
  ];

  const tools = [
    { icon: firebase, name: "Firebase" },
    { icon: git, name: "Git" },
    { icon: github, name: "GitHub" },
    { icon: figma, name: "Figma" },
    { icon: heroku, name: "Heroku" },
    { icon: netlify, name: "Netlify" },
    { icon: mysql, name: "MySQL" },
    { icon: postman, name: "Postman" },
    { icon: illustrator, name: "Illustrator" },
    { icon: photoshop, name: "Photoshop" },
    { icon: blender, name: "Blender" },
    { icon: mongodb, name: "MongoDB" },
  ];

  return (
    <Section id="experience">
      <header className="header_main">
        <motion.h5>Tech Expertise</motion.h5>
        <SectionTitle>
          Technical Arsenal<span className="dot">.</span>
        </SectionTitle>
        <SubHeading>A comprehensive set of tools for building modern digital products</SubHeading>
      </header>

      <BentoGrid>
        <SkillCard
          className="card-left"
          title="Languages"
          items={languages}
          cols={4}
        />
        <SkillCard
          className="card-right"
          title="Frameworks"
          items={frameworks}
          cols={4}
        />
        <SkillCard
          className="card-bottom"
          title="Tools & Infrastructure"
          items={tools}
          cols={6}
        />
      </BentoGrid>
    </Section>
  );
};

export default Experience;

/* --- STYLED COMPONENTS --- */

const Section = styled.section`
  padding: 10rem 8%;
  color: #fff;

  .header_main {
    text-align: center;
    margin-bottom: 6rem;
    h5 {
      color: #4db5ff;
      letter-spacing: 6px;
      text-transform: uppercase;
      font-size: 0.75rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 950;
  letter-spacing: -2px;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  .dot {
    color: #4db5ff;
    text-shadow: 0 0 15px rgba(77, 181, 255, 0.6);
  }
`;

const SubHeading = styled.h4`
  color: #666;
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;

  .card-left { grid-column: 1 / 2; }
  .card-right { grid-column: 2 / 3; }
  .card-bottom { grid-column: 1 / 3; }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    .card-left, .card-right, .card-bottom { grid-column: 1 / 2; }
  }
`;

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  transition: all 0.3s ease;
  &:hover {
    border-color: rgba(77, 181, 255, 0.3);
    background: rgba(77, 181, 255, 0.01);
  }
`;

const CardContent = styled.div`
  padding: 3rem;
  @media (max-width: 600px) { padding: 2rem; }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  h3 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #4db5ff;
    font-weight: 800;
  }
  .line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(77, 181, 255, 0.2), transparent);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || 4}, 1fr);
  gap: 2.5rem;
  @media (max-width: 768px) { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  @media (max-width: 480px) { grid-template-columns: repeat(3, 1fr); }
`;

const SkillItem = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconBox = styled.div`
  width: 100%;
  max-width: 50px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .skill-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(1) brightness(0.6);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  ${SkillItem}:hover & .skill-icon {
    filter: grayscale(0) brightness(1);
    transform: scale(1.1);
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  top: -45px;
  left: 50%;
  background: #fff;
  color: #000;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
  }
`;