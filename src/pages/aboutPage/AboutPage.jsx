import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import "./AboutPage.scss";

// Logos
import AboutLaka from "../../assets/images/AboutLogos/lakaabout.png";
import { RoadMap } from "../../components/about/RoadMap";
import Testimonials from "./../../components/about/Testimonials";
import Footer from "../../components/UI/footer/Footer";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Column>
        <LeftColumn>
          <div className="about-laka">
            <img src={AboutLaka} alt="Laka Mohan" />
          </div>
        </LeftColumn>
        <RightColumn>
          <svg
            width="54"
            height="55"
            viewBox="0 0 54 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="31.9019"
              y="3.30618"
              width="9.21963"
              height="50.0502"
              rx="4.60981"
              transform="rotate(24.7463 31.9019 3.30618)"
              fill="#E039CF"
              fill-opacity="0.31"
            />
            <rect
              x="2.45808"
              y="20.9442"
              width="9.65882"
              height="50.0502"
              rx="4.82941"
              transform="rotate(-62.6238 2.45808 20.9442)"
              fill="#E039CF"
              fill-opacity="0.31"
            />
          </svg>

          <h3>About Me</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Hi! I’m Lakshmi Ganth Mohan. I’m a full stack developer for web and
            mobile. Experienced in creating beautiful and efficient web and
            mobile apps with 3 years of experience. I love designing my own my
            apps and provide efficient user experience. I follow latest trend in
            web technology and try to update myself to solve problems.
          </p>
          <p>
            I grew up in Chennai, India, influenced by booming tech industry and
            rich opportunity to learn, I became a self-taught front-end
            developer with few years of experience in C and Java. Now based in
            Toronto, Canada I’m helping new businesses and startup with
            designing websites and collaborating for creating productive apps.
          </p>
          <p>
            I’m a people person and enjoy working with team. I seek inspiration
            in simple things in life and works reflects it. I enjoy my work with
            music and cup of coffee. Feel free to have a look into my resume and
            contact me by any means of communication.
          </p>
          <ButtonGroup>
            <svg
              width="107"
              height="109"
              viewBox="0 0 107 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.76509 47.6784L74.5887 37.7987L49.7329 100.609L7.76509 47.6784Z"
                stroke="#38FF70"
                stroke-width="8"
              />
            </svg>
            <a
              href="https://drive.google.com/file/d/1U4iyAuIKv2lXgjPZb1-1RDjOhINJyTNf/view?usp=sharing"
              target="_blank"
            >
              <button className="download-btn">Download CV</button>
            </a>
            <Link to="/projects">
              <button className="work-btn">My Work</button>
            </Link>
          </ButtonGroup>
        </RightColumn>
      </Column>
      <RoadMap />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutPage;

const Column = styled.div`
  padding-top: 20vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  justify-content: center;

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: repeat(1, 1fr);
  `}
`;

const LeftColumn = styled.div`
  .about-laka {
    transform: translateX(10vw) translateY(-5vh);
    position: relative;
    img {
      z-index: 15;
      transform: translateY(3vh);
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
  .about-laka{
    transform: translateX(0vw) translateY(0vh);
    padding-left:20vw;
  }
    .about-laka img{
                  width:80%;
              }
  `}
`;
const RightColumn = styled.div`
  width: 80%;
  margin: 0 auto;
  h3 {
    font-size: 32px;
  }
  h6 {
    font-size: 20px;
    color: #959595;
    font-weight: normal;
    margin-bottom: 3vh;
  }
  p {
    font-size: 20px;
    margin: 4vh 0;
  }
  svg {
    transform: scale(1) translateX(14vw) translateY(-5vh);
  }

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    text-align:center;
    width: 90%;
    h3 {
    font-size: 42px;
    }
    h6{
      font-size: 30px;
    }
    p {
    font-size: 22px;
    margin: 4vh 0;
  }
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    transform: scale(1) translateX(15vw) translateY(-5vh);
    z-index: -10;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom:5vh;
    svg{
      display:none;
    }
    .download-btn{
      width: 70vw;
      height: 10vh;
      font-size: 34px;
    }
    .work-btn{
      width: 70vw;
      height: 10vh;
      font-size: 34px;
    }
  `}
`;
