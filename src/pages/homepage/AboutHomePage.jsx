import React from "react";
import styled from "styled-components";

import LogoContainer from "../../components/home/LogoContainer";

export default function AboutHomePage() {
  const Container = styled.div`
    width: 100%;
    background-color: #f8f2ff;
  `;
  const AboutContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 10vh;
    height: 55vh;
    text-align: center;
    h2 {
      font-size: 42px;
      color: #282828;
      padding: 2rem 0 0.4rem 0;
    }
    h4 {
      font-size: 24px;
      color: #707070;
      padding: 0 0 2rem 0;
    }
    p {
      font-size: 24px;
      color: #707070;
      padding: 0 0 2rem 0;
      max-width: 942px;
      margin: 0 auto;
    }
  `;

  return (
    <Container>
      <AboutContainer>
        <h2>About</h2>
        <h4>Full Stack Web Developer</h4>
        <p>
          Hi! My name is Lakshmi Ganth Mohan. I’m a full stack developer with 3
          years of experience. I expertise in web and mobile apps using
          Javascript frameworks. I keep myself updated with the latest technolgy
          in the industry and produce clean code.
        </p>
      </AboutContainer>
      <LogoContainer />
    </Container>
  );
}
