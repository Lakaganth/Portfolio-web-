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

import HeroImg from "../../assets/images/Projects/petsgram/hero.png";
import IntroImage from "../../assets/images/Projects/petsgram/intro-image.png";
import ShowcaseScreeen from "../../assets/images/Projects/petsgram/showcase-screen.png";
import Firebase from "../../assets/images/Projects/sansakitchen/firebase.svg";
import Flutter from "../../assets/images/Projects/petsgram/flutter.png";

import Feature1Img from "../../assets/images/Projects/petsgram/feature1.png";
import Feature2Img from "../../assets/images/Projects/petsgram/feature2.png";
import Feature3Img from "../../assets/images/Projects/petsgram/feature3.png";
import Feature41Img from "../../assets/images/Projects/sansakitchen/feature4-1.png";
import Feature42Img from "../../assets/images/Projects/sansakitchen/feature4-2.png";
import Feature43Img from "../../assets/images/Projects/sansakitchen/feature4-3.png";
import Footer from "./../../components/UI/footer/Footer";

export const Petsgram = () => {
  const [animF1, setAnimF1] = useState(false);
  const [animF2, setAnimF2] = useState(false);
  const [animF4, setAnimF4] = useState(false);

  const F1Animation = useSpring({
    opacity: animF1 ? 1 : 0,
    transform: animF1
      ? "translate3d(-0px,px, 0) "
      : "translate3d(-300px, px, 0) ",
    scale: animF1 ? 1 : 1.5,
  });

  const F21Animation = useSpring({
    opacity: animF2 ? 1 : 0,
    transform: animF2
      ? "translate3d(0px, 0px, 0)"
      : "translate3d(0px, 60px, 0)",
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
          <h3>Petsgram</h3>
          <h6>Mobile App</h6>
        </ProjectTitle>
        <ProjHeroGrid>
          <div className="hero-vid">
            <div className="youtube">
              <YouTube
                videoId="IF8hvSjnp6E"
                opts={opts}
                //   onReady={this._onReady}
              />
            </div>
            <div className="youtube-mobile">
              <YouTube
                videoId="IF8hvSjnp6E"
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
            <img src={HeroImg} alt="Sam" />
          </div>
        </ProjHeroGrid>
      </ProjectHero>
      <ProjectIntro>
        <div className="intro-image">
          <img src={IntroImage} alt="Petsgram Into" />
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
        <img
          className="app-screens"
          src={ShowcaseScreeen}
          alt="ShowcaseScreeen"
        />
      </ScreenShowcase>
      <Packages>
        <p className="package-title">Packages</p>
        <div className="icon-list">
          <div className="native">
            <img src={Flutter} alt="Flutter" style={{ width: "70%" }} />
            <p>Flutter</p>
          </div>
          <div className="firebase" style={{ height: "40%" }}>
            <img src={Firebase} alt="firebase" />
            <p>Firebase</p>
          </div>
        </div>
      </Packages>
      <Waypoint bottomOffset="40%" onEnter={() => setAnimF1(true)} />
      <Feature1>
        <div className="feature1-text">
          <h6>
            Flutter
            <br />
            Awesomeness
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
        <animated.div className="feature1-image" style={F1Animation}>
          <img src={Feature1Img} alt="Feature1" />
        </animated.div>
      </Feature1>
      <Waypoint bottomOffset="90%" onEnter={() => setAnimF2(true)} />

      <Feature2>
        <div className="feature2-image">
          <animated.div style={F21Animation}>
            <img src={Feature2Img} alt="Feature2" />
          </animated.div>
        </div>
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
      </Feature2>
      <Feature3>
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
        <div className="feature3-image">
          <img src={Feature3Img} alt="Feature3" />
        </div>
      </Feature3>
      <Waypoint bottomOffset="50%" onEnter={() => setAnimF4(true)} />
      <Feature4>
        <div className="feature4-image">
          <animated.div style={F42Animation}>
            <img src={Feature42Img} alt="feature42" className="feature42" />
          </animated.div>
          <img src={Feature41Img} alt="feature41" className="feature41" />
          <animated.div style={F43Animation}>
            <img src={Feature43Img} alt="feature43" className="feature43" />
          </animated.div>
        </div>
        <div className="feature4-text">
          <h6>Profile Screen</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </Feature4>
      <Footer />
    </Container>
  );
};

export const ProjectHero = styled.div`
  background: linear-gradient(243.17deg, #c3e6e2 1.45%, #8de4ff 100.05%);
  width: 100vw;
  padding: 10vh 0;
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

  .hero-image {
    justify-self: end;
  }
  .hero-vid {
    justify-self: flex-end;
    align-self: center;

    .youtube {
      border-radius: 10px;
      overflow: hidden;
      background: #fff;
      height: 390px;
      width: 680px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-top: 50px;
    }
    .youtube-mobile {
      display: none;
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: 1fr;
    .hero-image {
      margin: 0vh 00vw;
      padding-left:0vw;
      align-self: end;
      img{
        width: 100%;
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
        height: 250px;
        width:360px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  `}
`;

export const ProjectIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 5vh 0;
  background: #e3e3e3;

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
    margin: 0vh 0;
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
  /* height: 100vh; */
  position: relative;
  background: linear-gradient(232.95deg, #83c0f8 -3.11%, #d665e0 103.11%);

  .bg-screens {
    width: 100%;
  }
  .app-screens {
    z-index: 5;
    width: 80%;
    padding: 10vh 0 5vh 25vw;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .app-screens {
    z-index: 5;
    width: 120%;
    padding: 0vh 0 0vh 0vw;
  }
  `}
`;

export const Packages = styled.div`
  padding: 5vh 00 10vh 0;

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
    grid-template-columns: repeat(2, 1fr);
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
  background: #4fc5ed;
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
    color: #fff;
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
    color: #fff;
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
    transform: translate3d(0px,0,0) scale(1);
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
    padding: 0vh 0;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    flex-direction: column-reverse;
  `}
`;

export const Feature3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #fff48c;
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
    color: #000;
    padding: 1.5vh 0;
    padding-left: 10vw;
  }
  p {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 39px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000;
    padding: 5vh 5vw;
    padding-left: 10vw;
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
    width:120%;
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
    flex-direction: column-reverse;
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
