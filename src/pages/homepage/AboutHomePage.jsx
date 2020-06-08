import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import LogoContainer from "../../components/home/LogoContainer";
import PetsgramLogo from "../../assets/images/projlogos/petsgramsvg.svg";
import InventoryLogo from "../../assets/images/projlogos/inventory.png";
import SamLogo from "../../assets/images/projlogos/sam.png";
import SansaLogo from "../../assets/images/projlogos/sansa.png";
import SosLogo from "../../assets/images/projlogos/sosweb.png";
import SosAdminLogo from "../../assets/images/projlogos/sosadmin.png";
import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

export default function AboutHomePage() {
  const Container = styled.div`
    width: 100%;
    background-color: #f8f2ff;
  `;
  const AboutContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 5vh 0;
    text-align: center;
    h2 {
      font-size: 42px;
      color: #282828;
      padding: 2rem 0 0.4rem 0;
    }
    h4 {
      font-size: 24px;
      color: #707070;
      padding: 0 0 2rem 0;
    }
    p {
      font-size: 24px;
      color: #707070;
      padding: 0 0 2rem 0;
      max-width: 942px;
      margin: 0 auto;
    }
  `;
  const ProjectLogos = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-content: center;
    justify-content: center;

    .proj-link {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: center;
      align-items: center;
      margin: 0 auto;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      transition: 0.5s;
    }

    .proj-link:hover {
      transform: scale(1.2);
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    }

    ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: repeat(2, 1fr);
    grid-gap:25px;
  `}
    ${media.between("small", "1280px")`
    /* screen width is between 450px and 768px (small to medium) */
    grid-template-columns: repeat(3, 1fr);
    grid-gap:25px;
  `}
  `;

  return (
    <Container>
      <AboutContainer>
        <h2>About</h2>
        <h4>Full Stack Web Developer</h4>
        <p>
          Hi! My name is Lakshmi Ganth Mohan. I’m a full stack developer with 3
          years of experience. I expertise in web and mobile apps using
          Javascript frameworks. I keep myself updated with the latest technolgy
          in the industry and produce clean code.
        </p>
        <ProjectLogos>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={100}
            duration={0.5}
            animateOnce="false"
          >
            <div className="petsgram">
              <div className="proj-link">
                <Link to="/projects/petsgram">
                  <img src={PetsgramLogo} alt="PetsgramLogo" />
                </Link>
              </div>
              <p>Petsgram</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={200}
            duration={0.5}
            animateOnce="false"
          >
            <div className="inventory">
              <div className="proj-link">
                <Link to="/projects/inventory">
                  <img src={InventoryLogo} alt="inventory" />
                </Link>
              </div>
              <p>PA Inventory</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={300}
            duration={0.5}
            animateOnce="false"
          >
            <div className="sam">
              <div className="proj-link">
                <Link to="/projects/samauto">
                  <img src={SamLogo} alt="SamLogo" />
                </Link>
              </div>
              <p>Sam Auto</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={400}
            duration={0.5}
            animateOnce="false"
          >
            <div className="Sansa">
              <div className="proj-link">
                <Link to="/projects/sansa">
                  <img src={SansaLogo} alt="SansaLogo" />
                </Link>
              </div>
              <p>Sansa Kitchen</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={500}
            duration={0.5}
            animateOnce="false"
          >
            <div className="sosweb">
              <div className="proj-link">
                <Link to="/projects/sosweb">
                  <img src={SosLogo} alt="SosLogo" />
                </Link>
              </div>
              <p>SOS Web</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={600}
            duration={0.5}
            animateOnce="false"
          >
            <div className="sosadmin">
              <div className="proj-link">
                <Link to="/projects/sosadmin">
                  <img src={SosAdminLogo} alt="SosAdminLogo" />
                </Link>
              </div>
              <p>SOS Admin</p>
            </div>
          </ScrollAnimation>
        </ProjectLogos>
      </AboutContainer>
      <LogoContainer />
    </Container>
  );
}
