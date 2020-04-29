import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";

import { Container, ProjectTitle, optsMobile, opts } from "./ProjectStyles";
import HeroImg from "../../assets/images/Projects/samauto/heroimg.png";
import ProjIntroImg from "../../assets/images/Projects/samauto/projintro.png";
import Showcase from "../../assets/images/Projects/samauto/showcase.png";
import ShowcaseBG from "../../assets/images/Projects/samauto/showcase-bg.png";
import NextLogo from "../../assets/images/Projects/samauto/next.png";
import ReactLogo from "../../assets/images/Projects/samauto/react.png";
import Styled from "../../assets/images/Projects/sansakitchen/styled.svg";
import Firebase from "../../assets/images/Projects/sansakitchen/firebase.svg";
import Feature1Img from "../../assets/images/Projects/samauto/feature1.png";
import Feature2Img from "../../assets/images/Projects/samauto/feature2.png";
import Feature22Img from "../../assets/images/Projects/sansakitchen/feature2-2.png";
import Feature3Img from "../../assets/images/Projects/samauto/feature3.png";
import Feature41Img from "../../assets/images/Projects/sansakitchen/feature4-1.png";
import Feature42Img from "../../assets/images/Projects/sansakitchen/feature4-2.png";
import Feature43Img from "../../assets/images/Projects/sansakitchen/feature4-3.png";
import YouTube from "react-youtube";
import Footer from "../../components/UI/footer/Footer";

const SamAuto = () => {
  const [animF1, setAnimF1] = useState(false);
  const [animF2, setAnimF2] = useState(false);
  const [animF4, setAnimF4] = useState(false);

  const F1Animation = useSpring({
    opacity: animF1 ? 1 : 0,
    transform: animF1
      ? "translate3d(0px, 0px, 0) "
      : "translate3d(-300px, 0px, 0) ",
    scale: animF1 ? 1 : 1.5,
  });
  const F21Animation = useSpring({
    opacity: animF2 ? 1 : 0,
    transform: animF2
      ? "translate3d(50px, 0px, 0)"
      : "translate3d(50px, 60px, 0)",
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
          <h3>Sam Auto</h3>
          <h6>Website</h6>
        </ProjectTitle>
        <ProjHeroGrid>
          <div className="hero-vid">
            <div className="youtube">
              <YouTube videoId="z3EdIQ0M32o" opts={opts} />
            </div>
            <div className="youtube-mobile">
              <YouTube
                videoId="z3EdIQ0M32o"
                opts={optsMobile}
                //   onReady={this._onReady}
              />
            </div>
          </div>
          <div className="hero-image">
            <img src={HeroImg} alt="Sam" />
          </div>
        </ProjHeroGrid>
      </ProjectHero>
      <ProjectIntro>
        <div className="intro-image">
          <img src={ProjIntroImg} alt="Mechanic" />
        </div>
        <div className="intro-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
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
      <SiteShowcase>
        <img className="showcase-bg" src={ShowcaseBG} alt="ShowcaseBG" />
        <div className="showcase-img">
          <img src={Showcase} alt="Site showcase" />
        </div>
      </SiteShowcase>
      <Packages>
        <p className="package-title">Packages</p>
        <div className="icon-list">
          <div className="next">
            <img src={NextLogo} alt="nextjs" />
          </div>
          <div className="styled">
            <img src={ReactLogo} alt="styled" />
            <p>React</p>
          </div>
          <div className="redux">
            <img src={Styled} alt="Redux" />
            <p>Styled Components</p>
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
      <Waypoint bottomOffset="20%" onEnter={() => setAnimF2(true)} />
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
        <div className="Feature2-image">
          <animated.div style={F21Animation}>
            <img src={Feature2Img} alt="Feature2Img" />
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
      <Footer />
    </Container>
  );
};

export default SamAuto;

export const ProjectHero = styled.div`
  background: #3bbfc1;
  width: 100%;
  height: 110vh;
  padding: 10vh 0;
  overflow: hidden;

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    padding: 5vh 0 2vh 0 ;
    img{
        width: 120%;
        margin: 0vh 0vw;
       }     
  `}
`;

export const ProjHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  /* padding: 10vh 0 2vh 0; */

  .hero-image {
    padding: 0vh 0;
    img {
      width: 60%;
    }
  }

  .hero-vid {
    justify-self: center;
    align-self: center;

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
     padding: 5vh 0 0 0;
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
        /* padding: 1vh 0; */
      }
    }
    .hero-image {
    padding: 0vh 0;
    img {
      width: 100%;
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

  .projIntroImg {
    width: 60%;
    img {
      width: 100%;
    }
  }

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
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    flex-direction: column-reverse;
    .intro-image{
      width: 100vw;      
      img{
      width:100%;
    }
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

export const SiteShowcase = styled.div`
  position: relative;
  width: 100vw;

  .showcase-img {
    z-index: 10;
    position: absolute;
    top: 15vh;
    left: 30vw;

    img {
      transform: scale(1.3);
      width: 100%;
    }
  }

  .showcase-bg {
    width: 100%;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .showcase-bg {
    width: 100%;
    height: 50vh;
  }
    .showcase-img {
    z-index: 5;
    position: absolute;
    top: 10vh;
    left: 0vw;
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
  background: radial-gradient(50% 50% at 50% 50%, #b36ff7 0%, #551c8d 100%);
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
    padding: 2vh 0;
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
    padding: 0vh 5vw;
  }
  img {
    padding-top: 10vh;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    flex-direction: column-reverse;
    width:100%;
    img {
    padding: 1vh 0;
    width:100%;
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
    transform: translate3d(0px,0px,0) scale(1);
  }
  `}
`;
export const Feature2 = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
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
    width: 70%;
    margin: 0 auto;
  }
  img {
    padding: 2vh 0;
    align-self: center;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    p{
      width: 100%;
    }
    .Feature2-image{
      align-self: center;
    }
    img{
      padding: 0vh 0;
      width:100%;
    }
    /* flex-direction: column-reverse; */
  `}
`;
export const Feature3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #161b4b;
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
  .feature3-image {
    align-self: end;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    flex-direction: column-reverse;
    .feature3-image {
    align-self: center;
    img{
    width:100%;

    }
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
`;
