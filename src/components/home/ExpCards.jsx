import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

export const ExpCards = ({
  timeline,
  title,
  company,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
}) => {
  const [showOne, setShowOne] = useState(false);
  const handleOne = () => {
    setShowOne(!showOne);
  };
  return (
    <ExpContainer onClick={handleOne}>
      <ExpOutter className="expone" showOne={showOne}>
        <div>
          <h4>{timeline}</h4>
          <h2>{title}</h2>
          <p>{company}</p>
        </div>
        <div>
          <button onClick={handleOne}>
            <svg
              className="arrow"
              width="51"
              height="38"
              viewBox="0 0 51 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.7714 20.7654C50.7464 19.7878 50.7443 18.2049 49.7667 17.2298L33.836 1.34079C32.8584 0.365762 31.2755 0.367837 30.3004 1.34543C29.3254 2.32302 29.3275 3.90593 30.3051 4.88096L44.4657 19.0045L30.3422 33.1652C29.3671 34.1428 29.3692 35.7257 30.3468 36.7007C31.3244 37.6758 32.9073 37.6737 33.8823 36.6961L49.7714 20.7654ZM1.00328 21.5615L48.0046 21.4999L47.998 16.4999L0.996723 16.5615L1.00328 21.5615Z"
                fill="#3845B9"
              />
            </svg>
          </button>
        </div>
      </ExpOutter>
      <ExpDetail showOne={showOne}>
        <p>{detail1}</p>
        <p>{detail2}</p>
        <p>{detail3}</p>
        {detail4 && <p>{detail4}</p>}
        {detail5 && <p>{detail5}</p>}
      </ExpDetail>
    </ExpContainer>
  );
};

export default ExpCards;

const ExpContainer = styled.div`
  overflow: hidden;
  cursor: pointer;
`;

const ExpOutter = styled.div`
  width: 45vw;
  height: 25vh;
  background-color: #fff;
  margin: 5vh 0;
  padding: 0 2vw 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.43);
  transition: all 0.6s ease-in-out;
  overflow: hidden;
  position: relative;
  h4 {
    color: #707070;
  }
  p {
    color: #707070;
  }
  button {
    ${({ showOne }) =>
      showOne
        ? `
        transform: rotate(90deg);
    `
        : `transform: rotate(0deg);`};
  }

  &:hover {
    background-color: #3845b9;
    color: #fff;
    h4,
    p {
      color: #e4e4e4;
    }
    .arrow path {
      fill: #fff;
    }
  }
  &::before {
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
  &:hover::before {
    height: 180%;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 70%;
    margin: 1vh 2vw;
    h4,h2, p {
      padding-left:5vw;   
  }
 
  `}
`;
const ExpDetail = styled.div`
  /* opacity: 0;
  transform: translateY(-10vh); */
  position: relative;
  transition: 1s;
  background-color: #fff;
  width: 45vw;
  height: 30vh;
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.43);
  p {
    font-size: 16px;
    width: 95%;
    text-align: left;
    position: relative;
    padding-left: 80px;
    padding-top: 2vh;
  }
  p::before {
    position: absolute;
    left: 60px;
    top: 30px;
    content: "";
    width: 5px;
    height: 5px;
    background-color: black;
  }
  ${({ showOne }) =>
    showOne
      ? `transform: translateY(-6vh);
    opacity: 1;
    display:block;    
`
      : `
transform: translateY(-10vh);
    opacity: 0;
    display:none;
`}
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width:  70%;
    height: 60vh;
    transform: translateX(2vw) translateY(-5vh);
  `}
`;
