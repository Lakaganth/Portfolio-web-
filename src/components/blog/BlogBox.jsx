import React from "react";
import styled from "styled-components";
import * as Blogactions from "../../store/actions/BlogActions";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import media from "styled-media-query";

const calc = (x, y) => [
  -(y - window.innerHeight / 4) / 20,
  (x - window.innerWidth / 1.2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const BlogBox = ({ blog, history }) => {
  const dispatch = useDispatch();

  const setSelectedBlog = async () => {
    // await dispatch(Blogactions.setSingleBlog(blog));
    history.push("/blog/detail", { blog });
  };
  return (
    <Container>
      <ImgContainer img={blog.blogImage}>
        <div className="created"></div>
      </ImgContainer>
      <h3>{blog.title}</h3>
      <h6>{blog.subtitle}</h6>
      <button onClick={setSelectedBlog}>Read More</button>
    </Container>
  );
};

export default withRouter(BlogBox);

const Container = styled.div`
  width: 25vw;
  /* height: 40vh; */
  padding-bottom: 2vh;
  background-color: #fefefe;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 4px 5px 0px rgba(0, 0, 0, 0.33);
  transition: all 0.2s ease-in-out;
  h3 {
    width: 90%;
    margin: 0 auto;
    margin-top: 2vh;
    font-size: 30px;
  }
  h6 {
    width: 90%;
    margin: 0 auto;
    margin-top: 0.5vh;
    font-weight: normal;
    font-size: 18px;
  }
  button {
    width: 125px;
    height: 43px;
    margin-left: 20px;
    margin-top: 2vh;
    border: none;
    background-color: #dddddd;
    border-radius: 5px;
    font-size: 16px;
  }
  &:hover {
    transform: scale(1.05) translate3d(0, -1.5vh, 0px);
    box-shadow: 1.5px 6px 16px 0px rgba(0, 0, 0, 0.33);
    button {
      background-color: #532deb;
      color: #f4f4f4;
    }
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 85vw;
  `}
  ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 85vw;
  `}
`;
const ImgContainer = styled.div`
  width: 25vw;
  height: 20vh;
  overflow: hidden;
  ${({ img }) => img && ` background-image: url(${img});`}
  background-size:cover;
  background-position: center center;
  box-shadow: 1.5px 6px 5px 0px rgba(0, 0, 0, 0.13);
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 85vw;
  `}
  ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 85vw;
  `}
`;
