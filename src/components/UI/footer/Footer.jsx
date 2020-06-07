import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Footer = () => {
  const Container = styled.div`
    background-color: #532deb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100vw;
    p {
      color: #fff;
      padding: 10vh 0 2vh 0;
      text-align: center;
    }
    div {
      padding-top: 15vh;
    }
    ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    /* display:none; */
  `}
  `;
  const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-content: center;
  `;

  return (
    <Container>
      <IconContainer>
        <a href="mailto:lakaganth89@gmail.com">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8602 8.12003C20.6876 8.12003 23.3455 9.37032 25.2972 11.3267V11.3329C25.2972 10.394 25.9293 9.68636 26.8065 9.68636H27.03C28.4037 9.68636 28.6842 10.9844 28.6842 11.3961L28.692 26.0034C28.5948 26.9607 29.6786 27.4541 30.2783 26.8405C32.6232 24.4293 35.4306 14.4486 28.8199 8.66424C22.6594 3.27303 14.3945 4.16103 9.9977 7.19195C5.32491 10.4156 2.33408 17.5489 5.24012 24.2489C8.4067 31.5564 17.4671 33.7333 22.8521 31.5626C25.5793 30.4603 26.8389 34.1464 24.0068 35.3505C19.7272 37.1758 7.81625 36.9908 2.25391 27.3523C-1.50621 20.8449 -1.3058 9.39345 8.66416 3.46111C16.2908 -1.07601 26.3471 0.180447 32.4089 6.51207C38.7467 13.132 38.3782 25.527 32.1946 30.3478C29.395 32.5369 25.2325 30.4048 25.2602 27.2167L25.2309 26.1714C23.2807 28.1077 20.6861 29.2362 17.8587 29.2362C12.2701 29.2362 7.35529 24.3199 7.35529 18.7344C7.35529 13.0934 12.2717 8.12003 17.8602 8.12003ZM24.8917 18.3305C24.6805 14.2404 21.645 11.7799 17.9789 11.7799H17.8402C13.6083 11.7799 11.2603 15.1084 11.2603 18.887C11.2603 23.122 14.1001 25.7952 17.8217 25.7952C21.9734 25.7952 24.7037 22.7535 24.901 19.1568L24.8917 18.3305Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://twitter.com/lakaganth">
          <svg
            width="37"
            height="31"
            viewBox="0 0 37 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.9291 4.04394C35.5647 4.64365 34.1078 5.05219 32.5739 5.23873C34.1371 4.29677 35.3396 2.81215 35.9085 1.04077C34.4424 1.8964 32.8175 2.51923 31.0877 2.8661C29.7064 1.38765 27.7377 0.462646 25.5516 0.462646C21.3629 0.462646 17.9666 3.85894 17.9666 8.04302C17.9666 8.64427 18.036 9.22239 18.1624 9.77585C11.857 9.47831 6.26842 6.45048 2.52833 1.87327C1.87004 2.98635 1.50158 4.27981 1.50158 5.6889C1.50158 8.32515 2.84283 10.6423 4.87475 12.0036C3.63062 11.9635 2.4605 11.6212 1.43992 11.0539V11.1479C1.43992 14.8248 4.04996 17.8912 7.52333 18.5896C6.88662 18.7607 6.21446 18.8532 5.52533 18.8532C5.04125 18.8532 4.57721 18.8069 4.11317 18.7206C5.08596 21.7315 7.88254 23.9268 11.211 23.9885C8.621 26.0219 5.33879 27.2337 1.80375 27.2337C1.2025 27.2337 0.602792 27.1982 0 27.1304C3.37471 29.2795 7.35067 30.5359 11.6504 30.5359C25.6086 30.5359 33.2322 18.9796 33.2322 8.97419C33.2322 8.65198 33.2322 8.32669 33.209 8.00294C34.6906 6.94073 35.984 5.59794 37.0015 4.07477L36.9291 4.04394Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/lakshmi-ganth/">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5225 31.5302H26.0434V22.9446C26.0434 20.8973 26.0017 18.2626 23.1882 18.2626C20.3315 18.2626 19.8952 20.4903 19.8952 22.7935V31.5302H14.4161V13.875H19.6794V16.2815H19.7503C20.4857 14.894 22.274 13.4295 24.9457 13.4295C30.4972 13.4295 31.524 17.0832 31.524 21.8393V31.5302H31.5225ZM8.22787 11.4592C6.46421 11.4592 5.04742 10.0316 5.04742 8.27567C5.04742 6.52125 6.46575 5.09521 8.22787 5.09521C9.98537 5.09521 11.4099 6.52125 11.4099 8.27567C11.4099 10.0316 9.98383 11.4592 8.22787 11.4592ZM10.9751 31.5302H5.48063V13.875H10.9751V31.5302ZM34.2635 0H2.73029C1.221 0 0 1.19325 0 2.66554V34.3345C0 35.8083 1.221 37 2.73029 37H34.2589C35.7667 37 37 35.8083 37 34.3345V2.66554C37 1.19325 35.7667 0 34.2589 0H34.2635Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://www.facebook.com/lakaganth">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.9971 18.4986C36.9971 8.28208 28.7151 0 18.4986 0C8.28208 0 0 8.28208 0 18.4986C0 27.7318 6.76466 35.3846 15.6081 36.7724V23.8459H10.9113V18.4986H15.6081V14.4231C15.6081 9.7869 18.3699 7.22601 22.5953 7.22601C24.6192 7.22601 26.7362 7.5873 26.7362 7.5873V12.1397H24.4037C22.1056 12.1397 21.3889 13.5656 21.3889 15.0285V18.4986H26.5194L25.6993 23.8459H21.3889V36.7724C30.2325 35.3846 36.9971 27.7318 36.9971 18.4986Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="skype:lakagant89">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6064 29.0974C12.4043 29.0974 9.63387 26.0465 9.63387 23.7571C9.63387 22.5777 10.4987 21.7591 11.6889 21.7591C14.3452 21.7591 13.6515 25.5778 18.6064 25.5778C21.1362 25.5778 22.5376 24.198 22.5376 22.7858C22.5376 21.9364 22.1229 20.9975 20.4502 20.5828L14.9372 19.203C10.4972 18.0868 9.69092 15.6787 9.69092 13.4202C9.69092 8.72275 14.1016 6.95908 18.2456 6.95908C22.0551 6.95908 26.5598 9.07579 26.5598 11.8909C26.5598 13.0995 25.4992 13.8025 24.3198 13.8025C22.0551 13.8025 22.4729 10.6622 17.9003 10.6622C15.6356 10.6622 14.3668 11.6858 14.3668 13.155C14.3668 14.6242 16.1443 15.0945 17.6922 15.4475L21.7575 16.3525C26.2145 17.353 27.3445 19.9692 27.3445 22.4328C27.3445 26.25 24.4123 29.099 18.5231 29.099L18.6064 29.0974ZM35.611 21.5725L35.5662 21.7807L35.4984 21.4107C35.5215 21.48 35.5662 21.5247 35.5894 21.5957C35.7744 20.555 35.8684 19.4944 35.8684 18.4322C35.8684 16.075 35.4044 13.7887 34.484 11.618C33.6068 9.53983 32.3334 7.66825 30.7424 6.07417C29.1252 4.48163 27.2783 3.21283 25.2001 2.33408C23.1682 1.36129 20.8819 0.900333 18.5278 0.900333C17.4177 0.900333 16.3016 1.00825 15.224 1.21483L15.4074 1.30733L15.039 1.25646L15.2224 1.21792C13.7362 0.422417 12.0697 0 10.377 0C7.61892 0 5.02737 1.07608 3.07562 3.03246C1.12387 4.98729 0.0493317 7.58962 0.0493317 10.3538C0.0493317 12.116 0.499498 13.8457 1.3505 15.3766L1.38133 15.1854L1.44454 15.5539L1.35204 15.3766C1.17629 16.371 1.08687 17.3792 1.08687 18.3905C1.08687 20.7493 1.54937 23.0417 2.44971 25.1985C3.32537 27.2983 4.57412 29.1699 6.19133 30.7624C7.78542 32.3812 9.65546 33.6253 11.7336 34.5272C13.8827 35.4522 16.169 35.9116 18.5231 35.9116C19.5391 35.9116 20.5797 35.8191 21.571 35.6356L21.3875 35.54L21.7575 35.611L21.5494 35.6572C23.0942 36.5344 24.827 37 26.6277 37C29.3765 37 31.9603 35.9362 33.9244 33.9737C35.8653 32.0327 36.9491 29.4242 36.9491 26.6523C36.9491 24.8979 36.4882 23.1651 35.6341 21.6173"
              fill="white"
            />
          </svg>
        </a>
      </IconContainer>
      <p>&copy; Designed and Developed by Lakshmi Mohan</p>
    </Container>
  );
};

export default Footer;
