import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import "./HomeComponents.scss";

const SubscribeContainer = () => {
  return (
    <Container>
      <SubContainer>
        <h3>Newsletter</h3>
        <p>Subscribe to my blog post and get updated to latest news</p>
        <form>
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </form>
      </SubContainer>
    </Container>
  );
};

export default SubscribeContainer;

const Container = styled.div`
  background-color: #f8f2ff;
  z-index: 20;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
     display:none;
  `}
`;
const SubContainer = styled.div`
  width: 60vw;
  /* height: 297px; */
  background-color: #fff;
  margin: 0 auto;
  border-radius: 10px;
  transform: translate3d(0, 10vh, 0);
  text-align: center;
  padding: 4vh 0;
  box-shadow: 10px 10px 20px -8px rgba(0, 0, 0, 0.61);

  h3 {
    font-size: 42px;
    font-weight: normal;
  }
  p {
    font-size: 32px;
    font-family: "Marvel";
  }
  input {
    width: 40%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 45px;
    margin-top: 5vh;
    padding-left: 5vw;
    font-family: "Marvel";
    font-size: 24px;
    border: 1px black solid;
  }
  button {
    margin-top: 5vh;
    width: 30%;
    height: 45px;
    font-family: "Monda";
    font-size: 18px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #532deb;
    color: #fff;
    transform: translateY(-2px);
  }
`;
