import React from "react";
import styled from "styled-components";

export const RoadMap = () => {
  const Container = styled.div`
    width: 100vw;
    /* height: 100vh; */
    background-color: #f6f5f5;
    overflow: hidden;
    position: relative;
    h3 {
      font-size: 32px;
      text-align: center;
      padding-top: 20vh;
    }
    .about-wave {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      transform: translateY(-4vh);
    }
    .about-wave-2 {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-4vh);
    }
  `;
  const Roadmap = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 10vh;
    position: relative;
    svg {
      width: 100%;
      margin: 0 auto;
    }
  `;
  const Card1 = styled.div`
    width: 437px;
    height: 153px;
    border: 3px #2ec069 solid;
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    transform: translate3d(40vw, -63vh, 0);
    transition: all 0.3s ease-in-out;
    padding: 25px 0 25px 50px;
    box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.43);
    h6 {
      font-size: 18px;
    }
    h5 {
      font-size: 22px;
      padding: 0;
      font-weight: normal;
      margin: 1rem 0;
    }
    p {
      font-size: 16px;
    }
    &:hover {
      transform: translate3d(39vw, -62vh, 0);
      box-shadow: 15px 15px 5px -6px rgba(0, 0, 0, 0.23);
    }
  `;
  const Card2 = styled.div`
    width: 437px;
    height: 153px;
    border: 3px #f3387b solid;
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    right: 0;
    transform: translate3d(-50vw, -43vh, 0);
    padding: 25px 50px 25px 0px;
    text-align: right;
    transition: all 0.3s ease-in-out;
    box-shadow: -15px 12px 7px -6px rgba(0, 0, 0, 0.35);
    h6 {
      font-size: 18px;
    }
    h5 {
      font-size: 22px;
      padding: 0;
      font-weight: normal;
      margin: 1rem 0;
    }
    p {
      font-size: 16px;
    }
    &:hover {
      transform: translate3d(-49vw, -44vh, 0);
      box-shadow: -17px 13px 9px -6px rgba(0, 0, 0, 0.23);
    }
  `;
  const Card3 = styled.div`
    width: 437px;
    height: 153px;
    border: 3px #3b38f3 solid;
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    transform: translate3d(40vw, -23vh, 0);
    padding: 25px 0 25px 50px;
    transition: all 0.3s ease-in-out;
    box-shadow: -8px -8px 9px -6px rgba(0, 0, 0, 0.35);
    h6 {
      font-size: 18px;
    }
    h5 {
      font-size: 22px;
      padding: 0;
      font-weight: normal;
      margin: 0;
      margin: 1rem 0;
    }
    p {
      font-size: 16px;
    }
    &:hover {
      transform: translate3d(41vw, -22vh, 0);
      box-shadow: -14px -14px 5px -6px rgba(0, 0, 0, 0.23);
    }
  `;
  return (
    <Container>
      <svg
        className="about-wave"
        width="1440"
        height="254"
        viewBox="0 0 3130 354"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#F7D7FF" fill-opacity="0.67">
          <animate
            dur="10s"
            fill="freeze"
            repeatDur="indefinite"
            attributeName="d"
            values="
           M3138 0H0V172.515C281.406 230.523 1041.24 47.3326 1737.52 191.628C2520.87 353.968 3138 213.758 3138 213.758V0Z; 
           M3140 0H0V214.852C281.585 287.096 1023.53 392.998 1738.62 238.655C2453.72 84.3123 2970.83 192.72 3140 266.216V0Z;
         M3138 0H0V172.515C281.406 230.523 1041.24 47.3326 1737.52 191.628C2520.87 353.968 3138 213.758 3138 213.758V0Z
           "
          />
        </path>
      </svg>
      {/* <svg
        className="about-wave-2"
        width="1440"
        height="254"
        viewBox="0 0 3130 354"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#F7D7FF" fill-opacity="0.57">
          <animate
            dur="10s"
            fill="freeze"
            repeatDur="indefinite"
            attributeName="d"
            values="
            M3140 0H0V214.852C281.585 287.096 1023.53 392.998 1738.62 238.655C2453.72 84.3123 2970.83 192.72 3140 266.216V0Z;
            M3138 0H0V172.515C281.406 230.523 1041.24 47.3326 1737.52 191.628C2520.87 353.968 3138 213.758 3138 213.758V0Z; 
            
            M3140 0H0V214.852C281.585 287.096 1023.53 392.998 1738.62 238.655C2453.72 84.3123 2970.83 192.72 3140 266.216V0Z
           "
          />
        </path>
      </svg> */}

      <h3>My Experience Roadmap</h3>
      <Roadmap>
        <svg
          width="990"
          height="638"
          viewBox="0 0 990 638"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="402.5" x2="402.5" y2="638" stroke="black" />
          <circle cx="401.5" cy="73.5" r="14.5" fill="#2EC069" />
          <circle cx="401.5" cy="249.5" r="14.5" fill="#F3387B" />
          <path
            d="M416 437.5C416 445.508 409.508 452 401.5 452C393.492 452 387 445.508 387 437.5C387 429.492 393.492 423 401.5 423C409.508 423 416 429.492 416 437.5Z"
            fill="#3C38F3"
          />
          <path
            d="M787.01 373C786.634 357.378 797.109 330.445 842.014 347.692C886.918 364.939 884.753 330.882 878.057 311.698C864.603 290.077 852.827 252.758 913.35 276.454C973.873 300.15 962.972 261.956 949.956 239.898C938.005 215.902 928.481 175.109 986 203.904"
            stroke="#EA67FF"
            stroke-opacity="0.37"
            stroke-width="14"
          />
          <rect
            x="58.6472"
            y="524.014"
            width="27.5363"
            height="27.5363"
            transform="rotate(-24.3799 58.6472 524.014)"
            stroke="#82FFE8"
            stroke-width="4"
          />
          <path
            d="M29.5524 116.565L42.6577 134.408L63.6774 127.458L50.7573 145.436L63.8626 163.279L42.7722 156.547L29.8521 174.524L29.7376 152.386L8.64718 145.654L29.6668 138.703L29.5524 116.565Z"
            fill="#FFEA9F"
            fill-opacity="0.54"
          />
          <path
            d="M116.476 75.8002L120.483 103.16L147.742 107.804L122.959 120.07L126.966 147.43L107.642 127.651L82.8595 139.916L95.6997 115.426L76.3761 95.6464L103.635 100.29L116.476 75.8002Z"
            fill="#3D86F3"
            fill-opacity="0.54"
          />
          <path
            d="M85.502 164.435L96.3466 166.74L101.89 157.139L103.049 168.165L113.893 170.47L103.765 174.979L104.924 186.005L97.5055 177.766L87.3771 182.276L92.9206 172.674L85.502 164.435Z"
            fill="#92F2FF"
            fill-opacity="0.54"
          />
        </svg>
        <Card1>
          <h6>2012-2016</h6>
          <h5>Team Lead- Process Improvement</h5>
          <p>Groupon Inc</p>
        </Card1>
        <Card2>
          <h6>2016-2018</h6>
          <h5>Frontend Developer</h5>
          <p>Groupon Inc</p>
        </Card2>
        <Card3>
          <h6>2018 - present</h6>
          <h5>Web Developer</h5>
          <p>Freelancer</p>
        </Card3>
      </Roadmap>
    </Container>
  );
};
