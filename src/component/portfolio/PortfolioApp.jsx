import React from 'react';
import './portfolio.css';
import TeslaApp from "../../assets/TeslaApp.jpg";
import PvrApp from "../../assets/PvrApp.jpg";
import NikeApp from "../../assets/NikeApp.jpg";


  const Data = [
    {
      id:0,
      image:PvrApp,
      title: 'PVR Movie Booking App',
      github:'https://github.com/suresh5189/PVR-Movie-Booking-App'
    },
    {
      id:1,
      image:NikeApp,
      title: 'Nike App',
      github:'https://github.com/suresh5189/Nike-App'
    },
    {
      id:2,
      image:TeslaApp,
      title: 'Tesla Clone App',
      github:'https://github.com/suresh5189/Tesla-Clone-Android-App'
    }
  ]

const PortfolioApp = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h4>App Development</h4>

      <div className="container portfolio_container">
        {
          Data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target="_blank" rel="noreferrer">Github </a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
};

export default PortfolioApp;
