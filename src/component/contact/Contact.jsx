import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { bottomToTop } from "../../animation/project";
import { leftToRight } from "../../animation/experience";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5npk3hq",
      "template_cbf0y8k",
      form.current,
      "z-VG88Cr5bYfox58o"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <motion.h2
        variants={leftToRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        variants={bottomToTop}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container contact_container"
      >
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>ss0305@srmist.edu.in</h5>
            <a href="mailto:sureshsuthar2499@gmail.com">Send A Message</a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>Suresh Suthar</h5>
            <a
              href="https://www.instagram.com/suresh_242000/"
              target="_blank"
              rel="noreferrer"
            >
              Visit
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+917801972499</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+917801972499"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
