import React from "react";
import "./portfolio.css";
import CoffeeShopApp from '../../assets/CoffeeShopApp.jpg';
import TeslaApp from "../../assets/TeslaApp.jpg";
import PvrApp from "../../assets/PvrApp.jpg";
import NikeApp from "../../assets/NikeApp.jpg";
import InstagramApp from "../../assets/Feed.png";
import { motion } from "framer-motion";
import { bottomToTop } from "../../animation/project";
import { leftToRight } from "../../animation/experience";

const Data = [
  {
    id: 0,
    image: CoffeeShopApp,
    title: "Coffee Shop App",
    github: "https://github.com/suresh5189/Coffee-Shop-App",
  },
  {
    id: 1,
    image: PvrApp,
    title: "PVR Movie Booking App",
    github: "https://github.com/suresh5189/PVR-Movie-Booking-App",
  },
  {
    id: 2,
    image: NikeApp,
    title: "Nike App",
    github: "https://github.com/suresh5189/Nike-App",
  },
  {
    id: 3,
    image: TeslaApp,
    title: "Tesla Clone App",
    github: "https://github.com/suresh5189/Tesla-Clone-Android-App",
  },
  {
    id: 4,
    image: InstagramApp,
    title: "Instagram Clone App",
    github: "https://github.com/suresh5189/instagram-clone",
  },
];

const PortfolioApp = () => {
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
      <h4>App Development</h4>

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
              </div>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default PortfolioApp;
