import React from "react";
import NavBar from "../../components/UI/navbar/NavBar";
import styled from "styled-components";
import media from "styled-media-query";
import ProjectList from "../../components/projects/ProjectList";
import Samengine from "../../assets/images/Projects/list_images/samengine.png";
import SosAdmin from "../../assets/images/Projects/list_images/sosadmin.png";
import SansaRec from "../../assets/images/Projects/list_images/sansarec.png";
import Inventory from "../../assets/images/Projects/list_images/inventory.png";
import Sos from "../../assets/images/Projects/list_images/sos.png";
import Petsgram from "../../assets/images/Projects/list_images/petsgram.png";
import BGlines from "../../assets/images/Projects/list_images/bglines.png";

export const ProjectPage = () => {
  const samTechArr = ["NextJs", "React", "Firebase", "SSR", "StyledComponents"];

  return (
    <Container>
      <List>
        <h3>My Work</h3>
        <ProjectList
          type={"Website"}
          tech={"ReactJS"}
          img={Samengine}
          techArr={samTechArr}
          name={"Sam Auto"}
          routeName={"samauto"}
          desc={
            "Server side rendered website for the client Sam Auto in Toronto. A          dynamic website created using NextJs."
          }
          bgColor={"#9A8AFA"}
        />
        <ProjectList
          type={"WebApp"}
          tech={"ReactJS"}
          img={SosAdmin}
          techArr={samTechArr}
          name={"SOS - Admin App"}
          routeName={"sansa"}
          desc={
            "Server side rendered website for the client Sam Auto in Toronto. A          dynamic website created using NextJs."
          }
          bgColor={"#ADF169"}
        />

        <ProjectList
          type={"Android"}
          tech={"ReactNative"}
          img={SansaRec}
          techArr={samTechArr}
          name={"Sansa Kitchen"}
          routeName={"sansa"}
          desc={
            "Server side rendered website for the client Sam Auto in Toronto. A          dynamic website created using NextJs."
          }
          bgColor={"#E6F169"}
        />
        <ProjectList
          type={"Android"}
          tech={"ReactNative"}
          img={Inventory}
          techArr={samTechArr}
          name={"Inventory Manager"}
          routeName={"inventory"}
          desc={
            "Server side rendered website for the client Sam Auto in Toronto. A          dynamic website created using NextJs."
          }
          bgColor={"#69B0F1"}
        />
        <ProjectList
          type={"Website"}
          tech={"MERN"}
          img={Sos}
          techArr={samTechArr}
          name={"School of Sports"}
          routeName={"sansa"}
          desc={
            "Server side rendered website for the client Sam Auto in Toronto. A          dynamic website created using NextJs."
          }
          bgColor={"#69F1C8"}
        />
        <ProjectList
          type={"MobileApp"}
          tech={"Flutter"}
          img={Petsgram}
          techArr={samTechArr}
          name={"Petsgram"}
          routeName={"petsgram"}
          desc={
            "Server side rendered website for the client Sam Auto in Toronto. A          dynamic website created using NextJs."
          }
          bgColor={"#F16969"}
        />
      </List>
      <div className="bg-lines">
        <svg
          width="903"
          height="726"
          viewBox="0 0 903 726"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-125"
            y="434.382"
            width="1030"
            height="120"
            rx="60"
            transform="rotate(-24.9438 -125 434.382)"
            fill="#FC7272"
          />
          <rect
            x="-82"
            y="616.382"
            width="1030"
            height="120"
            rx="60"
            transform="rotate(-24.9438 -82 616.382)"
            fill="#55F39E"
          />
        </svg>
      </div>
      <div className="star-group">
        <svg
          width="167"
          height="167"
          viewBox="0 0 167 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.7505 23.8136L50.8535 37.8309L52.0939 39.1578L53.7391 38.3882L71.1194 30.2581L61.8373 47.0514L60.9586 48.6411L62.1989 49.968L75.302 63.9853L56.4622 60.3468L54.6788 60.0024L53.8002 61.5921L44.518 78.3854L42.1566 59.3434L41.933 57.5408L40.1496 57.1964L21.3099 53.5579L38.6902 45.4278L40.3354 44.6582L40.1119 42.8556L37.7505 23.8136Z"
            stroke="#D549F8"
            stroke-width="5"
          />
          <path
            d="M35.6949 117.63L44.3945 126.936L45.1387 127.732L46.1258 127.271L57.6652 121.873L51.5025 133.022L50.9753 133.976L51.7195 134.772L60.419 144.079L47.9107 141.663L46.8406 141.457L46.3134 142.41L40.1507 153.56L38.5828 140.917L38.4487 139.836L37.3787 139.629L24.8703 137.214L36.4097 131.816L37.3968 131.354L37.2627 130.272L35.6949 117.63Z"
            stroke="#62F849"
            stroke-width="3"
          />
          <path
            d="M104.942 79.0054L118.045 93.0227L119.286 94.3496L120.931 93.58L138.311 85.4498L129.029 102.243L128.15 103.833L129.391 105.16L142.494 119.177L123.654 115.539L121.871 115.194L120.992 116.784L111.71 133.577L109.348 114.535L109.125 112.733L107.342 112.388L88.5018 108.75L105.882 100.62L107.527 99.85L107.304 98.0474L104.942 79.0054Z"
            stroke="#4D49F8"
            stroke-width="5"
          />
        </svg>
      </div>
      <div className="double-circle">
        <svg
          width="604"
          height="860"
          viewBox="0 0 604 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="341" cy="263" r="263" fill="#F9FFB7" />
          <circle cx="147" cy="713" r="147" fill="#FFBFED" />
        </svg>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  position: relative;
  h3 {
    text-align: center;
    font-size: 52px;
  }
  .bg-lines {
    position: absolute;
    top: 40vh;
    left: 0;
  }
  .star-group {
    position: absolute;
    top: 140vh;
    right: 0;
  }
  .double-circle {
    position: absolute;
    top: 200vh;
    left: 0;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
      svg{
        display:none;
      }
  `}
`;

const List = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 20vh;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 95%;
  `}
`;
