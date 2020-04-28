import React, { useEffect } from "react";
import NavLogo from "../../../assets/images/navlogo.svg";
import MobileLogo from "../../../assets/images/mobilesvg.svg";
import CloseLogo from "../../../assets/images/close.svg";
import { NavLink } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import media from "styled-media-query";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const mobilemenuAnimation = useSpring({
    from: {
      transform: `translate3d(0,-100vh,0) scale(1)`,
      opacity: `0.8`,
    },
    transform: `translate3d(0,0,0) scale(1)`,
    opacity: `1`,
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <Container hasScrolled={hasScrolled}>
      <Grids>
        <NavLink to="/">
          <div className="nav-logo">
            <img src={NavLogo} alt="Nav logo" />
          </div>
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Grids>
      <MobileNavbar>
        <div className="mobile-nav-logo">
          <NavLink to="/">
            <img src={NavLogo} alt="Nav logo" />
          </NavLink>
        </div>
        <button className="menuButton" onClick={handleMobileMenu}>
          {hasScrolled ? (
            <svg
              width="60"
              height="38"
              viewBox="0 0 60 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="7.89474" rx="3.94737" fill="#F1F1F1" />
              <rect
                y="15"
                width="60"
                height="7.89474"
                rx="3.94737"
                fill="#F1F1F1"
              />
              <rect
                y="30"
                width="60"
                height="7.89474"
                rx="3.94737"
                fill="#F1F1F1"
              />
            </svg>
          ) : (
            <svg
              width="60"
              height="38"
              viewBox="0 0 60 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="7.89474" rx="3.94737" fill="#3F3F3F" />
              <rect
                y="15"
                width="60"
                height="7.89474"
                rx="3.94737"
                fill="#3F3F3F"
              />
              <rect
                y="30"
                width="60"
                height="7.89474"
                rx="3.94737"
                fill="#3F3F3F"
              />
            </svg>
          )}
        </button>
        {mobileMenu ? (
          <MobileMenu style={mobilemenuAnimation}>
            <div className="closemenu">
              <button onClick={handleMobileMenu}>
                <img src={CloseLogo} alt="hamburger" />
              </button>
            </div>

            <NavLink to="/about">
              <buttton onClick={handleMobileMenu}>About</buttton>
            </NavLink>
            <NavLink to="/projects">
              <buttton onClick={handleMobileMenu}>Projects</buttton>
            </NavLink>
            <NavLink to="/blog">
              <buttton onClick={handleMobileMenu}>Blog</buttton>
            </NavLink>
            <NavLink to="/contact">
              <buttton onClick={handleMobileMenu}>Contact</buttton>
            </NavLink>
          </MobileMenu>
        ) : null}
      </MobileNavbar>
    </Container>
  );
};

export default NavBar;

const Container = styled(animated.div)`
  height: 10vh;
  width: 100%;
  position: fixed;

  margin: 0 auto;
  ${({ hasScrolled }) =>
    hasScrolled &&
    `background-color: rgba(0,0,0,.3);
  
`}
  z-index: 50;
  font-size: 1.6rem;

  a {
    color: black;
    font-family: "Marvel", sans-serif;
    ${({ hasScrolled }) =>
      hasScrolled &&
      `color: white;      
`}
  }

  .nav-logo {
    width: 70px;
    height: 70px;
    padding-top: 10px;
  }
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  align-items: center;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:none;
  `}
`;

const MobileNavbar = styled.div`
  display: none;
  button {
    background: none;
    border: none;
    outline: none;
  }
  button:active,
  button:focus {
    outline: none;
    outline: 0;
  }
  /* .mobile-nav-logo {
    position: absolute;
    top: 0;
    left: 0;
  } */
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;    
    position:relative;
    width:100vw;
    .menuButton{
       justify-content: flex-end;      
        position: absolute;
        top: 25px;
        right: 20px;      
       }
    .mobile-nav-logo{
      display:flex;
      position: relative;
      top:10px;
      left:30px;
      img{
        width:80%;
        /* height:80%; */
      }
    }
    
   
  `}
`;

const MobileMenu = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background: gray;
  top: 0;
  left: 0;
  .closemenu {
    position: absolute;
    width: 50px;
    top: 25px;
    right: 30px;
    img {
      width: 50px;
    }
  }
`;
