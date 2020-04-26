import React from "react";
import NavLogo from "../../../assets/images/navlogo.svg";
import { NavLink } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import media from "styled-media-query";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = React.useState(false);

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

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
 display:none;
  `}
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
`;
