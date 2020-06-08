import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import HeroImg from "../../assets/images/Projects/sosadmin/sosadminhero.png";
import SosIntro from "../../assets/images/Projects/sosadmin/sosadminintro.png";
import Feature1Img from "../../assets/images/Projects/sosadmin/feature-1.png";
import Feature2Img from "../../assets/images/Projects/sosadmin/feature-2.png";

import { ButtonGroup } from "./ProjectStyles";
import { Link } from "react-router-dom";

import Node from "../../assets/images/tectLogos/nodejs-icon.svg";
import Mongo from "../../assets/images/tectLogos/mongodb.svg";
import Graphql from "../../assets/images/tectLogos/graphql.svg";
import Express from "../../assets/images/tectLogos/express.svg";
import ReactImg from "../../assets/images/tectLogos/react.svg";
import Apollo from "../../assets/images/tectLogos/apollo.svg";
import Firebase from "../../assets/images/tectLogos/firebase-1.svg";
import Sass from "../../assets/images/tectLogos/sass-1.svg";

export const SosAdmin = () => {
  return (
    <Container>
      <HeroContainer>
        <div className="hero-content">
          <p>School of Sports</p>
          <p>Admin App</p>
          <ButtonGroup>
            <button className="project-button">
              <Link to="/projects">Live</Link>
            </button>
            <button className="contact-button">
              <Link to="/contact">Code</Link>
            </button>
          </ButtonGroup>
        </div>
        <img src={HeroImg} alt="SOS Admin Hero" />
      </HeroContainer>
      <ProjectIntro>
        <div className="intro-image">
          <img src={SosIntro} alt="SOS Admin Intro" />
        </div>
        <div className="intro-text">
          <p>
            The client wanted a web app along with a website, that can create
            schedule, monitor and provide feedback to the coaches that will be
            sent to schools. Since the coaches will be in remote location the
            managers were unable to track coaches movement and needed a solid
            reporting tool.
          </p>
          <p>
            The mobile app should be able to report attendance, coach arrival
            time, fees paid/unpaid details and comment on the ongoing class.
          </p>
        </div>
      </ProjectIntro>
      <Packages>
        <p className="package-title">Backend</p>
        <div className="icon-list">
          <div className="node">
            <img src={Node} alt="nodejs" />
            <p>NodeJS</p>
          </div>
          <div className="mongo">
            <img src={Mongo} alt="Mongodb" />
            <p>MongoDB</p>
          </div>
          <div className="graphql">
            <img src={Graphql} alt="Graphql" />
            <p>GraphQL</p>
          </div>
          <div className="express">
            <img src={Express} alt="express" />
            <p>ExpressJS</p>
          </div>
        </div>
      </Packages>
      <Packages>
        <p className="package-title">Frontend</p>
        <div className="icon-list">
          <div className="reactimg">
            <img src={ReactImg} alt="react" />
            <p>ReactJS</p>
          </div>
          <div className="apollo">
            <img src={Apollo} alt="Apollo" />
            <p>Apollo</p>
          </div>
          <div className="firebase">
            <img src={Firebase} alt="Firebase" />
            <p>Firebase</p>
          </div>
          <div className="sass">
            <img src={Sass} alt="Sass" />
            <p>Sass</p>
          </div>
        </div>
      </Packages>
      <Feature1>
        <div className="feature1-image">
          <img src={Feature1Img} alt="Feature1" />
        </div>
        <div className="feature1-text">
          <h6>Backend</h6>
          <p>
            The backend server for this app is powered by nodeJs and ExpressJS.
            Responsible for connecting the remote server to the app and the
            frontend
          </p>
          <p>
            The data handling is done by GraphQL and stored in NoSQL JSON format
            by MongoDB. Initially the app was desgined for PostGresSQL but
            mongoDB seemed to be a better fit to the clients requirement.
          </p>
        </div>
      </Feature1>
      <Feature2>
        <div className="Feature2-image">
          <img src={Feature2Img} alt="Feature2" />
        </div>
        <div className="feature2-text">
          <h6>Frontend</h6>
          <p>
            React along with redux provided the ideal solution fo rthe clients
            requirement to be fast responsive and support data intensive
            operations.
          </p>
          <p>
            Apollo client helps in connecting the data operation on the backend
            with user interactions. Node Sass and bootstrap used for styling of
            the app.
          </p>
        </div>
      </Feature2>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const HeroContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: linear-gradient(
    180deg,
    #ffa2a2 0%,
    rgba(208, 162, 255, 0.85) 100%
  );
  /* */
  font-family: Monda;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 78px;
  text-align: center;
  letter-spacing: 0.38em;
  img {
    padding: 10vh 0 20vh 0vw;
    justify-self: center;
  }
  .hero-content {
    padding: 40vh 0 40vh 10vw;
    p:nth-child(1) {
      color: #000000;
    }
    p:nth-child(2) {
      color: #545454;
    }
  }
  ${media.lessThan("small")`
  display: flex;
  flex-direction: column-reverse;
  justify-content:center;
  align-items:center;
  img {
    width:100%;
    padding: 5vh 0 0vh 0vw;
  }
  .hero-content {
    padding: 1vh 0 10vh 0vw;
  }
  `}
  ${media.between("small", "1280px")`
  display: flex;
  flex-direction: column-reverse;
  justify-content:center;
  align-items:center;
  img {
    padding: 10vh 0 0vh 0vw;
    justify-self: center;
  }
  .hero-content {
    padding: 1vh 0 2vh 0vw;
  }
  `}
`;

export const ProjectIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 5vh 0;
  background: white;

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
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  img{
      width:100%;
  }
  p{
    font-size: 24px;
      line-height: 32px;
  }
  `}

  ${media.between("small", "1280px")`
  display: flex;
  flex-direction: column-reverse;
  justify-content:center;
  align-items:center;
  img{
      width:100%;
  }
  p{
    font-size: 24px;
      line-height: 32px;
  }
  `}
`;

export const Packages = styled.div`
  padding: 5vh 00 10vh 0;
  img {
    width: 100%;
  }

  .node,
  .graphql,
  .firebase {
    width: 25%;
  }
  .mongo {
    width: 100%;
  }
  .apollo {
    width: 40%;
  }

  .express,
  .sass,
  .reactimg {
    width: 50%;
  }

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
    padding: 5vh 00 0vh 0;
    .icon-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5vh;    

  }
  .mongo {
    width: 80%;
  }
  `}
  ${media.between("small", "780px")`
  padding: 5vh 00 0vh 0;
    .icon-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5vh;     }
  `}
`;

export const Feature1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: radial-gradient(
    50% 50% at 50% 50%,
    #8dffa6 0%,
    rgba(53, 205, 169, 0.83) 100%
  );
  padding: 5vh 5vw;
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
    color: #000;
    padding: 0vh 5vw;
    padding: 2.5vh 0;
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
  ${media.between("small", "1280px")`
  display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    flex-direction: column-reverse;
    .feature1-image{
    transform: translate3d(0px,0px,0) scale(1);
    img {
    padding: 1vh 0;
    width:100%;
  }
  }
  `}
`;

export const Feature2 = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  font-family: Monda;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  h6 {
    font-size: 40px;
    line-height: 65px;
    letter-spacing: 0.155em;
    color: #1b1b1d;
    padding: 1.5vh 0;
  }
  p {
    font-size: 24px;
    line-height: 39px;
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
    flex-direction: column-reverse;
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
      padding: 5vh 0;
      width:100%;
    }
  `}
`;
