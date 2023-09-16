import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/my.png';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Suresh Suthar</h1>
        <h5 className="text-light">Fullstack Developer , App Developer and Graphic Designer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
