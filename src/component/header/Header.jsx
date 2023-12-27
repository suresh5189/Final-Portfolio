import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/my.png";
import HeaderSocial from "./HeaderSocials";
import { graphic, leftToRight, linux } from "../../animation/experience";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <motion.h5 variants={linux} initial="initial" whileInView="animate">
          Hello I'm
        </motion.h5>
        <motion.h1
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Suresh Suthar
        </motion.h1>
        <motion.h5
          variants={linux}
          initial="initial"
          whileInView="animate"
          className="text-light"
        >
          Fullstack Developer , App Developer and Graphic Designer
        </motion.h5>
        <CTA />
        <HeaderSocial />
        <motion.div
          variants={graphic}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="me"
        >
          <img src={ME} alt="me" />
        </motion.div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
