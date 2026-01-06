import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Animations
import { graphic, leftToRight } from "../../animation/experience";

const hackathonData = [
  {
    id: 1,
    title: "SRM TECHNO Hackathon",
    issuer: "SRMIST",
    initials: "SRM",
    year: "2023",
    link: "https://drive.google.com/file/d/1BRPugkQWYmkFe1pe9VUJDYMRpo8HQCps/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "Debunkathon",
    issuer: "IIT Madras",
    initials: "IITM",
    year: "2023",
    link: "https://unstop.com/certificate-preview/e9953a28-e094-4d7c-9eb8-bd81e76420eb",
  },
  {
    id: 3,
    title: "Flipkart GRiD 4.0",
    issuer: "Flipkart",
    initials: "FK",
    year: "2022",
    link: "https://unstop.com/certificate-preview/62f0efd5-c524-4465-a1a4-b4ac64ed1a11",
  },
  {
    id: 4,
    title: "Optum Stratethon: E-Track",
    issuer: "Optum",
    initials: "OPT",
    year: "2022",
    link: "https://unstop.com/certificate-preview/fc4c4d12-49e5-4a36-b915-78b291d58df6",
  },
  {
    id: 5,
    title: "Mesohacks",
    issuer: "Mesohacks",
    initials: "MH",
    year: "2022",
    link: "https://certificate.givemycertificate.com/c/1c7c4fe8-4909-4af7-a491-9ea073de671a",
  },
];

const Hackathon = () => {
  return (
    <HackSection id="hackathons">
      <header className="header_main">
        <motion.h5
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Competitive Programming
        </motion.h5>
        <SectionTitle
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Hackathons<span className="dot">.</span>
        </SectionTitle>
        <SubHeading>
          Solving complex problems through rapid innovation
        </SubHeading>
      </header>

      <HackGrid
        variants={graphic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        {hackathonData.map((item) => (
          <HackCard key={item.id} whileHover={{ y: -8 }}>
            <div className="card_main">
              <BadgeBox>
                <span>{item.initials}</span>
              </BadgeBox>

              <InfoBox>
                <h3>{item.title}</h3>
                <div className="meta">
                  <span className="issuer">{item.issuer}</span>
                  <span className="dot">•</span>
                  <span className="year">{item.year}</span>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="verify_btn"
                >
                  Verify Proof ↗
                </a>
              </InfoBox>
            </div>
            <div className="hover_glow" />
          </HackCard>
        ))}
      </HackGrid>
    </HackSection>
  );
};

export default Hackathon;

// --- Styled Components ---

const HackSection = styled.section`
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
  text-align: center;
  color: var(--color-white);
  /* Matching the massive responsive font size of other sections */
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

const HackGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 90%;
  }
`;

const HackCard = styled(motion.div)`
  background: var(--color-bg-variant);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  .card_main {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    z-index: 2;
  }

  .hover_glow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: var(--color-primary);
    transition: 0.5s ease;
  }

  &:hover {
    border-color: rgba(77, 181, 255, 0.4);
    background: rgba(255, 255, 255, 0.03);
    .hover_glow {
      width: 100%;
    }
  }
`;

const BadgeBox = styled.div`
  width: 75px;
  height: 75px;
  background: #111;
  border: 2px solid var(--color-primary);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  span {
    color: var(--color-primary);
    font-weight: 800;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const InfoBox = styled.div`
  h3 {
    font-size: 1.1rem;
    color: var(--color-white);
    margin-bottom: 0.4rem;
    line-height: 1.3;
    font-weight: 700;
  }

  .meta {
    font-size: 0.85rem;
    color: var(--color-light);
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 8px;

    .issuer {
      color: var(--color-primary);
      font-weight: 600;
    }
    .dot {
      opacity: 0.3;
    }
  }

  .verify_btn {
    font-size: 0.7rem;
    color: var(--color-white);
    background: rgba(255, 255, 255, 0.05);
    padding: 8px 18px;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s;

    &:hover {
      background: var(--color-primary);
      color: var(--color-bg);
      border-color: var(--color-primary);
      transform: translateY(-2px);
    }
  }
`;
