import styled from "styled-components";
import media from "styled-media-query";

export const opts = {
  height: "390",
  width: "680",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 3,
  },
};
export const optsMobile = {
  height: "250",
  width: "360",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 3,
  },
};

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  /* padding: 10vh 0; */
`;

export const ProjectHero = styled.div`
  background: #bfe1f4;
  width: 100%;
  height: 110vh;
  padding: 10vh 0;
`;

export const ProjectTitle = styled.div`
  font-family: Monda;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 78px;
  text-align: center;
  letter-spacing: 0.38em;
  color: #000000;

  h6 {
    font-size: 48px;
    line-height: 78px;
    text-align: center;
    letter-spacing: 0.38em;
    color: #636363;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    font-size: 40px;
    h6{
      font-size: 40px;
    }
  `}

  ${media.between("small", "1280px")`
    /* screen width is between 450px and 768px (small to medium) */
    font-size: 40px;
    h6{
      font-size: 40px;
    }
  `}
`;

export const ProjHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  .hero-img {
    padding-left: 50px;
  }
`;

export const ProjIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  .projDesc {
    font-family: Monda;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 52px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
    p {
      padding: 25px 0 25px 50px;
    }
  }
`;

export const SiteShowcase = styled.div`
  img {
    /* width: 70%; */
    /* height: 70vh; */
    padding: 50px 0 50px 20vw;
  }
`;

export const Packages = styled.div``;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin: 5vh 0 0 0;
  position: relative;
  .project-button {
    justify-self: center;
    align-self: auto;
    align-self: center;
    justify-self: center;
    width: 155px;
    height: 51px;
    background-color: #3845b9;
    color: #ffffff;
    font-size: 24px;
    border: none;
    box-shadow: 6px 4px 16px -2px rgba(134, 143, 179, 1);
    transition: 0.8s;
    position: relative;
    z-index: 1000;
    overflow: hidden;
    a {
      color: #ffffff;
    }
  }

  .project-button:hover {
    a {
      color: #3845b9;
    }
  }
  .project-button::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #ffffff;
    z-index: -1;
    transition: 0.8s;
    bottom: 0;
    border-radius: 50% 50% 0 0;
  }
  .project-button:hover::before {
    height: 180%;
  }

  .contact-button {
    align-self: center;
    justify-self: center;
    width: 155px;
    height: 51px;
    background-color: #ffffff;
    color: #3845b9;
    font-size: 24px;
    border: 1px black solid;
    box-shadow: 6px 4px 16px -2px rgba(0, 0, 0, 0.22);
    transition: 0.8s;
    position: relative;
    z-index: 1000;
    overflow: hidden;
    a {
      color: #3845b9;
    }
  }
  .contact-button:hover {
    a {
      color: #ffffff;
    }
  }
  .contact-button::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3845b9;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  .contact-button:hover::before {
    height: 180%;
  }

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    grid-template-columns: repeat(1, auto);
    grid-gap: 4vh;
  `}
`;
