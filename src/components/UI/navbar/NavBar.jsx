import React from "react";
import NavLogo from "../../../assets/images/navlogo.svg";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavBar = () => {
  const Container = styled.div`
    height: 10vh;
    position: fixed;
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 50;
    font-size: 1.6rem;

    a {
      color: black;
      font-family: "Marvel", sans-serif;
    }

    .nav-logo {
      width: 55px;
      height: 55px;
    }
  `;
  return (
    <Container>
      <NavLink to="/">
        <div className="nav-logo">
          <img src={NavLogo} alt="Nav logo" />
        </div>
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </Container>
  );
};

export default NavBar;
