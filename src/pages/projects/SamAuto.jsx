import React from "react";
import styled from "styled-components";

import {
  Container,
  ProjectTitle,
  ProjectHero,
  ProjHeroGrid,
  ProjIntro,
} from "./ProjectStyles";
import HeroImg from "../../assets/images/Projects/samauto/heroimg.png";
import ProjIntroImg from "../../assets/images/Projects/samauto/projintro.png";
import Showcase from "../../assets/images/Projects/samauto/showcase.png";

import YouTube from "react-youtube";

const SamAuto = () => {
  const opts = {
    height: "390",
    width: "680",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Container>
      <ProjectHero>
        <ProjectTitle>
          <h3>Sam Auto</h3>
          <h6>Website</h6>
        </ProjectTitle>
        <ProjHeroGrid>
          <div className="hero-img">
            <img src={HeroImg} alt="Sam Auto" />
          </div>
          <div className="hero-vid">
            <YouTube
              videoId="RlEgDQLz_1Y"
              opts={opts}
              //   onReady={this._onReady}
            />
          </div>
        </ProjHeroGrid>
      </ProjectHero>
      <ProjIntro>
        <div className="projDesc">
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
        <div className="projIntoImg">
          <img src={ProjIntroImg} alt="Mechanic" />
        </div>
      </ProjIntro>
      <SiteShowcase style={{ background: "#5F7683" }}>
        <svg
          className="blue-circle"
          width="579"
          height="579"
          viewBox="0 0 579 579"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="289.5" cy="289.5" r="289.5" fill="#86C2ED" />
        </svg>
        <div className="showcase-img">
          <img src={Showcase} alt="Site showcase" />
        </div>
      </SiteShowcase>
    </Container>
  );
};

export default SamAuto;

export const SiteShowcase = styled.div`
  position: relative;
  background: #5f7683;
  /* width: 100vw;
  height: 200vh; */
  .showcase-img {
    z-index: 10;
    /* position: absolute; */
    img {
      padding: 50px 0 50px 20vw;
    }
  }

  .blue-circle {
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 0;
  }
`;
