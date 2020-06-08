import React, { useState } from "react";
import "./HomeComponents.scss";
import styled from "styled-components";
import media from "styled-media-query";

// Logos

import Laptop from "../../assets/images/experience/laptop.png";
import Notepad from "../../assets/images/experience/notepad.png";
import Coffee from "../../assets/images/experience/coffee.png";
import Headphones from "../../assets/images/experience/headphone.png";
import { ExpCards } from "./ExpCards";
import ScrollAnimation from "react-animate-on-scroll";

const ExperienceContainer = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

  const handleOne = () => {
    setShowOne(!showOne);
  };
  const handleTwo = () => {
    setShowTwo(!showTwo);
  };
  const handleThree = () => {
    setShowThree(!showThree);
  };

  return (
    <Container>
      <h1>My Experience</h1>

      <div className="exp-col">
        <div className="left-col">
          <ExpCards
            timeline="2019-present"
            title="Freelance Web Developer"
            company=""
            detail1=" Designed and built web apps, mobile apps and websites from scratch for a start-up and small business"
            detail2="
          Consult with clients to meet the design and user interface requirement and proposing the best budget to maintain and scale the projects for the future"
            detail3=" Ensure the code meets industry standards, is valid and porperly structured along with being compatible with browsers, devisec and operating systems"
          />
          <ExpCards
            timeline="2016-2018"
            title="Frontend Web Developer"
            company="Technisoft Corp"
            detail1="Developed dynamic and interactive website that ensured high traffic, page views and better user experience for the clients."
            detail2="Helped migration to MongoDB and implement redux to current projects. Responsibile for maintaining, expanding, and scaling the site"
            detail3="Worked with User Experience team to optimize data flow using Redux and Cooperate with web designers to match visual design intent"
            detail4="Fixed bugs from existing websites and significantly improved functionality and speed"
            // detail5="Worked with User Experience team to optimize data flow using Redux"
          />

          <ExpCards
            timeline="2012-2016"
            title="Team Lead - Business Process Improvement"
            company="Groupon"
            detail1=" Lead a team of 6 customer service reps and quality analyst to derive best practices and methods to improve performance like productivity, quality and CSAT"
            detail2="
            Displayed problem solving skills through escalation calls and resolving customer issues effectively with beign beneficial for both customer and the organisation"
            detail3=" Document new ideas and conduct test on reading the results of such ideas and presting to the stakeholders"
          />
        </div>
        <div className="right-col">
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={100}
            duration={0.5}
            animateOnce="false"
          >
            <div className="laptop ">
              <img src={Laptop} alt="laptop" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={300}
            duration={0.5}
            animateOnce="false"
          >
            <div className="notepad">
              <img src={Notepad} alt="laptop" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={500}
            duration={0.5}
            animateOnce="false"
          >
            <div className="coffee">
              <img src={Coffee} alt="coffee" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInBottomRight"
            delay={600}
            duration={0.5}
            animateOnce="false"
          >
            <div className="headphones">
              <img src={Headphones} alt="Headphones" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
};

export default ExperienceContainer;

const ExpCard = styled.div`
  width: 45vw;
  height: 25vh;
  background-color: #fff;
  margin: 5vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.43);
  transition: all 0.6s ease-in-out;
  overflow: hidden;
  position: relative;
  h4 {
    color: #707070;
  }
  p {
    color: #707070;
  }
  button {
    ${({ showOne }) =>
      showOne
        ? `
        transform: rotate(90deg);
    `
        : `transform: rotate(0deg);`};
  }

  &:hover {
    background-color: #3845b9;
    color: #fff;
    h4,
    p {
      color: #e4e4e4;
    }
    .arrow path {
      fill: #fff;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3845b9;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover::before {
    height: 180%;
  }
`;

const Container = styled.div`
  width: 100vw;
  background-color: #f8f2ff;
  overflow: hidden;
  h1 {
    font-size: 42px;
    text-align: center;
    font-weight: normal;
    padding-top: 2rem;
  }

  button {
    background: none;
    border: none;
  }
  .exp-col {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
  .left-col {
    align-self: center;
    justify-self: center;
  }

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .exp-col {
    display: grid;
    grid-template-columns: 1fr;
    
  }
  .left-col {
    width:100%;
  }
  `}
`;

const ExpContainer = styled.div`
  overflow: hidden;
`;

const ExpDetail = styled.div`
  position: relative;
  transition: 1s;
  background-color: #fff;
  width: 45vw;
  height: 30vh;
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.43);
  p {
    font-size: 16px;
    width: 95%;
    text-align: left;
    position: relative;
    padding-left: 80px;
    padding-top: 2vh;
  }
  p::before {
    position: absolute;
    left: 60px;
    top: 30px;
    content: "";
    width: 5px;
    height: 5px;
    background-color: black;
  }
  ${({ showOne }) =>
    showOne
      ? `transform: translateY(-6vh);
    opacity: 1;
    display:block;    
`
      : `
transform: translateY(-10vh);
    opacity: 0;
    display:none;
`}
  ${({ showTwo }) =>
    showTwo
      ? `transform: translateY(-6vh);
    opacity: 1;
    display:block;    
`
      : `
transform: translateY(-10vh);
    opacity: 0;
    display:none;
`}
  ${({ showThree }) =>
    showThree
      ? `transform: translateY(-6vh);
    opacity: 1;
    display:block;    
`
      : `
transform: translateY(-10vh);
    opacity: 0;
    display:none;
`}

`;
