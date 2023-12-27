import React from "react";
import "./portfolio.css";
import Ecommerce from "../../assets/ecommerce.png";
import Dashboard from "../../assets/dashboard.png";
import Disney from "../../assets/disney.webp";
import Glass from "../../assets/glass.png";
import Login from "../../assets/login.png";
import Notes from "../../assets/notes.png";
import Portfolio0 from "../../assets/portfolio0.jpg";
import Portfolio1 from "../../assets/myportfolio.png";
import Chat from "../../assets/chat.webp";
import Tesla from "../../assets/tesla.png";
import Calculator from "../../assets/calculator.png";
import Flip from "../../assets/flip.png";
import Quiz from "../../assets/quiz.webp";
import { motion } from "framer-motion";
import { bottomToTop } from "../../animation/project";
import { leftToRight } from "../../animation/experience";

const Data = [
  {
    id: 0,
    image: Ecommerce,
    title: "MERN Ecommerce",
    github: "https://github.com/suresh5189/MERN-Ecommerce",
    demo: "https://ecommerce-z1g8.onrender.com/",
  },
  {
    id: 1,
    image: Disney,
    title: "DisneyPlus Clone",
    github: "https://github.com/suresh5189/DisneyPlus-Clone",
    demo: "https://disneyplus-clone-58fb8.web.app/",
  },
  {
    id: 2,
    image: Chat,
    title: "Simple Chat Application",
    github: "https://github.com/suresh5189/Simple-Chat-Application",
    demo: "https://chat-application-demo-123.netlify.app/",
  },
  {
    id: 3,
    image: Tesla,
    title: "Tesla Clone",
    github: "https://github.com/suresh5189/Tesla-Clone",
    demo: "https://tesla-clone-app-in.netlify.app/",
  },
  {
    id: 4,
    image: Notes,
    title: "Sticky Notes App",
    github: "https://github.com/suresh5189/Sticky-Notes-App",
    demo: "https://suresh5189.github.io/Sticky-Notes-App/",
  },
  {
    id: 5,
    image: Dashboard,
    title: "Dashboard",
    github: "https://github.com/suresh5189/Dashboard",
    demo: "https://dashboard780.netlify.app/",
  },
  {
    id: 6,
    image: Flip,
    title: "Transparent 3D Flip Card UI Design",
    github: "https://github.com/suresh5189/Transparent-3D-Flip-Card-UI-Design-",
    demo: "https://suresh5189.github.io/Transparent-3D-Flip-Card-UI-Design-/",
  },
  {
    id: 7,
    image: Login,
    title: "Login and Sign Up Page",
    github: "https://github.com/suresh5189/Login-and-Sign-Up-Page",
    demo: "https://suresh5189.github.io/Login-and-Sign-Up-Page/",
  },
  {
    id: 8,
    image: Quiz,
    title: "Quiz App",
    github: "https://github.com/suresh5189/Quiz-App",
    demo: "https://suresh5189.github.io/Quiz-App/",
  },
  {
    id: 9,
    image: Calculator,
    title: "Calculator",
    github: "https://github.com/suresh5189/Calculator",
    demo: "https://suresh5189.github.io/Calculator/",
  },
  {
    id: 10,
    image: Portfolio1,
    title: "Portfolio",
    github: "https://github.com/suresh5189/MyPortfolio",
    demo: "https://suresh5189.github.io/MyPortfolio/website.html",
  },
  {
    id: 11,
    image: Portfolio0,
    title: "Portfolio 2.0 (Demo)",
    github: "https://github.com/suresh5189/Portfolio-2.0/tree/master",
    demo: "https://suresh5189.github.io/Portfolio-2.0/",
  },
  {
    id: 12,
    image: Glass,
    title: "Transparent Card UI Design Glassmorphism",
    github:
      "https://github.com/suresh5189/Transparent-Card-UI-Design-Glassmorphism",
    demo: "https://suresh5189.github.io/Transparent-Card-UI-Design-Glassmorphism/Glassmorphism.html",
  },
];

const PortfolioWeb = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <motion.h2
        variants={leftToRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>
      <h4>Web Development</h4>

      <motion.div
        variants={bottomToTop}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container portfolio_container"
      >
        {Data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github{" "}
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default PortfolioWeb;
