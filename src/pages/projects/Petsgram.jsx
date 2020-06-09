import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
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
import Feature41Img from "../../assets/images/Projects/petsgram/feature4-1.png";
import Feature42Img from "../../assets/images/Projects/petsgram/feature4-2.png";
import Feature43Img from "../../assets/images/Projects/petsgram/feature4-3.png";
import Footer from "./../../components/UI/footer/Footer";

import fadeInRight from "react-animations/lib/fadeInRight";
import fadeInLeft from "react-animations/lib/fadeInLeft";
import ScrollAnimation from "react-animate-on-scroll";

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
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={100}
          duration={0.5}
          animateOnce="false"
        >
          <div className="intro-image">
            <img src={IntroImage} alt="Petsgram Into" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={100}
          duration={0.5}
          animateOnce="false"
        >
          <div className="intro-text">
            <p>
              Petsgram is free, online photo sharing mobile app and social
              network app developed using Flutter. The inspiration for the app
              is from Instagram and the main idea for this app is to create a
              social media platform for users to share their pets images with
              their friends whom they can follow.
            </p>
            <p>
              Users will be able to upload images, follow other users, like
              thier followers images and comment on them. All interactions are
              real time and uses Google Firebase to achieve this. Users will be
              able to edit and upload high res photos to the app and view others
              upload throuh their feed.
            </p>
          </div>
        </ScrollAnimation>
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
        <ScrollAnimation
          animateIn="fadeInTop"
          delay={100}
          duration={0.5}
          animateOnce="false"
        >
          <div className="feature1-text">
            <h6>
              Flutter
              <br />
              Awesomeness
            </h6>
            <p>
              This mobile app powered by the Google's open source software
              development kit Flutter using the Dart language. This app is
              cross-platform and available to both Apple iOS and Google Android
              devices. Any 2D-based UI can be implemented in Flutter without
              interacting with a native application counterpart.Aside from that,
              Flutter provides a declarative API for building UI, which, in my
              experience, noticeably boosts the performance. This is most
              obvious when it comes to visual adjustments.
            </p>
            <p>
              Flutter doesn’t rely on any intermediate code representations or
              interpretation. Flutter application is built directly into the
              machine code, which eliminates any performance bugs of the
              interpretation process. So its safe to say that Flutter
              application performance in most cases will be indistinguishable
              from the native app and even better in complex UI animation
              scenarios.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInDown"
          delay={100}
          duration={0.5}
          animateOnce="false"
        >
          <animated.div className="feature1-image" style={F1Animation}>
            <img src={Feature1Img} alt="Feature1" />
          </animated.div>
        </ScrollAnimation>
      </Feature1>
      <Waypoint bottomOffset="90%" onEnter={() => setAnimF2(true)} />

      <Feature2>
        <div className="feature2-image">
          <animated.div style={F21Animation}>
            <img src={Feature2Img} alt="Feature2" />
          </animated.div>
        </div>
        <div className="feature2-text">
          <h6>Firebase - The Backbone</h6>
          <p>
            Firebase is an amazing tool that removes the requirement for having
            an authentication server locally or on your private cloud. It has
            its own cloud and syncs your user data in realtime and securely.
            Firebase will run the end to end authentication process and free you
            to make your application a better user experience.
          </p>
          <p>
            Firebase Console is one of the best features of this platform. This
            console is one point stop for all monitoring and troubleshooting
            purposes. You can view data from all of your connected applications
            and make and changes in realtime from the console itself. Best use
            on Sending push notifications in real time.
          </p>
        </div>
      </Feature2>
      <Feature3>
        <div className="feature3-text">
          <h6>
            UI/UX- Fun and
            <br />
            Easy
          </h6>
          <p>
            The point of designing this app was to create a fun and safe space
            to share images of our loved ones, so making sure the users are able
            to interact with the app as easily as possible and shouldn't be able
            to find anything complex was the priority. At the same time making
            user interaction with other users through comments is made real
            time.
          </p>
          <p>
            Finding other users, interacting with them and sharing content
            through likes and comments is easy and really fast. Encourages
            interaction between users through image description and comments.
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
          <h6>Cloud Functions</h6>
          <p>
            Real time notificaiton is sent to the user when a follower comments.
            likes or follows the user using Firebase cloud trigger funcitons.
            Mutiple functions are written which gets triggered on user actions
            to provide smooth and real time notifications to the user even when
            the app is not active.
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
    padding: 20vh 0 2vh 0 ;
  `}
  ${media.between("small", "1280px")`
        padding: 20vh 0 2vh 0 ;
  `}
`;

const HeroImageAnimation = keyframes`${fadeInRight}`;
const HeroVideoAnimation = keyframes`${fadeInLeft}`;

export const ProjHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  .hero-image {
    justify-self: end;
    animation: 0.5s ${HeroImageAnimation};
  animation-delay: 1;
  }
  .hero-vid {
    justify-self: flex-end;
    align-self: center;
    animation: 0.5s ${HeroVideoAnimation};
  animation-delay: 1;

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
  ${media.lessThan("650px")`
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
     align-self:center;
     
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

  ${media.between("651px", "980px")`
  grid-template-columns: 1fr 1fr;
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
     padding: 0 10vw;
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
  ${media.between("981px", "1280px")`
  .hero-image {
      margin: 0vh 00vw;
      padding-left:0vw;
      align-self: end;
      img{
        width: 100%;
        margin: 1vh 0vw;
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
  ${media.between("small", "1280px")`
  grid-template-columns: 1fr;
    .intro-image img{
      width:100%;
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
  ${media.between("small", "1280px")`
  .app-screens {
    z-index: 5;
    width: 120%;
    padding: 0vh 0vw 0vh 0vw;
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

  ${media.between("small", "1280px")`
  display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    img {
    padding: 1vh 0;
    width:90%;
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
  ${media.between("small", "1280px")`
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
  ${media.between("small", "1280px")`
    /* screen width is between 450px and 768px (small to medium) */
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

  ${media.between("small", "1280px")`
   display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    flex-direction: column-reverse;
    width:90%;
    margin: 0 auto;
  `}
`;
