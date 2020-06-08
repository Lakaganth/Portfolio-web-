import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";

import Petsgram from "../../assets/images/Projects/list_images/petsgram.png";
import Samengine from "../../assets/images/Projects/list_images/samengine.png";
import SosAdmin from "../../assets/images/Projects/list_images/sosadmin.png";
import SansaRec from "../../assets/images/Projects/list_images/sansarec.png";
import Inventory from "../../assets/images/Projects/list_images/inventory.png";
import Sos from "../../assets/images/Projects/list_images/sos.png";
import ScrollAnimation from "react-animate-on-scroll";

export const ProjectPageAlt = () => {
  return (
    <Container>
      <ProjectsGrid>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={100}
          duration={0.5}
          animateOnce="false"
        >
          <ProjectCard
            pHeroImg={Petsgram}
            pTitle="Petsgram"
            pdesc="Flutter social media mobile app"
            techTags={["Flutter", "Firebase"]}
            bgColor={"linear-gradient(180deg, #3DFC50 0%, #A5FFC9 100%);"}
            tagColor={"#3DFC50"}
            projectPath={"projects/petsgram"}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={200}
          duration={0.5}
          animateOnce="false"
        >
          <ProjectCard
            pHeroImg={Samengine}
            pTitle="Sam Auto"
            pdesc="Server Sider Rendered React website"
            techTags={["React", "NextJs", "Redux"]}
            bgColor={"linear-gradient(180deg, #3BBFC1 0%, #A3FEFF 100%);"}
            tagColor={"#3BBFC1"}
            projectPath={"projects/samauto"}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={300}
          duration={0.5}
          animateOnce="false"
        >
          <ProjectCard
            pHeroImg={SansaRec}
            pTitle="Sansa Kitchen"
            pdesc="React Native Full stack mobile app"
            techTags={["Native", "Redux", "Firebase"]}
            bgColor={
              "linear-gradient(180deg, rgba(219, 0, 255, 0.35) 0%, rgba(131, 179, 250, 0.57) 100%)"
            }
            tagColor={"rgba(219, 0, 255, 0.35)"}
            projectPath={"projects/sansa"}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={400}
          duration={0.5}
          animateOnce="false"
        >
          <ProjectCard
            pHeroImg={Inventory}
            pTitle="PA Inventory"
            pdesc="React Native productivity mobile app"
            techTags={["Native", "AWS", "Redux"]}
            bgColor={"linear-gradient(180deg, #3DFCFC 0%, #FFFBA5 100%);"}
            tagColor={"#FFFBA5"}
            projectPath={"projects/inventory"}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={500}
          duration={0.5}
          animateOnce="false"
        >
          <ProjectCard
            pHeroImg={Sos}
            pTitle="SOS Website"
            pdesc="Full stack Node/React dynamic website"
            techTags={["React", "NodeJS", "GraphQL"]}
            bgColor={"linear-gradient(180deg, #FC7E38 0%, #FFA5E6 100%)"}
            tagColor={"#FC7E38"}
            projectPath={"projects/sosweb"}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          delay={600}
          duration={0.5}
          animateOnce="false"
        >
          <ProjectCard
            pHeroImg={SosAdmin}
            pTitle="SOS Admin Web App"
            pdesc="Full stack MERN Stack web app"
            techTags={["React", "NodeJs", "Mongo", "Redux"]}
            bgColor={"linear-gradient(180deg, #3CFC38 0%, #D7FFA5 100%)"}
            tagColor={"#3CFC38"}
            projectPath={"projects/sosadmin"}
          />
        </ScrollAnimation>
      </ProjectsGrid>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;
const ProjectsGrid = styled.div`
  width: 100vw;
  padding: 20vh 10vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${media.lessThan("980px")`
    /* screen width is less than 450px (small) */
    display: grid;
    grid-template-columns: repeat(1, 1fr);    
    padding: 20vh 3vw;
    justify-items:center;
  `}
  ${media.between("981px", "1400px")`
    /* screen width is between 450px and 768px (small to medium) */
     grid-template-columns: repeat(2, 1fr);
  `}
`;

export const ProjectCard = ({
  pHeroImg,
  pTitle,
  pdesc,
  techTags,
  bgColor,
  tagColor,
  projectPath,
}) => {
  return (
    <Card bgColor={bgColor} tagColor={tagColor}>
      <div className="project-hero-img">
        <img src={pHeroImg} alt="Project hero" />
      </div>
      <div className="project-content">
        <h3>{pTitle}</h3>
        <p>{pdesc}</p>

        <div className="tags">
          {techTags.length > 0
            ? techTags.map((tt, index) => (
                <div key={index} className="tag">
                  {tt}
                </div>
              ))
            : null}
        </div>
      </div>
      <Link to={projectPath}>
        <button className="read-more">Read More...</button>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  --bg-filter-opacity: 0.5;
  --color: #3c3163;
  --transition-time: 0.5s;
  /* background-image: linear-gradient(
      rgba(0, 0, 0, var(--bg-filter-opacity)),
      rgba(0, 0, 0, var(--bg-filter-opacity))
    ),
    var(--bg-img); */
  background: ${({ bgColor }) => bgColor};
  height: 25em;
  width: 15em;
  font-size: 1.5em;
  color: black;
  border-radius: 1em;
  padding: 10px 10px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  border: 10px solid #ccc;
  text-decoration: none;

  .project-hero-img {
    position: relative;
    width: 200px;
    height: 200px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    /* overflow: hidden; */
    img {
      padding: 10px;
      position: absolute;
      /* animation: animate-image 1s linear infinite; */
      /* top: 0;
      bottom: 0;
      left: 0;
      right: 0; */
    }
  }

  .read-more {
    width: 100%;
    padding: 10px;
    height: 50px;
    border: none;
    font-size: 24px;
    justify-self: flex-start;
    transition: all, 0.5s;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .project-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 0 0 2px;
    h3 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 48px;
      color: #201f1f;
    }
    p {
      font-family: Poppins;
      font-style: normal;
      padding: 15px 0;
    }
  }

  &:hover {
    transform: rotate(0);
    transform: scale(1.05) translate3d(0, -1.5vh, 0px);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    .read-more {
      visibility: visible;
    }
    .tags .tag {
      background: ${({ tagColor }) => tagColor};
      color: black;
    }
  }

  .tags {
    display: flex;
    padding: 10px 0 0 0;
  }
  & .tags .tag {
    font-size: 0.75em;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.3rem;
    padding: 0 0.5em;
    margin-right: 0.5em;
    line-height: 1.5em;
    transition: all, var(--transition-time);
  }

  &:before,
  &:after {
    content: "";
    transform: scale(0);
    transform-origin: top left;
    border-radius: 50%;
    position: absolute;
    left: -50%;
    top: -50%;
    z-index: -5;
    transition: all, var(--transition-time);
    transition-timing-function: ease-in-out;
  }
  &:before {
    background: #fff;
    width: 250%;
    height: 250%;
  }

  &:after {
    background: white;
    width: 200%;
    height: 200%;
  }

  &:hover {
    color: #3c3163;
  }

  &:hover:before,
  .card:hover:after {
    transform: scale(1);
  }
`;
