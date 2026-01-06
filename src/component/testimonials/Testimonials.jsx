import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Animations
import { graphic, leftToRight } from "../../animation/experience";

import OracleLogo from "../../images/Oracle_logo.svg";
import AWSLogo from "../../images/AWS.svg";
import CourseraLogo from "../../images/Coursera.svg";
import UdemyLogo from "../../images/Udemy_.svg";
import HackerRankLogo from "../../assets/HackerRank.png";
import TriplebyteLogo from "../../assets/triplebyte.png";
import DevtownLogo from "../../assets/Devtown.png";

const certificatesData = [
  {
    id: 1,
    title: "Oracle Academy Database Foundations",
    issuer: "Oracle Academy",
    logo: OracleLogo,
    year: "2023",
    link: "https://drive.google.com/file/d/1BSXR099_4oy_LeQnlh0Qf6yzdekT7d45/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "AWS Academy Data Analytics",
    issuer: "AWS Academy",
    logo: AWSLogo,
    year: "2023",
    link: "https://www.credly.com/badges/79d5cfe1-2c9b-4889-bec1-51d21ae32268/print",
  },
  {
    id: 3,
    title: "React Native Specialization",
    issuer: "Coursera",
    logo: CourseraLogo,
    year: "2023",
    link: "https://drive.google.com/file/d/1B0VsF0JvHWwug223xakB8qQmbxRYV0--/view?usp=drivesdk",
  },
  {
    id: 4,
    title: "Front-End Web Development with React",
    issuer: "Coursera",
    logo: CourseraLogo,
    year: "2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/PXKC3Y5KSPER",
  },
  {
    id: 5,
    title: "Server-side Development (Node/Mongo)",
    issuer: "Coursera",
    logo: CourseraLogo,
    year: "2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/ZVR6G32ZESZ9",
  },
  {
    id: 6,
    title: "Web Development Essentials Bootcamp",
    issuer: "Devtown",
    logo: DevtownLogo,
    year: "2022",
    link: "https://drive.google.com/file/d/1KFg_G9mO2gnh-0FYETEB7WgQZZkU9es9/view",
  },
  {
    id: 7,
    title: "Triplebyte Certified Engineer",
    issuer: "Triplebyte",
    logo: TriplebyteLogo,
    year: "2022",
    link: "https://triplebyte.com/tb/suresh-suthar-c8jxtt9/certificate",
  },
  {
    id: 8,
    title: "Java for Android",
    issuer: "Coursera",
    logo: CourseraLogo,
    year: "2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/3UN993TSG8BY",
  },
  {
    id: 9,
    title: "Android App Components",
    issuer: "Coursera",
    logo: CourseraLogo,
    year: "2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/HTDJNVSZR3NJ",
  },
  {
    id: 10,
    title: "Computational Logic",
    issuer: "Udemy",
    logo: UdemyLogo,
    year: "2022",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-cae2911c-e860-4252-b3c2-3ba6e73dfc62.jpg",
  },
  {
    id: 11,
    title: "React (Basic) Skills Certification",
    issuer: "Hackerrank",
    logo: HackerRankLogo,
    year: "2022",
    link: "https://www.hackerrank.com/certificates/iframe/cf2a7bdbd0e3",
  },
];

const Certifications = () => {
  return (
    <CertSection id="certifications">
      <header className="header_main">
        <motion.h5
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Educational Milestones
        </motion.h5>
        <SectionTitle
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Certifications<span className="dot">.</span>
        </SectionTitle>
        <SubHeading>
          Verified expertise across full-stack and mobile technologies
        </SubHeading>
      </header>

      <CertGrid
        variants={graphic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        {certificatesData.map((cert) => (
          <CertCard key={cert.id} whileHover={{ y: -10 }}>
            <div className="card_main">
              <LogoBox>
                <img src={cert.logo} alt={cert.issuer} />
              </LogoBox>

              <InfoBox>
                <h3>{cert.title}</h3>
                <div className="meta">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="dot">•</span>
                  <span className="year">{cert.year}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="verify_btn"
                >
                  Verify Credential ↗
                </a>
              </InfoBox>
            </div>
            <div className="hover_glow" />
          </CertCard>
        ))}
      </CertGrid>
    </CertSection>
  );
};

export default Certifications;

// --- Styled Components ---

const CertSection = styled.section`
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

const CertGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 90%;
  }
`;

const CertCard = styled(motion.div)`
  background: var(--color-bg-variant);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .card_main {
    display: flex;
    align-items: center;
    gap: 2rem;
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
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    .hover_glow {
      width: 100%;
    }
  }
`;

const LogoBox = styled.div`
  width: 85px;
  height: 85px;
  background: #fff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  flex-shrink: 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const InfoBox = styled.div`
  h3 {
    font-size: 1.25rem;
    color: var(--color-white);
    margin-bottom: 0.5rem;
    line-height: 1.3;
    font-weight: 700;
  }

  .meta {
    font-size: 0.9rem;
    color: var(--color-light);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;

    .issuer {
      color: var(--color-primary);
      font-weight: 600;
    }
    .dot {
      opacity: 0.3;
    }
  }

  .verify_btn {
    font-size: 0.75rem;
    color: var(--color-white);
    background: rgba(255, 255, 255, 0.03);
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 800;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s;

    &:hover {
      background: var(--color-primary);
      color: var(--color-bg);
      border-color: var(--color-primary);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(77, 181, 255, 0.3);
    }
  }
`;
