import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineUser, AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  // Optional: Update active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "portfolio", "testimonials", "contact"];
      const scrollY = window.pageYOffset;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 150;
          const height = section.offsetHeight;
          if (scrollY >= offset && scrollY < offset + height) {
            setActiveNav(`#${id}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "#home", icon: <AiOutlineHome />, label: "Home" },
    { id: "#about", icon: <AiOutlineUser />, label: "About" },
    { id: "#experience", icon: <BiBook />, label: "Experience" },
    { id: "#portfolio", icon: <RiServiceLine />, label: "Portfolio" },
    { id: "#testimonials", icon: <AiOutlineSafetyCertificate />, label: "Certificates" },
    { id: "#contact", icon: <BiMessageSquareDetail />, label: "Contact" },
  ];

  return (
    <NavContainer>
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          href={link.id}
          onClick={() => setActiveNav(link.id)}
          className={activeNav === link.id ? "active" : ""}
          data-label={link.label}
        >
          {link.icon}
        </NavLink>
      ))}
    </NavContainer>
  );
};

export default Nav;

// --- Styled Components ---

const NavContainer = styled.nav`
  background: rgba(31, 31, 56, 0.4); /* Matches your --color-bg with transparency */
  width: max-content;
  padding: 0.5rem 1.2rem;
  z-index: 10;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 4rem;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
`;

const NavLink = styled.a`
  background: transparent;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;

  /* Tooltip logic */
  &::before {
    content: attr(data-label);
    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: var(--color-bg-variant);
    color: var(--color-white);
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border: 1px solid var(--color-primary-variant);
  }

  &:hover {
    color: var(--color-primary);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    
    &::before {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  &.active {
    background: var(--color-primary);
    color: var(--color-bg);
    box-shadow: 0 0 15px var(--color-primary-variant);
  }

  svg {
    display: block;
  }
`;