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
            detail1=" There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable"
            detail2="
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text."
            detail3=" The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc."
          />
          <ExpCards
            timeline="2016-2018"
            title="Frontend Web Developer"
            company="Technisoft Corp"
            detail1=" There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable"
            detail2="
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text."
            detail3=" The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc."
          />

          <ExpCards
            timeline="2012-2016"
            title="Team Lead - Customer Support"
            company="Groupon"
            detail1=" There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable"
            detail2="
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text."
            detail3=" The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc."
          />
        </div>
        <div className="right-col">
          <div className="laptop ">
            <img src={Laptop} alt="laptop" />
          </div>
          <div className="notepad">
            <img src={Notepad} alt="laptop" />
          </div>
          <div className="coffee">
            <img src={Coffee} alt="coffee" />
          </div>
          <div className="headphones">
            <img src={Headphones} alt="Headphones" />
          </div>
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
  /* box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.43); */

  overflow: hidden;
  /* transition: 1s; */
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
