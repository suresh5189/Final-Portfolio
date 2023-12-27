import React from "react";
import "./experience.css";
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
import tailwind from "../../images/tailwind.svg"
import {motion} from 'framer-motion';
import { graphic, leftToRight, linux } from "../../animation/experience";

const Experience = () => {
  return (
    <section id="experience">
      <motion.h5
      variants={linux}
        initial="initial"
        whileInView="animate"
      >What Skills I Have</motion.h5>
      <motion.h2
       variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
      >My Experience</motion.h2>

      <motion.div 
      variants={graphic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      className="container experience_container">
        <div className="experience_frontend">
          <h3>Language</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={c} alt="" />
            </article>
            <article className="experience_details">
              <img src={cplus} alt="" />
            </article>
            <article className="experience_details">
              <img src={python} alt="" />
            </article>
            <article className="experience_details">
              <img src={js} alt="" />
            </article>
            <article className="experience_details">
              <img src={html} alt="" />
            </article>
            <article className="experience_details">
              <img src={css3} alt="" />
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Frameworks</h3>
          <div className="experience_content">
          <article className="experience_details">
              <img src={react} alt="" />
            </article>
            <article className="experience_details">
              <img src={node} alt=""/>
            </article>
            <article className="experience_details">
              <img src={bootstrap} alt="" />
            </article>
            <article className="experience_details">
              <img src={express} alt="" />
            </article>
            <article className="experience_details">
              <img src={jquery} alt="" />
            </article>
            <article className="experience_details">
              <img src={tailwind} alt="" />
            </article>
          </div>
        </div>
        <div className="experience">
          <h3>Others</h3>
          <div className="experience_content">
          <article className="experience_details">
              <img src={firebase} alt="" />
            </article>
            <article className="experience_details">
              <img src={git} alt="" />
            </article>
            <article className="experience_details">
              <img src={github} alt="" />
            </article>
            <article className="experience_details">
              <img src={figma} alt="" />
            </article>
            <article className="experience_details">
              <img src={heroku} alt="" />
            </article>
            <article className="experience_details">
              <img src={netlify} alt="" />
            </article>
            <article className="experience_details">
              <img src={mysql} alt="" />
            </article>
            <article className="experience_details">
              <img src={postman} alt="" />
            </article>
            <article className="experience_details">
              <img src={illustrator} alt="" />
            </article>
            <article className="experience_details">
              <img src={photoshop} alt="" />
            </article>
            <article className="experience_details">
              <img src={blender} alt="" />
            </article>
            <article className="experience_details">
              <img src={mongodb} alt="" />
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
