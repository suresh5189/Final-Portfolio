import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import PortfolioWeb from "./component/portfolio/PortfolioWeb";
import PortfolioApp from "./component/portfolio/PortfolioApp";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Hackathon from "./component/testimonials/Hackathon";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <PortfolioWeb />
      <PortfolioApp />
      <Testimonials />
      <Hackathon />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
