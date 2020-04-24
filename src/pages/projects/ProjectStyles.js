import styled from "styled-components";

export const opts = {
  height: "390",
  width: "680",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 3,
  },
};

export const Container = styled.div`
  width: 100vw;
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
