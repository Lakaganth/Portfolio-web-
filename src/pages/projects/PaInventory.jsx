import React, { useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import {
  Container,
  ProjectTitle,
  ButtonGroup,
  //   ProjectHero,
  //   ProjHeroGrid,
  //   ProjIntro,
  opts,
  optsMobile,
} from "./ProjectStyles";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";
import media from "styled-media-query";
import HeroImg from "../../assets/images/Projects/inventory/hero.png";
import IntroImage from "../../assets/images/Projects/inventory/intro-image.png";
import ShowcaseBG from "../../assets/images/Projects/inventory/showcase-bg.png";
import ShowcaseScreeen from "../../assets/images/Projects/inventory/showcase-screen.png";
import Native from "../../assets/images/Projects/sansakitchen/native.svg";
import Redux from "../../assets/images/Projects/sansakitchen/redux.svg";
import AWS from "../../assets/images/Projects/inventory/aws.png";
import Expo from "../../assets/images/Projects/inventory/expo.png";
import Feature1Img from "../../assets/images/Projects/inventory/feature1.png";
import Feature21Img from "../../assets/images/Projects/inventory/feature2-1.png";
import Feature22Img from "../../assets/images/Projects/inventory/feature2-2.png";
import Feature3Img from "../../assets/images/Projects/inventory/feature3.png";
import Feature41Img from "../../assets/images/Projects/inventory/feature4-1.png";
import Feature42Img from "../../assets/images/Projects/inventory/feature4-2.png";
import Feature43Img from "../../assets/images/Projects/inventory/feature4-3.png";

export const PaInventory = () => {
  const [animF1, setAnimF1] = useState(false);
  const [animF2, setAnimF2] = useState(false);
  const [animF4, setAnimF4] = useState(false);

  const F1Animation = useSpring({
    opacity: animF1 ? 1 : 0,
    transform: animF1
      ? "translate3d(-100px, 20px, 0) "
      : "translate3d(-300px, 60px, 0) ",
    scale: animF1 ? 1 : 1.5,
  });
  const F21Animation = useSpring({
    opacity: animF2 ? 1 : 0,
    transform: animF2
      ? "translate3d(-100px, 220px, 0)"
      : "translate3d(280px, -360px, 0)",
    scale: animF2 ? 1 : 1.5,
  });
  const F22Animation = useSpring({
    opacity: animF2 ? 1 : 0,
    transform: animF2
      ? "translate3d(160px, -220px, 0)"
      : "translate3d(0px, 360px, 0)",
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
            PA Inventory <br /> Manager
          </h3>
          <h6>Mobile App</h6>
        </ProjectTitle>
        <ProjHeroGrid>
          <div className="hero-vid">
            <div className="youtube">
              <YouTube
                videoId="PIz9eyAkYIA"
                opts={opts}
                //   onReady={this._onReady}
              />
            </div>
            <div className="youtube-mobile">
              <YouTube
                videoId="PIz9eyAkYIA"
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
          <img src={IntroImage} alt="Inventory" />
        </div>
        <div className="intro-text">
          <p>
            PA Inventory manager app is designed to handle the everyday task of
            retail shop owners who take count of their stock and make orders
            based on the inventory availabilty. This task is time consuming and
            prone to error. Having the knowledge of the stock count in your
            finger tips can come in handy specially when the product is on sale
            or can avoid overstocking.
          </p>
          <p>
            Initially this was developed as an React web app for a client but
            based on feedback it seemed more appropriate as an mobile native
            app. This app is able to use the phones camera app QR scanner
            feature to make workflow much faster and error free. This app
            reqiures minimal training and can be used by anyone type of stores
            having the inventory count problem.
          </p>
        </div>
      </ProjectIntro>
      <ScreenShowcase>
        <img className="bg-screens" src={ShowcaseBG} alt="Sansa Screens" />
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
            <img src={Native} alt="Native" style={{ width: "160%" }} />
            <p>React Native</p>
          </div>
          <div className="aws" style={{ height: "40%" }}>
            <img src={AWS} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="redux">
            <img src={Redux} alt="Redux" style={{ width: "160%" }} />
            <p>Redux</p>
          </div>
          <div className="expo">
            <img src={Expo} alt="Expo" style={{ width: "80%" }} />
            <p>Expo</p>
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
            Developed using <br />
            React Native and Expo
          </h6>
          <p>
            Even though this app was initially developed using React for web,
            React native paved way for new and better features for this problem.
            This app was faster and easy to use,which made more appealing to the
            client.
          </p>
          <p>
            Expo offered more features out of the box like media library file
            access and camera access. Developing cross platform was made
            possible using react native along with ensuring speed and agility of
            this app to work on mobiles of different screen sizes.
          </p>
        </div>
      </Feature1>
      <Waypoint bottomOffset="90%" onEnter={() => setAnimF2(true)} />
      <Feature2>
        <div className="feature2-text">
          <h6>
            AWS and
            <br />
            Redux
          </h6>
          <p>
            Choosing the right backend service was critical for the project. It
            has to be secure and fast and more importantly cost effective. AWS
            Amplify checked all the boxes and offered more services with a pay
            as you go model. The database is setup through GraphQL model to
            maintain the data integrity. The app is real-time and uses
            subscription based updates.
          </p>
          <p>
            React redux is used for state management with the app. Calls made to
            the AWS servers is made using Redux Thunk making them asynchronous
            or non-blocking. Redux design pattern ensures the state is immutable
            and the state is accesbie through all levels of the app.
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
            Secure authentication
            <br />
            and fast data
          </h6>
          <p>
            PA inventory app uses Amazon Cognito for authentication enabling two
            factor authentication to user data. Amazon Cognito examines each
            user pool sign-in attempt and generates a risk score for how likely
            the sign-in request is to be from a malicious attacker. With
            adaptive authentication, users continue to sign in with just their
            password when the request has characteristics of successful sign-ins
            in the past. Users are prompted for a second factor only when some
            risk is detected with a sign-in request.
          </p>
          <p>
            This app takes advantage of the highly optimized and robust GraphQL
            data layer provided by AWS AppSync providing real-time operations by
            pushing data to clients then and there.
          </p>
        </div>
      </Feature3>
      <Waypoint bottomOffset="50%" onEnter={() => setAnimF4(true)} />
      <Feature4>
        <div className="feature4-text">
          <h6>
            Quick , Easy
            <br />
            and Customizable
          </h6>
          <p>
            Users will be to add their inventory, update and delete them
            anytime. QR codes for each product can be downloaded and printed.
            Upon scanning the QR codes through the app, users will be able to
            read or update the inventory count within seconds and removing the
            need for navigating to screens.
          </p>
          <p>
            The list can be marked as completed after order or removed from the
            list. All the essential information is displayed on the list screen.
            The list can be filtered based on the product categories. Email is
            triggred on the completion of list to the user for record keeping.
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
  background: #acf0ff;
  width: 100vw;
  padding: 15vh 0;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    padding: 20vh 0 2vh 0 ;
    
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
      margin: 3vh 10vw;
      padding-left:5vw;
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
  margin: 5vh 0;

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

  .bg-screens {
    width: 100%;
  }
  .app-screens {
    z-index: 5;
    width: 80%;
    position: absolute;
    top: 20vh;
    left: 10vw;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .app-screens {
    z-index: 5;
    width: 100%;
    position: absolute;
    top: 5vh;
    left: 2vw;
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
  background: #58e1ff;
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
    img{
      padding: 0vh 0;
      width:70%;
    }    
  `}
`;

export const Feature3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  background: #1e57ac;
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
    padding: 5vh 5vw;
  }
  img {
    /* padding: 2vh 0; */
  }
  .feature3-text {
    order: 2;
  }
  .feature3-image {
    align-self: end;
    order: 1;
    /* order: 1; */
    /* justify-self: flex-end; */
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    flex-direction: column-reverse;
    /* width:100%; */
    .feature3-image img{
    width:100%;    
    order: 2;
    /* justify-self: flex-end; */
  }
  .feature3-text{
    order: 1;
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
