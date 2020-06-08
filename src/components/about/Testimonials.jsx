import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import ReactCardCarousel from "react-card-carousel";

const Testimonials = () => {
  const Container = styled.div`
    width: 100vw;
    background-color: #fff;
    height: 100vh;
    position: relative;
    overflow: hidden;

    svg {
      z-index: -10;
    }
    h3 {
      font-size: 32px;
      text-align: center;
      padding-top: 5vh;
    }
    .purple-triangle {
      /* position: absolute; */
      transform: translateX(20vw) translateY(20vh);
    }
    .green-circle {
      transform: translateX(70vw) translateY(30vh);
    }
    .blue-circle {
      transform: translateX(30vw) translateY(-10vh);
    }
    ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    .green-circle{
      transform: translateX(10vw) translateY(0vh);
    } 
    ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    h3 {
      font-size: 52px;  
      padding-top: 1vh;
    }
    .green-circle{
      transform: translateX(-100vw) translateY(0vh);
    } 
  `}

  `}
  `;
  const CardStack = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    padding-top: 20vh;
    ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    padding-top: 50vh;
  `}
    ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    padding-top: 50vh;
  `}
  `;
  const Card = styled.div`
    height: 45vh;
    width: 35vw;
    background-color: #f8f8f8;
    border-radius: 10px;
    text-align: center;
    h5 {
      font-size: 24px;
      padding: 1.2rem 0;
    }
    h6 {
      font-size: 20px;
      font-weight: normal;
      color: #7c7878;
      padding-bottom: 1.2rem;
    }
    p {
      font-size: 18px;
      width: 80%;
      margin: 0 auto;
      padding: 1.2rem 0;
    }
    ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 85vw;
    height: 75vh;
    /* margin-top: 10vh; */
    h5 {
      font-size: 34px;     
    }
    h6 {
      font-size: 30px;     
    }
    p {
      font-size: 24px;     
    }
  `}
    ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 55vw;
    height: 75vh;
    h5 {
      font-size: 44px;     
    }
    h6 {
      font-size: 40px;     
    }
    p {
      font-size: 28px;     
    }
  `}
  `;

  return (
    <Container>
      <h3>Testimonials</h3>
      <svg
        className="purple-triangle"
        width="130"
        height="125"
        viewBox="0 0 130 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.55995 72.6901L86.1052 28.7097L82.9207 122.186L3.55995 72.6901Z"
          stroke="#D357FF"
          stroke-width="3"
        />
      </svg>
      <svg
        className="green-circle"
        width="170"
        height="170"
        viewBox="0 0 170 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="85" cy="85" r="83" stroke="#9DFF70" stroke-width="4" />
      </svg>

      <CardStack>
        <ReactCardCarousel autoplay={false} autoplay_speed={5500}>
          <Card>
            <h5>Guruprakash</h5>
            <h6>CEO at School of Sports</h6>
            <svg
              width="55"
              height="37"
              viewBox="0 0 55 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5592 4.00005C10.3202 6.92303 0.915303 15.7796 6.40706 24.7457"
                stroke="#C4C4C4"
                stroke-width="8"
              />
              <path
                d="M46.5592 4.33159C42.3202 7.25458 32.9153 16.1111 38.4071 25.0773"
                stroke="#C4C4C4"
                stroke-width="8"
              />
              <rect
                x="1.31126"
                y="14.0289"
                width="22"
                height="22"
                rx="8"
                transform="rotate(1.59927 1.31126 14.0289)"
                fill="#C4C4C4"
              />
              <rect
                x="33"
                y="14.6632"
                width="22"
                height="22"
                rx="8"
                fill="#C4C4C4"
              />
            </svg>
            <p>
              The app was super useful and he is delivered it on time for us
            </p>
          </Card>
          <Card>
            {" "}
            <h5>Harsha</h5>
            <h6>CEO at Amazon</h6>
            <svg
              width="55"
              height="37"
              viewBox="0 0 55 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5592 4.00005C10.3202 6.92303 0.915303 15.7796 6.40706 24.7457"
                stroke="#C4C4C4"
                stroke-width="8"
              />
              <path
                d="M46.5592 4.33159C42.3202 7.25458 32.9153 16.1111 38.4071 25.0773"
                stroke="#C4C4C4"
                stroke-width="8"
              />
              <rect
                x="1.31126"
                y="14.0289"
                width="22"
                height="22"
                rx="8"
                transform="rotate(1.59927 1.31126 14.0289)"
                fill="#C4C4C4"
              />
              <rect
                x="33"
                y="14.6632"
                width="22"
                height="22"
                rx="8"
                fill="#C4C4C4"
              />
            </svg>
            <p>
              The app was super useful and he is delivered it on time for us
            </p>
          </Card>
          <Card>
            {" "}
            <h5>Sathya SA</h5>
            <h6>CEO at Gatestone</h6>
            <svg
              width="55"
              height="37"
              viewBox="0 0 55 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5592 4.00005C10.3202 6.92303 0.915303 15.7796 6.40706 24.7457"
                stroke="#C4C4C4"
                stroke-width="8"
              />
              <path
                d="M46.5592 4.33159C42.3202 7.25458 32.9153 16.1111 38.4071 25.0773"
                stroke="#C4C4C4"
                stroke-width="8"
              />
              <rect
                x="1.31126"
                y="14.0289"
                width="22"
                height="22"
                rx="8"
                transform="rotate(1.59927 1.31126 14.0289)"
                fill="#C4C4C4"
              />
              <rect
                x="33"
                y="14.6632"
                width="22"
                height="22"
                rx="8"
                fill="#C4C4C4"
              />
            </svg>
            <p>
              The app was super useful and he is delivered it on time for us
            </p>
          </Card>
        </ReactCardCarousel>
      </CardStack>
      <svg
        className="blue-circle"
        width="100"
        height="102"
        viewBox="0 0 100 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.96667"
          y="30.1943"
          width="72.2513"
          height="75"
          transform="rotate(-22.9867 1.96667 30.1943)"
          stroke="#21B5C9"
          stroke-opacity="0.42"
          stroke-width="3"
        />
      </svg>
    </Container>
  );
};

export default Testimonials;
