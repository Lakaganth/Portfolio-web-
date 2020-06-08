import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import HeroImg from "../../assets/images/Projects/sosweb/soshero.png";
import SosIntro from "../../assets/images/Projects/sosweb/sosintro.png";
import Feature1Img from "../../assets/images/Projects/sosweb/feature-1.png";
import Feature2Img from "../../assets/images/Projects/sosweb/feature-2.png";
import Feature3Img from "../../assets/images/Projects/sosweb/feature-3.png";
import Node from "../../assets/images/tectLogos/nodejs-icon.svg";
import Mongo from "../../assets/images/tectLogos/mongodb.svg";
import Graphql from "../../assets/images/tectLogos/graphql.svg";
import Express from "../../assets/images/tectLogos/express.svg";
import ReactImg from "../../assets/images/tectLogos/react.svg";
import Apollo from "../../assets/images/tectLogos/apollo.svg";
import Firebase from "../../assets/images/tectLogos/firebase-1.svg";
import Sass from "../../assets/images/tectLogos/sass-1.svg";
import { ButtonGroup } from "./ProjectStyles";
import { Link } from "react-router-dom";

export const SosWeb = () => {
  return (
    <Container>
      <HeroContainer>
        <div className="hero-content">
          <p>School of Sports</p>
          <p>Website</p>
          <ButtonGroup>
            <button className="project-button">
              <Link to="/projects">Live</Link>
            </button>
            <button className="contact-button">
              <Link to="/contact">Code</Link>
            </button>
          </ButtonGroup>
        </div>
        <img src={HeroImg} alt="SOS WEb Hero" />
      </HeroContainer>
      <ProjectIntro>
        <div className="intro-image">
          <img src={SosIntro} alt="SOS Website Intro" />
        </div>
        <div className="intro-text">
          <p>
            My first project as a freelancer, was helping out a friend with his
            start up. The main idea of organisation is to provide coaches with
            proven track record to schools to produce some of the finest
            atheletes in respective sports and games
          </p>
          <p>
            The client needed a website to be dynamic and to be able to update
            the website with latest content to ensure the company is active. The
            client should be able to update the coaches they bring in, gallery
            with pictures they will be able to upload, host events and the
            website should be able to accept payments.
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
        <div className="feature1-text">
          <h6>
            React with <br />
            Hooks
          </h6>
          <p>
            The frontend for tehis websoite is designed using react with its’s
            latest hooks feature. The connection to backend GraphQL data is made
            possible using Applo client.
          </p>
          <p>
            The website is dynamic with backend support for storing gallery
            photos, add new coaches, add new events, and many more.
          </p>
        </div>
        <div className="feature1-image">
          <img src={Feature1Img} alt="Feature1" />
        </div>
      </Feature1>
      <Feature2>
        <div className="Feature2-image">
          <img src={Feature2Img} alt="Feature2" />
        </div>
        <div className="feature2-text">
          <h6>
            NodeJS and <br />
            Express
          </h6>
          <p>
            A dedicated backend to support this website, using NodeJS and
            Express framework. Secure authentication and storing of data and
            files is possible on the backend
          </p>
        </div>
      </Feature2>
      <Feature3>
        <div className="feature3-text">
          <h6>
            GraphQL with <br />
            MongoDB
          </h6>
          <p>
            Data modelling and manipulation is performed using GrpahQL. Data is
            stored in NoSQL JSON format to support dynamic querries with ease of
            scaling up.
          </p>
        </div>
        <div className="feature3-image">
          <img src={Feature3Img} alt="Feature3" />
        </div>
      </Feature3>
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
  font-family: Monda;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 78px;
  text-align: center;
  letter-spacing: 0.38em;
  img {
    justify-self: flex-end;
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
  }
  .hero-content {
    padding: 5vh 0 5vh 0vw;
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
`;

export const Packages = styled.div`
  padding: 5vh 00 10vh 0;
  overflow: hidden;
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
`;

export const Feature1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: radial-gradient(50% 50% at 50% 50%, #b36ff7 0%, #551c8d 100%);
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
  `}
`;
export const Feature3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #680b6a;
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
