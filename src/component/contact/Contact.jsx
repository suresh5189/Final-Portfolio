import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { MdOutlineEmail, MdNorthEast, MdSend } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Animations
import { bottomToTop } from "../../animation/project";
import { leftToRight } from "../../animation/experience";

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(77, 181, 255, 0.4); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(77, 181, 255, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(77, 181, 255, 0); }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5npk3hq",
        "template_cbf0y8k",
        form.current,
        "z-VG88Cr5bYfox58o"
      )
      .then(() => alert("Message sent successfully! ✨"));
    e.target.reset();
  };

  return (
    <ContactSection id="contact">
      <header>
        <motion.span
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
        >
          What's Next?
        </motion.span>
        <SectionTitle
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>
      </header>

      <ContactContainer
        variants={bottomToTop}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        {/* LEFT SIDE: INFO & LINKS */}
        <InfoColumn>
          <div className="status_bar">
            <div className="pulse_dot" />
            <span>Available for new projects</span>
          </div>

          <div className="description">
            <h2>
              Let’s build something{" "}
              <span className="highlight">extraordinary</span> together.
            </h2>
            <p>
              I’m currently specializing in Full-stack development. Whether you
              have a specific project in mind or just want to brainstorm, my
              inbox is always open.
            </p>
          </div>

          <ContactLinks>
            {[
              {
                icon: <MdOutlineEmail />,
                title: "Email",
                val: "sureshsuthar2499@gmail.com",
                link: "mailto:sureshsuthar2499@gmail.com",
                color: "#4db5ff",
              },
              {
                icon: <AiOutlineWhatsApp />,
                title: "WhatsApp",
                val: "+91 78019 72499",
                link: "https://api.whatsapp.com/send?phone=917801972499",
                color: "#25D366",
              },
              {
                icon: <AiOutlineInstagram />,
                title: "Instagram",
                val: "@suresh_242000",
                link: "https://www.instagram.com/suresh_242000/",
                color: "#E1306C",
              },
            ].map((item, i) => (
              <LinkCard
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                $accentColor={item.color}
              >
                <div className="link_icon">{item.icon}</div>
                <div className="link_text">
                  <small>{item.title}</small>
                  <span>{item.val}</span>
                </div>
                <div className="arrow_box">
                  <MdNorthEast />
                </div>
              </LinkCard>
            ))}
          </ContactLinks>
        </InfoColumn>

        {/* RIGHT SIDE: UPGRADED MODERN FORM */}
        <FormCard>
          <div className="form_header">
            <h3>Send Message</h3>
            <p>Fill out the form below to reach me directly.</p>
          </div>

          <Form ref={form} onSubmit={sendEmail}>
            <div className="input_row">
              <div className="field_group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="field_group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div className="field_group">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Hi Suresh, I'd like to talk about..."
                required
              />
            </div>

            <SubmitBtn
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <MdSend className="send_icon" />
            </SubmitBtn>
          </Form>
        </FormCard>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;

// --- Styled Components ---

const ContactSection = styled.section`
  padding: 10rem 0;
  header {
    text-align: center;
    margin-bottom: 5rem;
    span {
      color: var(--color-primary);
      font-family: var(--font-mono);
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--color-white);
  font-weight: 800;
  letter-spacing: -2px;
`;

const ContactContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 45% 50%;
  gap: 5%;
  align-items: stretch;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
`;

const InfoColumn = styled.div`
  .status_bar {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(77, 181, 255, 0.05);
    width: fit-content;
    padding: 8px 16px;
    border-radius: 100px;
    border: 1px solid rgba(77, 181, 255, 0.1);
    margin-bottom: 2rem;
    span {
      font-size: 0.75rem;
      color: var(--color-primary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .pulse_dot {
    width: 8px;
    height: 8px;
    background: var(--color-primary);
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }

  .description {
    margin-bottom: 3.5rem;
    h2 {
      font-size: 2.5rem;
      color: #fff;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      letter-spacing: -1px;
    }
    .highlight {
      color: var(--color-primary);
    }
    p {
      color: var(--color-light);
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkCard = styled(motion.a)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .link_icon {
    font-size: 1.5rem;
    color: ${(props) => props.$accentColor || "var(--color-primary)"};
    background: rgba(255, 255, 255, 0.05);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  .link_text {
    display: flex;
    flex-direction: column;
    small {
      color: #666;
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    span {
      color: #eee;
      font-weight: 500;
      font-size: 0.95rem;
    }
  }

  .arrow_box {
    margin-left: auto;
    color: #444;
    font-size: 1.1rem;
    transition: 0.3s;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${(props) => props.$accentColor}44;
    .arrow_box {
      color: #fff;
      transform: translate(3px, -3px);
    }
  }
`;

const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle at top right,
      rgba(77, 181, 255, 0.1),
      transparent 70%
    );
  }

  .form_header {
    margin-bottom: 2.5rem;
    h3 {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    p {
      color: #666;
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .input_row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .field_group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #888;
      letter-spacing: 1px;
      margin-left: 4px;
    }

    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 1rem 1.2rem;
      color: #fff;
      font-family: inherit;
      transition: all 0.3s ease;

      &::placeholder {
        color: #444;
      }

      &:focus {
        outline: none;
        border-color: var(--color-primary);
        background: rgba(255, 255, 255, 0.02);
        box-shadow: 0 0 25px rgba(77, 181, 255, 0.08);
      }
    }
  }
`;

const SubmitBtn = styled(motion.button)`
  background: var(--color-primary);
  color: var(--color-bg);
  border: none;
  padding: 1.1rem 2rem;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  margin-top: 1rem;
  box-shadow: 0 10px 30px rgba(77, 181, 255, 0.2);
  transition: all 0.3s ease;

  .send_icon {
    font-size: 1.2rem;
    transition: 0.3s;
  }

  &:hover {
    background: #fff;
    color: #000;
    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2);
    .send_icon {
      transform: translate(5px, -5px);
    }
  }
`;
