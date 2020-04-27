import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import {
  Container,
  ProjectTitle,
  ButtonGroup,
  optsMobile,
  //   ProjectHero,
  //   ProjHeroGrid,
  //   ProjIntro,
  opts,
} from "./ProjectStyles";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";

import HeroImg from "../../assets/images/Projects/sansakitchen/hero.png";
import IntroImage from "../../assets/images/Projects/sansakitchen/intro-image.png";
import ShowcaseBG from "../../assets/images/Projects/sansakitchen/showcasebg1.png";
import Native from "../../assets/images/Projects/sansakitchen/native.svg";
import Redux from "../../assets/images/Projects/sansakitchen/redux.svg";
import Styled from "../../assets/images/Projects/sansakitchen/styled.svg";
import Firebase from "../../assets/images/Projects/sansakitchen/firebase.svg";
import Feature1Img from "../../assets/images/Projects/sansakitchen/feature1.png";
import Feature21Img from "../../assets/images/Projects/sansakitchen/feature2-1.png";
import Feature22Img from "../../assets/images/Projects/sansakitchen/feature2-2.png";
import Feature3Img from "../../assets/images/Projects/sansakitchen/feature3.png";
import Feature41Img from "../../assets/images/Projects/sansakitchen/feature4-1.png";
import Feature42Img from "../../assets/images/Projects/sansakitchen/feature4-2.png";
import Feature43Img from "../../assets/images/Projects/sansakitchen/feature4-3.png";

export const SansaKitchen = () => {
  const [animF1, setAnimF1] = useState(false);
  const [animF2, setAnimF2] = useState(false);
  const [animF4, setAnimF4] = useState(false);

  const F1Animation = useSpring({
    opacity: animF1 ? 1 : 0,
    transform: animF1
      ? "translate3d(-100px, 20px, 0) rotateY(0deg)"
      : "translate3d(-300px, 60px, 0) rotateY(180deg)",
    scale: animF1 ? 1 : 1.5,
  });

  const F21Animation = useSpring({
    opacity: animF2 ? 1 : 0,
    transform: animF2
      ? "translate3d(-100px, 220px, 0)"
      : "translate3d(280px, 60px, 0)",
    scale: animF2 ? 1 : 1.5,
  });
  const F22Animation = useSpring({
    opacity: animF2 ? 1 : 0,
    transform: animF2
      ? "translate3d(160px, -220px, 0)"
      : "translate3d(280px, 60px, 0)",
    scale: animF2 ? 1 : 1.5,
  });

  const F42Animation = useSpring({
    opacity: animF4 ? 1 : 0,
    transform: animF4
      ? "translate3d(170px, 60px, 0)"
      : "translate3d(280px, 60px, 0)",
    scale: animF4 ? 1 : 1.5,
  });
  const F43Animation = useSpring({
    opacity: animF4 ? 1 : 0,
    transform: animF4
      ? "translate3d(-240px, 60px, 0)"
      : "translate3d(-340px, 60px, 0)",
    scale: animF4 ? 1 : 1.5,
  });

  return (
    <Container>
      <ProjectHero>
        <ProjectTitle>
          <h3>
            Sansa <br /> Kitchen
          </h3>
          <h6>Mobile App</h6>
        </ProjectTitle>
        <ProjHeroGrid>
          <div className="hero-vid">
            <div className="youtube">
              <YouTube
                videoId="3PXl87pBnRc"
                opts={opts}
                //   onReady={this._onReady}
              />
            </div>
            <div className="youtube-mobile">
              <YouTube
                videoId="3PXl87pBnRc"
                opts={optsMobile}
                //   onReady={this._onReady}
              />
            </div>
            <ButtonGroup>
              <button className="project-button">
                <Link to="/projects">Live</Link>
              </button>
              <button className="contact-button">
                <Link to="/contact">Code</Link>
              </button>
            </ButtonGroup>
          </div>
          <div className="hero-image">
            <img src={HeroImg} alt="Sansa Kitchen" />
          </div>
        </ProjHeroGrid>
      </ProjectHero>
      <ProjectIntro>
        <div className="intro-image">
          <img src={IntroImage} alt="Sansa Kitchen intro" />
        </div>
        <div className="intro-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </ProjectIntro>
      <ScreenShowcase>
        <img className="app-screens" src={ShowcaseBG} alt="Sansa Screens" />
      </ScreenShowcase>
      <Packages>
        <p className="package-title">Packages</p>
        <div className="icon-list">
          <div className="native">
            <img src={Native} alt="Native" />

            <p>React Native</p>
          </div>
          <div className="styled">
            <img src={Styled} alt="styled" />
            <p>Styled Components</p>
          </div>
          <div className="redux">
            <img src={Redux} alt="Redux" />
            <p>Redux</p>
          </div>
          <div className="firebase">
            <img src={Firebase} alt="firebase" />
            <p>Redux</p>
          </div>
        </div>
      </Packages>
      <Waypoint bottomOffset="70%" onEnter={() => setAnimF1(true)} />
      <Feature1>
        <animated.div className="feature1-image" style={F1Animation}>
          <img src={Feature1Img} alt="Feature1" />
        </animated.div>
        <div className="feature1-text">
          <h6>
            Powered by <br />
            React Native
          </h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </Feature1>
      <Waypoint bottomOffset="90%" onEnter={() => setAnimF2(true)} />
      <Feature2>
        <div className="feature2-text">
          <h6>
            Firebase and
            <br />
            Redux
          </h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="feature2-image">
          <animated.div style={F21Animation}>
            <img src={Feature21Img} alt="Feature21" />
          </animated.div>
          <animated.div style={F22Animation}>
            <img src={Feature22Img} alt="Feature22" />
          </animated.div>
        </div>
      </Feature2>
      <Feature3>
        <div className="feature3-image">
          <img src={Feature3Img} alt="Feature3" />
        </div>
        <div className="feature3-text">
          <h6>
            Firebase and
            <br />
            Redux
          </h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </Feature3>
      <Waypoint bottomOffset="50%" onEnter={() => setAnimF4(true)} />
      <Feature4>
        <div className="feature4-text">
          <h6>Profile Screen</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="feature4-image">
          <animated.div style={F42Animation}>
            <img src={Feature42Img} alt="feature42" className="feature42" />
          </animated.div>
          <img src={Feature41Img} alt="feature41" className="feature41" />
          <animated.div style={F43Animation}>
            <img src={Feature43Img} alt="feature43" className="feature43" />
          </animated.div>
        </div>
      </Feature4>
    </Container>
  );
};

export const ProjectHero = styled.div`
  background: #bfe1f4;
  width: 100vw;
  padding: 15vh 0;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    padding: 5vh 0 2vh 0 ;
  `}
`;

export const ProjHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  .hero-vid,
  .hero-image {
    justify-self: center;
  }
  .hero-vid {
    justify-self: flex-end;
    align-self: flex-end;

    .youtube {
      border-radius: 10px;
      overflow: hidden;
      background: #fff;
      height: 390px;
      width: 680px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .youtube-mobile {
      display: none;
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: 1fr;
    .hero-image {
      margin: 3vh 10vw;
      padding-left:5vw;
      img{
        width: 90%;
        margin: 1vh 0vw;
       }     
    }
    .hero-vid{
      justify-self: center;
    align-self: center;
      .youtube{
        display: none;
      }
      .youtube-mobile{
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        height: 270px;
        width:400px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  `}
`;

export const ProjectIntro = styled.div`
  /* height: 80vh; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  .intro-text {
    width: 90%;
    p {
      font-family: Monda;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 52px;
      text-align: center;
      letter-spacing: 0.005em;
      color: #000000;
      padding: 2vh 0;
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: 1fr;
    margin: 2vh 0;
    .intro-image img{
      width:100%;
    }
    .intro-text {
    width: 90%;
    p {
      font-size: 24px;
      line-height: 42px;
    }
  }
  `}
`;

export const ScreenShowcase = styled.div`
  width: 100vw;
  /* height: 120vh; */
  background: url("../../assets/images/Projects/sansakitchen/showcasebg.png")
    cover;
  position: relative;
  .app-screens {
    z-index: 5;
    width: 100%;
  }
`;

export const Packages = styled.div`
  padding: 0 00 10vh 0;

  .package-title {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 55px;
    letter-spacing: 0.82em;
    color: #5c5c5c;
    text-align: center;
    padding: 0 0 10vh 0;
  }
  .icon-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    p {
      font-size: 24px;
      font-family: "Marvel";
      text-align: center;
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .icon-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5vh;    
  }
  `}
`;

export const Feature1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #68ff5b;
  padding: 5vh 0;
  justify-items: center;
  align-items: center;
  h6 {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 65px;
    text-align: center;
    letter-spacing: 0.155em;
    color: #1b1b1d;
    padding: 1.5vh 0;
  }
  p {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
    padding: 1.5vh 5vw;
  }
  img {
    padding: 2vh 0;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    img {
    padding: 1vh 0;
    width:90%;
  }

  p {
     font-size: 20px;
    line-height: 30px;   
    padding: 1.5vh 0vw 1.5vh 4vw;
    width:90%;   
  }
  .feature1-text{
    padding:0
  }
  .feature1-image{
    transform: translate3d(100px,0,0);
  }

  `}
`;
export const Feature2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  h6 {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 65px;
    text-align: center;
    letter-spacing: 0.155em;
    color: #1b1b1d;
    padding: 1.5vh 0;
  }
  p {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
    padding: 1.5vh 5vw;
  }
  img {
    padding: 2vh 0;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    
  `}
`;
export const Feature3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #d2ef67;
  /* padding: 5vh 0; */
  justify-items: center;
  align-items: center;
  h6 {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 65px;
    text-align: center;
    letter-spacing: 0.155em;
    color: #1b1b1d;
    padding: 1.5vh 0;
  }
  p {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
    padding: 5vh 5vw;
  }
  img {
    /* padding: 2vh 0; */
  }
  .feature3-image {
    align-self: end;
    /* justify-self: flex-end; */
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    .feature3-image img{
    width:100%;
    /* justify-self: flex-end; */
  }
  `}
`;

export const Feature4 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 5vh 0;
  justify-items: center;
  align-items: center;
  h6 {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 65px;
    text-align: center;
    letter-spacing: 0.155em;
    color: #1b1b1d;
    padding: 1.5vh 0;
  }
  p {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
    padding: 1.5vh 5vw;
  }
  .feature4-image {
    display: flex;
    .feature42 {
      height: 80%;
    }
    .feature41 {
      z-index: 5;
    }
    .feature43 {
      height: 80%;
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:90%;
    margin: 0 auto;
    .feature4-image{
      .feature41{
        padding-left: 15vw;
      }
      .feature42, .feature43{
        display:none;
      }
    }
  `}
`;
