import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Assets
import Ecommerce from "../../assets/ecommerce.png";
import Dashboard from "../../assets/dashboard.png";
import Disney from "../../assets/disney.webp";
import GoogleClone from "../../assets/GoogleClone.png";
import Glass from "../../assets/glass.png";
import Login from "../../assets/login.png";
import Notes from "../../assets/notes.png";
import Portfolio from "../../assets/portfolio0.jpg";
import Chat from "../../assets/chat.webp";
import Tesla from "../../assets/tesla.png";
import Flip from "../../assets/flip.png";

// Animations
import { bottomToTop } from "../../animation/project";
import { leftToRight } from "../../animation/experience";

const Data = [
  {
    id: 0,
    image: Ecommerce,
    title: "MERN Ecommerce",
    github: "https://github.com/suresh5189/MERN-Ecommerce",
    demo: "https://ecommerce-z1g8.onrender.com/",
    tech: ["MongoDB", "Express", "React", "Node"],
    features: ["Stripe Checkout", "Admin Dashboard", "JWT Authentication"],
  },
  {
    id: 1,
    image: Disney,
    title: "DisneyPlus Clone",
    github: "https://github.com/suresh5189/DisneyPlus-Clone",
    demo: "https://disneyplus-clone-58fb8.web.app/",
    tech: ["React", "Redux", "Firebase"],
    features: ["Google OAuth", "Styled Components", "Dynamic Content"],
  },
  {
    id: 2,
    image: GoogleClone,
    title: "Google Clone",
    github: "https://github.com/suresh5189/Google-Clone",
    demo: "https://github.com/suresh5189/Google-Clone",
    tech: ["React", "Tailwind", "Context API"],
    features: ["Google Search API", "Pagination", "Responsive UI"],
  },
  {
    id: 3,
    image: Chat,
    title: "Real-time Chat App",
    github: "https://github.com/suresh5189/Simple-Chat-Application",
    demo: "https://chat-application-demo-123.netlify.app/",
    tech: ["Socket.io", "Express", "React"],
    features: ["Instant Messaging", "Group Rooms", "Active User Status"],
  },
  {
    id: 4,
    image: Tesla,
    title: "Tesla Web Clone",
    github: "https://github.com/suresh5189/Tesla-Clone",
    demo: "https://tesla-clone-app-in.netlify.app/",
    tech: ["React", "Redux", "Framer Motion"],
    features: ["Fullpage Scroll", "Custom Slider", "Mobile First Design"],
  },
  {
    id: 5,
    image: Notes,
    title: "Sticky Notes App",
    github: "https://github.com/suresh5189/Sticky-Notes-App",
    demo: "https://suresh5189.github.io/Sticky-Notes-App/",
    tech: ["React", "Local Storage", "CSS Grid"],
    features: ["CRUD Operations", "Color Customization", "Persistence"],
  },
  {
    id: 6,
    image: Dashboard,
    title: "Admin Dashboard",
    github: "https://github.com/suresh5189/Dashboard",
    demo: "https://dashboard780.netlify.app/",
    tech: ["Syncfusion", "React", "Recharts"],
    features: ["Data Visualization", "Kanban Board", "Theme Customization"],
  },
  {
    id: 7,
    image: Flip,
    title: "3D Flip Card UI",
    github: "https://github.com/suresh5189/Transparent-3D-Flip-Card-UI-Design-",
    demo: "https://suresh5189.github.io/Transparent-3D-Flip-Card-UI-Design-/",
    tech: ["HTML5", "CSS3", "Perspective"],
    features: ["3D Transforms", "Glassmorphism", "Hover Animations"],
  },
  {
    id: 8,
    image: Login,
    title: "Modern Login UI",
    github: "https://github.com/suresh5189/Login-and-Sign-Up-Page",
    demo: "https://suresh5189.github.io/Login-and-Sign-Up-Page/",
    tech: ["React", "Formik", "Yup Validation"],
    features: ["Form Validation", "Password Toggle", "Error Handling"],
  },
  {
    id: 9,
    image: Portfolio,
    title: "Portfolio 2.0",
    github: "https://github.com/suresh5189/Portfolio-2.0/tree/master",
    demo: "https://suresh5189.github.io/Portfolio-2.0/",
    tech: ["React", "Three.js", "Framer Motion"],
    features: ["3D Elements", "Smooth Scroll", "Glassmorphism"],
  },
  {
    id: 10,
    image: Glass,
    title: "Glassmorphism Cards",
    github:
      "https://github.com/suresh5189/Transparent-Card-UI-Design-Glassmorphism",
    demo: "https://suresh5189.github.io/Transparent-Card-UI-Design-Glassmorphism/Glassmorphism.html",
    tech: ["CSS3", "HTML", "Vanilla JS"],
    features: ["Frosted Effect", "Box Shadows", "Responsive Flexbox"],
  },
];

const PortfolioWeb = () => {
  return (
    <PortfolioSection id="portfolio">
      <motion.h5 variants={leftToRight} initial="initial" whileInView="animate">
        My Tech Journey
      </motion.h5>
      <SectionTitle
        variants={leftToRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Web Portfolio<span className="dot">.</span>
      </SectionTitle>
      <SubHeading>Click on projects to view live demos</SubHeading>

      <PortfolioContainer
        variants={bottomToTop}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        {Data.map(({ id, image, title, github, demo, tech, features }) => (
          <PortfolioCard key={id} whileHover={{ y: -12 }}>
            <BrowserFrame>
              <div className="browser-header">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="address-bar">
                  suresh-dev.io/{title.toLowerCase().replace(/\s/g, "-")}
                </div>
              </div>
              <div className="image-container">
                <img src={image} alt={title} loading="lazy" />
                <div className="overlay">
                  <div className="feature-list">
                    {features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </div>
                  <div className="cta-group">
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      GitHub
                    </a>
                    <a
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </BrowserFrame>

            <ProjectInfo>
              <h3>{title}</h3>
              <TechGrid>
                {tech?.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </TechGrid>
            </ProjectInfo>
          </PortfolioCard>
        ))}
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default PortfolioWeb;

// --- Styled Components ---

const PortfolioSection = styled.section`
  padding: 8rem 0;
  h5 {
    text-align: center;
    color: var(--color-light);
    letter-spacing: 2px;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: var(--color-primary);
  /* Updated Font Size */
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
`;

const SubHeading = styled.h4`
  text-align: center;
  margin-bottom: 4rem;
  color: var(--color-light);
  font-weight: 300;
  font-style: italic;
  font-size: 0.9rem;
`;

const PortfolioContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
`;

const BrowserFrame = styled.div`
  background: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: 0.4s ease;

  .browser-header {
    background: #252525;
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    .dots {
      display: flex;
      gap: 6px;
      span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff5f56;
      }
      span:nth-child(2) {
        background: #ffbd2e;
      }
      span:nth-child(3) {
        background: #27c93f;
      }
    }
    .address-bar {
      background: #111;
      flex: 1;
      border-radius: 4px;
      font-size: 0.6rem;
      color: var(--color-light);
      padding: 3px 10px;
      opacity: 0.5;
    }
  }

  .image-container {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.6s cubic-bezier(0.2, 1, 0.3, 1);
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(8px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: 0.4s ease;
      padding: 1.5rem;
      .feature-list {
        list-style: none;
        margin-bottom: 1.8rem;
        li {
          color: white;
          font-size: 0.8rem;
          margin-bottom: 6px;
          text-align: center;
          &::before {
            content: "▸";
            color: var(--color-primary);
            margin-right: 8px;
          }
        }
      }
      .cta-group {
        display: flex;
        gap: 0.8rem;
        a {
          padding: 0.6rem 1.1rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
        }
        .btn-primary {
          background: var(--color-primary);
          color: var(--color-bg);
        }
        .btn-secondary {
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
        }
        a:hover {
          background: white;
          color: black;
          border-color: white;
          transform: translateY(-2px);
        }
      }
    }
  }

  &:hover {
    border-color: var(--color-primary);
    .overlay {
      opacity: 1;
    }
    img {
      transform: scale(1.05);
    }
  }
`;

const ProjectInfo = styled.div`
  margin-top: 1.2rem;
  text-align: center;
  h3 {
    color: var(--color-white);
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
  span {
    font-size: 0.6rem;
    color: var(--color-primary);
    background: rgba(77, 181, 255, 0.08);
    padding: 2px 8px;
    border-radius: 3px;
    text-transform: uppercase;
    border: 1px solid rgba(77, 181, 255, 0.15);
  }
`;
