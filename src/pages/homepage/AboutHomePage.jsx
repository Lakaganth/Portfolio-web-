import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import LogoContainer from "../../components/home/LogoContainer";
import PetsgramLogo from "../../assets/images/projlogos/petsgram.png";
import InventoryLogo from "../../assets/images/projlogos/inventory.png";
import SamLogo from "../../assets/images/projlogos/sam.png";
import SansaLogo from "../../assets/images/projlogos/sansa.png";
import SosLogo from "../../assets/images/projlogos/sosweb.png";
import SosAdminLogo from "../../assets/images/projlogos/sosadmin.png";
import { Link } from "react-router-dom";

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

    ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: repeat(2, 1fr);
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
          <div className="petsgram">
            <Link to="/projects/petsgram">
              <img src={PetsgramLogo} alt="PetsgramLogo" />
            </Link>
            <p>Petsgram</p>
          </div>
          <div className="inventory">
            <Link to="/projects/inventory">
              <img src={InventoryLogo} alt="inventory" />
            </Link>
            <p>PA Inventory</p>
          </div>
          <div className="sam">
            <Link to="/projects/samauto">
              <img src={SamLogo} alt="SamLogo" />
            </Link>
            <p>Sam Auto</p>
          </div>
          <div className="Sansa">
            <Link to="/projects/sansa">
              <img src={SansaLogo} alt="SansaLogo" />
            </Link>
            <p>Sansa Kitchen</p>
          </div>
          <div className="sosweb">
            <Link to="/projects/sosweb">
              <img src={SosLogo} alt="SosLogo" />
            </Link>
            <p>SOS Web</p>
          </div>
          <div className="sosadmin">
            <Link to="/projects/sosadmin">
              <img src={SosAdminLogo} alt="SosAdminLogo" />
            </Link>
            <p>SOS Admin</p>
          </div>
        </ProjectLogos>
      </AboutContainer>
      <LogoContainer />
    </Container>
  );
}
