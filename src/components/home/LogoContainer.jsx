import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

// Logo Imports
import ReactLogo from "../../assets/images/tectLogos/react.svg";
import Redux from "../../assets/images/tectLogos/redux.svg";
import Node from "../../assets/images/tectLogos/nodejs-icon.svg";
import Mongo from "../../assets/images/tectLogos/mongodb.svg";
import ScrollAnimation from "react-animate-on-scroll";

const LogoContainer = () => {
  return (
    <Container>
      <h2>Technology Stack</h2>
      <LogoBox>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={100}
          duration={0.5}
          animateOnce="false"
        >
          <div className="react">
            <img src={ReactLogo} alt="React" />
            <h6>React</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={200}
          duration={0.5}
          animateOnce="false"
        >
          <div className="html">
            <svg
              width="69"
              height="98"
              viewBox="0 0 69 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.8744 19.2108L62.6107 89.8903L34.4551 97.7525L6.37711 89.9011L0.119919 19.2108H68.8744Z"
                fill="#E44D26"
              />
              <path
                d="M34.4971 91.7426L57.2483 85.3894L62.6007 24.9905H34.4971V91.7426Z"
                fill="#F16529"
              />
              <path
                d="M22.3207 42.3305H34.4971V33.6606H12.9141L13.12 35.9866L15.2356 59.8785H34.4971V51.2086H23.1074L22.3207 42.3305V42.3305ZM24.2607 64.2135H15.6202L16.826 77.8266L34.4575 82.7564L34.4971 82.7456V73.7252L34.4594 73.7353L24.8735 71.1281L24.2607 64.2135V64.2135Z"
                fill="#EBEBEB"
              />
              <path
                d="M6.51672 0H10.8909V4.35299H14.8923V0H19.2667V13.182H14.8925V8.76788H10.8911V13.182H6.51699V0H6.51672ZM25.0185 4.37145H21.1683V0H33.2461V4.37145H29.3935V13.182H25.0193V4.37145H25.0191H25.0185ZM35.1628 0H39.7237L42.5293 4.63179L45.3322 0H49.895V13.182H45.5387V6.64826L42.5293 11.3352H42.4539L39.4426 6.64826V13.182H35.1628V0ZM52.0718 0H56.4473V8.82489H62.5986V13.182H52.0716V0H52.0718Z"
                fill="black"
              />
              <path
                d="M34.4675 59.8785H45.0665L44.0671 71.1227L34.4672 73.7326V82.7524L52.1128 77.8266L52.2421 76.3617L54.2651 53.5367L54.475 51.2086H34.4675V59.8785ZM34.4675 42.3093V42.3305H55.2582L55.4307 40.3819L55.8231 35.9866L56.0287 33.6606H34.4675V42.3096V42.3093Z"
                fill="white"
              />
            </svg>

            <h6>HTML</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={300}
          duration={0.5}
          animateOnce="false"
        >
          <div className="redux">
            <img src={Redux} alt="Redux" />
            <h6>Redux</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={400}
          duration={0.5}
          animateOnce="false"
        >
          <div className="sass">
            <svg
              width="129"
              height="96"
              viewBox="0 0 129 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M111.011 55.15C106.501 55.1753 102.596 56.25 99.3201 57.8503C98.1108 55.4753 96.9014 53.4 96.7001 51.8503C96.4733 50.0503 96.1962 48.95 96.4733 46.8003C96.7502 44.65 98.01 41.6 98.01 41.35C97.9845 41.125 97.7326 40.025 95.1377 40C92.5428 39.975 90.3002 40.5 90.0483 41.175C89.7963 41.85 89.2924 43.4 88.9649 45C88.5113 47.35 83.7746 55.675 81.0787 60.05C80.1969 58.35 79.441 56.85 79.2896 55.6498C79.0631 53.85 78.7857 52.7498 79.0631 50.6C79.3403 48.4498 80.6 45.4 80.6 45.15C80.5748 44.925 80.3229 43.825 77.728 43.8C75.1326 43.775 72.8905 44.3 72.6386 44.975C72.3866 45.65 72.1095 47.25 71.5552 48.8C71.0258 50.35 64.727 64.25 63.0893 67.875C62.2578 69.725 61.5274 71.2 60.9981 72.2C60.469 73.2 60.9729 72.275 60.9225 72.375C60.469 73.225 60.217 73.7 60.217 73.7V73.7253C59.8643 74.3503 59.4864 74.95 59.3097 74.95C59.1838 74.95 58.9318 73.275 59.3601 70.9753C60.2923 66.15 62.5599 58.6253 62.535 58.3503C62.535 58.2253 62.9631 56.9 61.0734 56.2253C59.2341 55.5503 58.5793 56.6753 58.4279 56.6753C58.2767 56.6753 58.1507 57.0753 58.1507 57.0753C58.1507 57.0753 60.1916 48.6005 54.2455 48.6005C50.5166 48.6005 45.3767 52.6255 42.832 56.3005C41.2195 57.1755 37.7929 59.0253 34.1648 61.0005C32.7791 61.7505 31.3429 62.5505 29.9824 63.2755L29.7055 62.975C22.4996 55.35 9.17133 49.95 9.72562 39.7C9.92718 35.975 11.2373 26.15 35.3243 14.25C55.0522 4.50003 70.8497 7.17503 73.5957 13.125C77.501 21.625 65.1553 37.425 44.6466 39.7C36.836 40.575 32.7289 37.575 31.6962 36.45C30.6128 35.275 30.4616 35.225 30.0585 35.45C29.4034 35.8 29.8065 36.85 30.0585 37.475C30.6632 39.05 33.1827 41.85 37.4659 43.25C41.2198 44.475 50.3911 45.15 61.477 40.9C73.8983 36.125 83.5985 22.875 80.7514 11.8C77.854 0.525029 59.0079 -3.17497 41.1948 3.10003C30.5873 6.85003 19.0983 12.7 10.8342 20.375C1.00805 29.475 -0.554062 37.425 0.101016 40.725C2.39404 52.5 18.7455 60.175 25.2963 65.85C24.9688 66.0248 24.6664 66.1998 24.3893 66.35C21.1139 67.9498 8.64222 74.425 5.51801 81.2748C1.99066 89.0248 6.0723 94.6 8.7934 95.35C17.2086 97.675 25.8254 93.5 30.4866 86.625C35.1222 79.75 34.5682 70.825 32.4266 66.75L32.3508 66.6L34.9207 65.1C36.5838 64.125 38.2215 63.225 39.6574 62.4498C38.8514 64.6248 38.2717 67.1998 37.9696 70.9498C37.6168 75.35 39.4309 81.0498 41.8244 83.2998C42.8826 84.2745 44.1424 84.2998 44.9235 84.2998C47.6949 84.2998 48.9547 82.0245 50.3405 79.2998C52.0537 75.9748 53.5655 72.1248 53.5655 72.1248C53.5655 72.1248 51.6758 82.5498 56.8408 82.5498C58.7305 82.5498 60.6201 80.1248 61.4768 78.8748V78.8998C61.4768 78.8998 61.5272 78.8248 61.628 78.6498C61.7337 78.4947 61.8345 78.3363 61.9303 78.175V78.125C62.6862 76.825 64.3742 73.85 66.8938 68.925C70.1437 62.575 73.2682 54.625 73.2682 54.625C73.2682 54.625 73.5705 56.575 74.5028 59.775C75.0568 61.6753 76.2662 63.75 77.1984 65.775C76.4425 66.825 75.989 67.4253 75.989 67.4253L76.0142 67.4503C75.4098 68.2503 74.7293 69.1005 74.024 69.9503C71.4541 73.0003 68.3803 76.4755 67.9772 77.4755C67.4985 78.6503 67.5992 79.5253 68.5315 80.2255C69.2117 80.7255 70.4211 80.8253 71.7061 80.7255C74.024 80.5753 75.6365 80.0005 76.4428 79.6503C77.7026 79.2003 79.1387 78.5253 80.5244 77.5253C83.044 75.6755 84.5809 73.0505 84.4297 69.5505C84.3541 67.6255 83.7242 65.7255 82.9432 63.9255C83.1699 63.6005 83.3969 63.2753 83.6235 62.9255C87.6043 57.1503 90.6781 50.8005 90.6781 50.8005C90.6781 50.8005 90.9805 52.7505 91.9127 55.9505C92.3912 57.5755 93.3488 59.3508 94.2055 61.1008C90.4766 64.1258 88.1334 67.6258 87.3272 69.9258C85.8406 74.1758 86.9996 76.1008 89.1916 76.5508C90.174 76.7508 91.5852 76.3008 92.6431 75.8508C93.9533 75.4258 95.5406 74.7005 97.0022 73.6258C99.5217 71.7758 101.94 69.2008 101.814 65.7258C101.739 64.1258 101.311 62.5508 100.731 61.0508C103.906 59.7508 108.012 59.0008 113.228 59.6258C124.44 60.9258 126.657 67.8758 126.229 70.7758C125.801 73.676 123.457 75.2758 122.676 75.7758C121.895 76.2508 121.643 76.426 121.719 76.7758C121.82 77.301 122.172 77.2758 122.853 77.176C123.785 77.0258 128.748 74.801 128.95 69.4513C129.252 62.5753 122.676 55.0753 111.011 55.15V55.15ZM24.5405 84.075C20.8368 88.1 15.6213 89.625 13.4041 88.325C11.0106 86.95 11.9426 81.025 16.5032 76.75C19.2746 74.15 22.8776 71.75 25.2459 70.275C25.775 69.95 26.5813 69.4753 27.5387 68.9C27.6899 68.8003 27.7907 68.75 27.7907 68.75C27.967 68.65 28.1686 68.525 28.3701 68.4C30.0582 74.5 28.4457 79.85 24.5405 84.075V84.075ZM51.6254 65.8C50.3405 68.925 47.6194 76.95 45.9817 76.5C44.5705 76.125 43.7141 70.05 45.7043 64.05C46.7121 61.0248 48.8537 57.425 50.1134 56.0248C52.1545 53.7748 54.3715 53.0248 54.926 53.9498C55.5811 55.15 52.4317 63.85 51.6254 65.8ZM73.9737 76.4C73.4194 76.6753 72.9155 76.875 72.6887 76.7253C72.5123 76.6253 72.9152 76.2503 72.9152 76.2503C72.9152 76.2503 75.7119 73.2753 76.8205 71.9003C77.4504 71.1005 78.2062 70.1755 79.0125 69.1253V69.4253C79.0127 73.025 75.5358 75.425 73.9737 76.4ZM91.207 72.5C90.8039 72.2 90.8545 71.275 92.2148 68.375C92.7442 67.225 93.9533 65.3 96.0445 63.475C96.2964 64.225 96.4479 64.9498 96.4224 65.625C96.3975 70.125 93.1725 71.8 91.207 72.5Z"
                  fill="#CF649A"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="129" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h6>SASS</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={500}
          duration={0.5}
          animateOnce="false"
        >
          <div className="native">
            <svg
              width="102"
              height="92"
              viewBox="0 0 102 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.3004 46.1C0.3004 38.414 7.77597 31.2392 19.5613 27.1948C17.2078 15.3 19.1397 5.71237 25.5918 1.97677C32.2235 -1.86323 42.1035 0.794765 51.4811 9.02477C60.6221 1.12717 69.8603 -1.98083 76.3067 1.76557C82.9325 5.61637 84.9473 15.854 82.5289 28.1204C94.8042 32.1948 101.671 38.3128 101.671 46.1C101.671 53.6076 94.1815 60.1024 82.5548 64.1208C85.1585 76.894 82.9524 86.2488 76.233 90.1388C69.7551 93.8892 60.4094 90.6204 51.1341 82.5164C41.4844 91.118 32.231 93.744 25.5188 89.8432C19.0469 86.082 17.2002 76.32 19.5613 64.2052C8.17359 60.2192 0.3004 53.5772 0.3004 46.1Z"
                fill="white"
              />
              <path
                d="M80.0925 60.1304C79.1343 60.4604 78.168 60.7661 77.1944 61.0472C77.3559 61.7058 77.5052 62.3674 77.6423 63.0316C79.836 73.7228 78.4016 82.3356 73.5035 85.1708C68.8073 87.89 61.1265 85.0548 53.3693 78.2776C52.6049 77.6083 51.8575 76.9196 51.1277 76.2124C50.6391 76.6827 50.1418 77.1438 49.6361 77.5956C41.5063 84.8428 33.3574 87.8964 28.4644 85.0528C23.7726 82.326 22.3829 74.2288 24.3578 64.0968C24.5543 63.0934 24.7762 62.0952 25.0232 61.1032C23.8702 60.7744 22.7566 60.424 21.6912 60.0512C12.1602 56.7152 6.07312 51.4864 6.07312 46.0632C6.07312 40.4616 12.6072 34.8432 22.5351 31.4368C23.3401 31.1619 24.1518 30.9071 24.9694 30.6728C24.7038 29.604 24.468 28.528 24.2622 27.446C22.3793 17.49 23.8499 9.58479 28.5293 6.87479C33.3626 4.07679 41.4744 6.9528 49.3735 13.8848C49.9978 14.4328 50.6245 15.014 51.2521 15.6232C52.0424 14.8576 52.8539 14.1142 53.6856 13.394C61.3369 6.78399 68.8933 4.11479 73.5688 6.83199C78.3977 9.63839 79.9666 18.1308 77.9291 28.4632C77.7737 29.2524 77.5925 30.0584 77.3893 30.8792C77.959 31.048 78.518 31.2224 79.0634 31.404C89.3841 34.8368 96.0987 40.3868 96.0987 46.0632C96.0987 51.506 89.8156 56.77 80.0925 60.1304V60.1304Z"
                fill="#9053DE"
              />
              <path
                d="M77.8538 35.0688C77.3618 34.9052 76.8566 34.7472 76.3418 34.594C75.2023 38.2152 73.6644 42.066 71.7831 46.044C73.5788 49.928 75.0569 53.7292 76.1645 57.3272C77.0853 57.0592 77.9793 56.7772 78.8407 56.4792C87.1717 53.6004 92.2532 49.3432 92.2532 46.0632C92.2532 42.5692 86.7649 38.0332 77.8542 35.0688H77.8538ZM74.1565 27.7132C75.0573 23.1444 75.186 19.0136 74.5892 15.7844C74.0529 12.8828 72.9748 10.9484 71.6417 10.1736C68.8045 8.52481 62.737 10.668 56.1941 16.3208C55.4439 16.9688 54.6881 17.6608 53.9303 18.3928C56.467 21.1784 59.0022 24.4168 61.4763 28.0128C65.8287 28.4004 69.9404 29.0344 73.6692 29.8996C73.8525 29.1556 74.0158 28.4264 74.1565 27.7132V27.7132ZM36.7647 10.4584C33.9929 9.47561 31.7852 9.44761 30.4509 10.22C27.611 11.864 26.4309 18.212 28.0409 26.726C28.2323 27.7322 28.4515 28.7328 28.6983 29.7268C32.3857 28.908 36.4675 28.3188 40.8302 27.9636C43.3207 24.4448 45.9292 21.2104 48.558 18.378C47.9993 17.8354 47.4274 17.3067 46.8427 16.7924C43.3498 13.7268 39.8497 11.5524 36.7651 10.4584H36.7647ZM23.779 35.0904C19.3892 36.5968 15.7639 38.5544 13.279 40.6904C11.0462 42.6104 9.9187 44.5164 9.9187 46.0632C9.9187 49.354 14.8061 53.552 22.9574 56.4052C23.9805 56.7618 25.0138 57.0882 26.0559 57.384C27.1827 53.7052 28.6604 49.8588 30.4437 45.9692C28.6373 42.0216 27.1384 38.114 26.0014 34.392C25.255 34.6065 24.5139 34.8394 23.779 35.0904V35.0904ZM28.1321 64.8384C26.44 73.5196 27.5636 80.068 30.3912 81.7112C33.4032 83.4616 40.0628 80.9656 47.0822 74.7084C47.5308 74.3084 47.9814 73.8896 48.4328 73.4564C45.8176 70.6368 43.2331 67.4268 40.764 63.9284C36.53 63.5344 32.4769 62.9016 28.7509 62.054C28.5213 62.9769 28.315 63.9055 28.1321 64.8388V64.8384ZM66.965 55.2116C66.0849 56.7378 65.1722 58.2448 64.2274 59.7316C67.1001 59.3676 69.8519 58.8836 72.4361 58.2912C71.6604 55.7948 70.6934 53.1844 69.5547 50.5084C68.7228 52.0933 67.8593 53.6613 66.965 55.2116V55.2116ZM51.129 70.6972C52.9027 68.768 54.6793 66.6136 56.4268 64.2764C52.882 64.4446 49.3314 64.4454 45.7865 64.2788C47.5356 66.5944 49.3273 68.7456 51.129 70.6972V70.6972ZM35.1913 55.1852C34.3082 53.6473 33.4609 52.0888 32.6502 50.5112C31.5302 53.178 30.572 55.8 29.7895 58.332C32.3582 58.9092 35.0973 59.3808 37.9512 59.7388C36.9959 58.2428 36.0757 56.7245 35.1913 55.1852V55.1852ZM38.0333 32.112C35.085 32.4424 32.3044 32.89 29.7366 33.4512C30.5314 36.028 31.5107 38.7064 32.6546 41.4304C33.4687 39.8516 34.3197 38.2922 35.2069 36.7536C36.1121 35.1841 37.0545 33.6364 38.0333 32.112V32.112ZM51.2353 21.1564C49.4126 23.1312 47.5946 25.3152 45.8188 27.6644C47.5424 27.5964 49.2998 27.562 51.0859 27.562C52.9211 27.562 54.7351 27.6032 56.5204 27.6832C54.7673 25.2912 52.9971 23.104 51.2353 21.1564ZM69.5914 41.5692C70.7946 38.8156 71.809 36.1516 72.6146 33.6184C70.0041 33.0204 67.1861 32.5388 64.2167 32.1812C65.1682 33.6957 66.0897 35.2291 66.9805 36.7804C67.8861 38.357 68.7566 39.9537 69.5914 41.5692V41.5692ZM63.6489 38.7092C62.2852 36.3308 60.8448 33.9976 59.33 31.7132C56.659 31.5216 53.8988 31.4228 51.0859 31.4228C48.2846 31.4228 45.5594 31.5104 42.935 31.6812C41.381 33.9603 39.9133 36.2975 38.5353 38.688C37.1637 41.0658 35.8825 43.495 34.6945 45.9704C35.8795 48.4465 37.1568 50.8771 38.5237 53.2568V53.256C39.8903 55.6362 41.3463 57.9635 42.8888 60.2328C45.5662 60.436 48.3113 60.5424 51.0863 60.5424C53.8737 60.5424 56.6224 60.4352 59.299 60.2304C60.8259 57.9646 62.2726 55.6454 63.6366 53.2772C65.0082 50.9028 66.3026 48.4842 67.5176 46.0252C66.3151 43.5412 65.0249 41.101 63.6493 38.7092H63.6489ZM71.5827 81.826C74.5971 80.0804 75.7697 73.0416 73.8756 63.8108C73.7515 63.2095 73.6165 62.6104 73.4708 62.014C69.736 62.8792 65.6801 63.5232 61.4337 63.9232C58.9599 67.4596 56.3969 70.6752 53.8239 73.4584C54.4981 74.111 55.1884 74.7466 55.8941 75.3648C62.5405 81.172 68.7523 83.4648 71.5827 81.826V81.826Z"
                fill="white"
              />
              <path
                d="M51.0859 54.134C55.5259 54.134 59.1249 50.5204 59.1249 46.0632C59.1249 41.6056 55.5259 37.992 51.0859 37.992C46.6463 37.992 43.047 41.6056 43.047 46.0632C43.047 50.5204 46.6463 54.134 51.0859 54.134"
                fill="#9053DE"
              />
            </svg>

            <h6>React Native</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={600}
          duration={0.5}
          animateOnce="false"
        >
          <NodeDiv>
            <img src={Node} alt="Node" />

            <h6>NodeJS</h6>
          </NodeDiv>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={700}
          duration={0.5}
          animateOnce="false"
        >
          <div className="postgres">
            <svg
              width="88"
              height="90"
              viewBox="0 0 88 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M87.659 53.8876C87.1313 52.3028 85.7491 51.1991 83.9616 50.9342C83.1187 50.8095 82.1535 50.8626 81.0112 51.0961C79.0202 51.5035 77.5431 51.6586 76.4651 51.6886C80.5341 44.8762 83.8427 37.1077 85.7474 29.7949C88.8274 17.9703 87.1815 12.5834 85.2582 10.1469C80.1683 3.6975 72.7423 0.232846 63.7835 0.126834C59.0043 0.0688855 54.8089 1.00459 52.6202 1.67747C50.5825 1.32092 48.3914 1.12185 46.0924 1.08503C41.7828 1.01686 37.9751 1.94847 34.7215 3.86316C32.9202 3.25913 30.0293 2.40763 26.6908 1.86427C18.8389 0.585993 12.5104 1.58203 7.88149 4.82477C2.27631 8.75097 -0.322101 15.5726 0.158462 25.1C0.311086 28.1249 2.01746 37.3286 4.70421 46.057C6.24834 51.074 7.8949 55.2402 9.59818 58.441C12.0137 62.9797 14.5984 65.6525 17.5 66.6124C19.1262 67.1496 22.0811 67.526 25.189 64.9592C25.5829 65.4323 26.1085 65.9024 26.806 66.339C27.6918 66.893 28.775 67.3457 29.8567 67.6139C33.7552 68.5803 37.4069 68.3386 40.5223 66.984C40.5415 67.5335 40.5563 68.0584 40.5687 68.5118C40.5893 69.2471 40.6099 69.968 40.6371 70.6423C40.8217 75.2011 41.1345 78.7459 42.0612 81.2261C42.1121 81.3624 42.1805 81.5704 42.2527 81.7909C42.7151 83.1946 43.4881 85.5446 45.4551 87.385C47.4918 89.2915 49.9555 89.8761 52.2118 89.8761C53.3435 89.8761 54.4232 89.7289 55.3702 89.5277C58.7458 88.8102 62.5797 87.7174 65.353 83.8014C67.9752 80.0995 69.2498 74.5238 69.4805 65.7384C69.5104 65.4899 69.5379 65.2527 69.5643 65.0267L69.6193 64.5624L70.237 64.6163L70.3962 64.6268C73.8344 64.7823 78.0385 64.0593 80.6204 62.87C82.6605 61.9312 89.1983 58.5085 87.659 53.8876"
                fill="black"
              />
              <path
                d="M81.7802 54.7861C71.5571 56.8774 70.8541 53.4451 70.8541 53.4451C81.6478 37.5627 86.1602 17.4024 82.2666 12.4682C71.6433 -0.991256 53.2544 5.37424 52.9475 5.53923L52.8488 5.55695C50.8289 5.14109 48.5688 4.89361 46.0281 4.85236C41.4026 4.77737 37.8936 6.05497 35.2309 8.05727C35.2309 8.05727 2.42688 -5.34389 3.95278 24.9115C4.27728 31.3479 13.256 73.6133 23.9652 60.8472C27.8795 56.1789 31.6618 52.232 31.6618 52.232C33.54 53.4693 35.7888 54.1006 38.1463 53.8739L38.3295 53.7199C38.2724 54.2994 38.2986 54.8662 38.4027 55.5374C35.6438 58.594 36.4547 59.1306 30.9396 60.2565C25.3588 61.3971 28.6371 63.4273 30.7777 63.9584C33.3726 64.6016 39.3759 65.5131 43.4321 59.8822L43.2706 60.5248C44.3513 61.3834 45.1103 66.1093 44.9831 70.3938C44.8559 74.6779 44.771 77.6193 45.6225 79.9168C46.4747 82.2143 47.3234 87.3837 54.5737 85.8433C60.6317 84.5558 63.7711 81.2196 64.208 75.6545C64.5177 71.6983 65.2193 72.2832 65.2633 68.746L65.8261 67.0716C66.4747 61.7086 65.9292 59.9783 69.6613 60.7831L70.5688 60.8622C73.3153 60.986 76.911 60.4239 79.0212 59.4513C83.5649 57.3604 86.2599 53.8688 81.7795 54.7861H81.7802"
                fill="#336791"
              />
              <path
                d="M37.1511 27.7899C36.2299 27.6628 35.3956 27.7804 34.9735 28.0974C34.7363 28.2757 34.6627 28.4823 34.6428 28.6244C34.5898 29.0011 34.8559 29.4176 35.0195 29.6324C35.4822 30.2405 36.158 30.6584 36.827 30.7504C36.9239 30.7641 37.0205 30.7702 37.1164 30.7702C38.2319 30.7702 39.2463 29.9088 39.3357 29.2731C39.4474 28.4768 38.2817 27.9461 37.1511 27.7903V27.7899ZM67.6706 27.8152C67.5826 27.191 66.4627 27.0131 65.3998 27.1597C64.3383 27.3062 63.3091 27.7814 63.3951 28.4069C63.4638 28.8934 64.3497 29.7237 65.3981 29.7237C65.4868 29.7237 65.5762 29.7179 65.6662 29.7053C66.3661 29.6092 66.8797 29.1684 67.1237 28.9145C67.495 28.5273 67.7102 28.0957 67.6706 27.8152"
                fill="white"
              />
              <path
                d="M85.182 54.5486C84.7921 53.3797 83.5375 53.0037 81.453 53.4305C75.2637 54.6972 73.0472 53.8198 72.3195 53.2884C77.1303 46.0209 81.0879 37.2359 83.2229 29.0396C84.2342 25.157 84.7928 21.5512 84.8386 18.6122C84.8891 15.3865 84.335 13.0161 83.1923 11.568C78.5854 5.73053 71.8238 2.59926 63.6391 2.51336C58.0123 2.45063 53.2582 3.87856 52.3366 4.28011C50.3958 3.80152 48.28 3.50769 45.9766 3.47019C41.7526 3.40236 38.1013 4.40521 35.0783 6.44944C33.7652 5.96471 30.3717 4.80949 26.2216 4.14649C19.0468 3.00115 13.3454 3.86902 9.27678 6.72725C4.42199 10.138 2.18074 16.2349 2.6149 24.8482C2.76099 27.7459 4.42612 36.6605 7.05375 45.1977C10.5126 56.4343 14.2725 62.7954 18.2284 64.104C18.6914 64.2571 19.2252 64.3641 19.8141 64.3641C21.2572 64.3641 23.0264 63.7192 24.8672 61.5246C27.1124 58.8537 29.435 56.2476 31.8319 53.7097C33.3871 54.5373 35.0955 54.9996 36.8428 55.0459C36.8462 55.0913 36.8507 55.1366 36.8548 55.1816C36.554 55.5373 36.2595 55.8981 35.9714 56.2639C34.7607 57.7879 34.5087 58.1053 30.6116 58.9009C29.503 59.1279 26.5588 59.7295 26.5155 61.7762C26.4688 64.0123 29.996 64.9514 30.3978 65.0509C31.7983 65.3986 33.1475 65.5701 34.4341 65.5701C37.5633 65.5701 40.3171 64.5502 42.5178 62.5769C42.45 70.5486 42.7852 78.4037 43.7504 80.797C44.5411 82.7563 46.4723 87.5446 52.5725 87.5443C53.4676 87.5443 54.4528 87.441 55.5366 87.2105C61.9032 85.8573 64.668 83.0669 65.7374 76.9151C66.3097 73.6274 67.2918 65.7767 67.7538 61.5655C68.7287 61.8672 69.9837 62.0052 71.3405 62.0049C74.1703 62.0049 77.4356 61.4087 79.4833 60.4662C81.7836 59.4067 85.9348 56.8072 85.182 54.5486V54.5486ZM70.0205 26.0924C69.9995 27.3355 69.827 28.4642 69.6441 29.6422C69.4471 30.9093 69.2436 32.2192 69.1924 33.8094C69.1419 35.357 69.3368 36.9659 69.5252 38.522C69.9061 41.6649 70.2969 44.9005 68.784 48.0931C68.5327 47.6515 68.3089 47.1952 68.1137 46.7265C67.9257 46.2745 67.5173 45.5485 66.9519 44.5436C64.7522 40.6317 59.6011 31.471 62.238 27.733C63.0235 26.6204 65.0169 25.4764 70.0205 26.0924V26.0924ZM63.9554 5.03072C71.289 5.19127 77.0901 7.91179 81.1972 13.1163C84.3473 17.1083 80.8786 35.2725 70.8366 50.9428C70.7356 50.8155 70.6341 50.6886 70.532 50.5621L70.4048 50.4046C72.9998 46.1549 72.4924 41.9502 72.0407 38.2224C71.8551 36.6925 71.6798 35.2476 71.7245 33.8902C71.7705 32.4517 71.9624 31.2177 72.148 30.0247C72.3759 28.5545 72.6079 27.0332 72.544 25.2398C72.5918 25.0517 72.611 24.8294 72.5859 24.5656C72.4226 22.8459 70.4426 17.699 66.407 13.0406C64.1995 10.4926 60.9802 7.64114 56.5847 5.71792C58.4753 5.32932 61.0607 4.96697 63.9554 5.03072V5.03072ZM22.9192 59.9184C20.8911 62.3366 19.4906 61.873 19.03 61.7209C16.0291 60.7283 12.5469 54.4385 9.47684 44.4645C6.82034 35.8342 5.26796 27.1559 5.1449 24.7224C4.75715 17.0261 6.6385 11.6624 10.737 8.78C17.4072 4.08956 28.3735 6.89701 32.78 8.32084C32.7168 8.38288 32.6508 8.44083 32.5882 8.50389C25.3571 15.7454 25.5286 28.1178 25.5465 28.8742C25.5458 29.166 25.5705 29.5792 25.6042 30.1474C25.7287 32.2284 25.9603 36.1015 25.3416 40.4875C24.7668 44.5633 26.0339 48.5526 28.8173 51.4327C29.1029 51.7277 29.4031 52.0084 29.7168 52.2739C28.478 53.5897 25.7854 56.4994 22.9192 59.9184V59.9184ZM30.6463 49.6945C28.403 47.3732 27.3842 44.1444 27.8506 40.8352C28.5038 36.202 28.2628 32.1667 28.1332 29.9988C28.115 29.6954 28.0988 29.4295 28.0895 29.2199C29.1459 28.291 34.0412 25.6901 37.5323 26.4833C39.1253 26.845 40.096 27.9208 40.4996 29.7711C42.5882 39.3507 40.776 43.3433 39.3199 46.552C39.0198 47.213 38.7362 47.8378 38.4942 48.4841L38.3065 48.9838C37.8314 50.2471 37.3894 51.4217 37.1154 52.5371C34.7304 52.5303 32.4105 51.5199 30.6463 49.6942V49.6945ZM31.0124 62.6137C30.316 62.4412 29.6897 62.1416 29.3222 61.8931C29.6292 61.7499 30.1754 61.5549 31.1228 61.3613C35.7074 60.4256 36.4155 59.765 37.9617 57.8183C38.3161 57.3717 38.7179 56.8659 39.2745 56.2496L39.2752 56.2489C40.1039 55.3285 40.4831 55.4846 41.1706 55.7676C41.7278 55.9959 42.2706 56.6886 42.4906 57.4508C42.5948 57.8108 42.7116 58.4939 42.329 59.0256C39.0992 63.5102 34.3925 63.4526 31.0124 62.6137V62.6137ZM55.0059 84.7542C49.3972 85.9459 47.4114 83.1081 46.1027 79.864C45.2581 77.7697 44.8429 68.3254 45.1375 57.8956C45.1413 57.7569 45.1213 57.6229 45.0828 57.4968C45.0484 57.2478 44.996 57.0015 44.9261 56.7598C44.4881 55.2423 43.4208 53.9729 42.1403 53.4465C41.6316 53.2376 40.6979 52.8541 39.5759 53.1387C39.8152 52.1611 40.2301 51.057 40.6801 49.8616L40.8688 49.3588C41.0812 48.7919 41.348 48.2046 41.6299 47.5828C43.1537 44.2259 45.2406 39.6278 42.9756 29.2403C42.1273 25.3496 39.2941 23.4496 34.9993 23.891C32.4246 24.1552 30.0688 25.1853 28.8939 25.776C28.6413 25.9028 28.4103 26.0255 28.1944 26.1448C28.5223 22.2248 29.7612 14.8987 34.3956 10.2635C37.3137 7.3456 41.1998 5.90438 45.9346 5.9821C55.264 6.13345 61.2466 10.8812 64.623 14.8377C67.5325 18.2468 69.1079 21.6811 69.7366 23.5334C65.0083 23.0565 61.7925 23.982 60.1625 26.2931C56.616 31.3204 62.1026 41.0776 64.7395 45.767C65.2231 46.6263 65.6405 47.3691 65.7718 47.6847C66.6305 49.7484 67.7421 51.1262 68.5537 52.1318C68.8026 52.4399 69.0439 52.7389 69.2275 53C67.7954 53.4094 65.2231 54.3553 65.4576 59.0836C65.2685 61.4561 63.9241 72.5638 63.2411 76.4883C62.3394 81.673 60.4155 83.6041 55.0059 84.7545V84.7542ZM78.4166 58.1878C76.9522 58.8617 74.5016 59.3672 72.1738 59.4759C69.6025 59.5952 68.2935 59.1903 67.9855 58.9411C67.8411 55.9946 68.947 55.6868 70.1175 55.3609C70.3014 55.3098 70.4808 55.2597 70.654 55.1997C70.7616 55.2866 70.8795 55.3728 71.0088 55.4574C73.0754 56.81 76.7615 56.9559 81.9655 55.8906L82.0226 55.8794C81.3206 56.5301 80.1196 57.4034 78.4166 58.1878Z"
                fill="white"
              />
            </svg>

            <h6>Postgresql</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={800}
          duration={0.5}
          animateOnce="false"
        >
          <div className="graphql">
            <svg
              width="79"
              height="90"
              viewBox="0 0 79 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.084 10.3047L65.3361 20.9755C65.863 20.4109 66.4677 19.9264 67.1315 19.5369C70.9167 17.3333 75.7449 18.6416 77.9437 22.4747C80.1199 26.3078 78.8278 31.1963 75.0423 33.4227C74.3835 33.8068 73.6735 34.0931 72.9343 34.2726V55.622C73.6655 55.8018 74.3677 56.0861 75.0198 56.4663C78.8278 58.6926 80.1199 63.5815 77.9212 67.4146C75.7449 71.2473 70.8942 72.5556 67.1086 70.3524C66.3753 69.9264 65.7146 69.3833 65.1522 68.7441L47.0112 79.3493C47.2768 80.1639 47.4118 81.0163 47.4108 81.8741C47.4108 86.2808 43.8749 89.8845 39.5 89.8845C35.1251 89.8845 31.5892 86.3036 31.5892 81.8741C31.5892 81.0867 31.7009 80.3261 31.9092 79.6077L13.6621 68.9401C13.1409 69.4934 12.5447 69.969 11.8913 70.3524C8.0833 72.5556 3.25504 71.2473 1.07884 67.4146C-1.09705 63.5815 0.195027 58.6926 3.98024 56.4663C4.63232 56.0861 5.33452 55.8017 6.06571 55.6217V34.2726C5.32645 34.0931 4.61651 33.8068 3.95771 33.4227C0.172191 31.2195 -1.11989 26.3078 1.05631 22.4747C3.23252 18.6416 8.08299 17.3333 11.8685 19.5369C12.5286 19.9243 13.1304 20.4057 13.6553 20.9664L31.9126 10.2928C31.6974 9.55315 31.5885 8.78598 31.5892 8.0149C31.5892 3.58565 35.1251 0.00476074 39.5 0.00476074C43.8749 0.00476074 47.4108 3.58534 47.4108 8.0149C47.4108 8.81107 47.2966 9.57943 47.084 10.3047ZM45.1824 13.5925L63.478 24.2883C63.1867 25.3194 63.1032 26.3994 63.2324 27.4639C63.3615 28.5284 63.7009 29.5558 64.2301 30.4848C65.3438 32.4465 67.158 33.747 69.1716 34.2538V55.6298C69.0688 55.6551 68.9667 55.6829 68.8652 55.7123L44.9698 13.8065C45.042 13.7365 45.113 13.6653 45.1824 13.5928V13.5925ZM34.0351 13.8112L10.1401 55.7164C10.0368 55.6861 9.93284 55.658 9.8284 55.632V34.2538C11.842 33.747 13.6562 32.4465 14.7699 30.4848C15.3002 29.554 15.6398 28.5245 15.7685 27.4578C15.8972 26.3911 15.8123 25.3091 15.5189 24.2764L33.8092 13.5837C33.883 13.6609 33.9583 13.7368 34.0351 13.8109V13.8112ZM41.7105 15.7094L65.5999 57.6053C65.0527 58.134 64.5837 58.7398 64.2072 59.4041C63.8318 60.0644 63.551 60.7754 63.3734 61.5158H15.6272C15.4493 60.7754 15.1684 60.0644 14.7927 59.4041C14.415 58.7444 13.9469 58.1422 13.4022 57.6156L37.2963 15.7113C38.0127 15.9202 38.7545 16.0258 39.5 16.025C40.2675 16.025 41.009 15.915 41.7105 15.7094ZM45.3503 76.4777L63.5271 65.8513C63.4726 65.6778 63.4239 65.5025 63.3811 65.3257H15.617C15.5917 65.4298 15.5642 65.5329 15.5349 65.6357L33.8006 76.3143C34.5382 75.5377 35.4234 74.9202 36.4029 74.4991C37.3824 74.078 38.4359 73.8619 39.5 73.8639C40.6013 73.862 41.6908 74.0936 42.6984 74.5437C43.706 74.9939 44.6094 75.6527 45.3503 76.4777V76.4777Z"
                  fill="#E535AB"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="79" height="90" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h6>GraphQL</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={900}
          duration={0.5}
          animateOnce="false"
        >
          <div className="firebase">
            <svg
              width="66"
              height="90"
              viewBox="0 0 66 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 72.5583L0.547336 71.7964L26.4327 22.9564L26.4874 22.4393L15.0769 1.12633C14.1204 -0.658955 11.4288 -0.207506 11.1153 1.79107L0 72.5583Z"
                fill="#FFC24A"
              />
              <path
                d="M0.323044 71.9772L0.736833 71.1745L26.3513 22.8461L14.9689 1.44655C14.0229 -0.320022 11.6206 0.130401 11.3102 2.10796L0.323044 71.9772Z"
                fill="#FFA712"
              />
              <g filter="url(#filter0_i)">
                <path
                  d="M0.323044 71.9772L0.736833 71.1745L26.3513 22.8461L14.9689 1.44655C14.0229 -0.320022 11.6206 0.130401 11.3102 2.10796L0.323044 71.9772Z"
                  fill="black"
                />
              </g>
              <path
                d="M34.806 38.5602L43.3022 29.9081L34.8034 13.7754C33.9967 12.2482 31.7442 12.2436 30.946 13.7754L26.4052 22.3857V23.1189L34.8057 38.5602H34.806Z"
                fill="#F4BD62"
              />
              <path
                d="M34.6544 38.1997L42.9144 29.7881L34.6544 14.1484C33.8701 12.6638 31.9646 12.5082 31.1886 13.9971L26.624 22.7413L26.4874 23.1884L34.6544 38.1997Z"
                fill="#FFA50E"
              />
              <g filter="url(#filter1_i)">
                <path
                  d="M34.6544 38.1997L42.9144 29.7881L34.6544 14.1484C33.8701 12.6638 31.9646 12.5082 31.1886 13.9971L26.624 22.7413L26.4874 23.1884L34.6544 38.1997Z"
                  fill="black"
                />
              </g>
              <path
                d="M0 72.5581L0.248016 72.31L1.14933 71.9459L34.2723 39.1319L34.692 37.996L26.4291 22.3391L0 72.5581Z"
                fill="#F6820C"
              />
              <path
                d="M35.8671 89.1069L65.8443 72.4828L57.2839 20.0585C57.016 18.4184 54.9924 17.77 53.8117 18.9459L0 72.5581L29.8052 89.1056C30.7316 89.62 31.775 89.8901 32.836 89.8903C33.897 89.8905 34.9405 89.6208 35.8671 89.1069Z"
                fill="#FDE068"
              />
              <path
                d="M65.5757 72.3434L57.0802 20.3173C56.8147 18.6894 55.1317 18.0159 53.9599 19.1831L0.332588 72.4562L29.8106 88.8396C30.73 89.35 31.7654 89.6181 32.8183 89.6184C33.8713 89.6186 34.9068 89.3511 35.8264 88.8411L65.5759 72.3431L65.5757 72.3434Z"
                fill="#FCCA3F"
              />
              <path
                d="M35.8669 88.617C34.9403 89.1308 33.8968 89.4005 32.8359 89.4003C31.7749 89.4 30.7316 89.1299 29.8052 88.6157L0.240025 72.3061L0.000259399 72.5581L29.8052 89.1056C30.7316 89.6199 31.775 89.89 32.836 89.8902C33.897 89.8905 34.9405 89.6208 35.8671 89.1068L65.8443 72.4827L65.7708 72.0336L35.8671 88.6172L35.8669 88.617Z"
                fill="#EEAB37"
              />
              <defs>
                <filter
                  id="filter0_i"
                  x="0.323044"
                  y="0.342529"
                  width="26.0282"
                  height="71.6346"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="124.619" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
                <filter
                  id="filter1_i"
                  x="26.4874"
                  y="-36.8929"
                  width="23.5481"
                  height="75.0927"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="7.12109" dy="-64.0898" />
                  <feGaussianBlur stdDeviation="24.9238" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
              </defs>
            </svg>
            <h6>Firebase</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceIn"
          delay={1000}
          duration={0.5}
          animateOnce="false"
        >
          <div className="aws">
            <svg
              width="91"
              height="84"
              viewBox="0 0 91 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M26.55 53.5486L18.2133 57.7478L25.9341 61.6195L34.8867 57.7478L26.55 53.5486ZM14.0162 58.7976L13.7369 77.6938L25.934 83.9926V64.3742L14.0162 58.7976V58.7976ZM39.0837 58.7976L28.0611 63.719V82.2206L39.0837 76.9717V58.7976ZM52.2333 0.00915527L43.8392 4.20842L51.6173 8.08003L60.5699 4.20842L52.2333 0.00915527V0.00915527ZM40.5948 5.58783V24.4841L51.0014 28.0281L51.338 10.8367L40.5948 5.58783V5.58783ZM63.8718 6.63752L54.0239 11.559V30.1278L63.8718 24.8788V6.63752H63.8718ZM12.813 26.6047L4.47631 30.8038L12.1971 34.6755L21.1497 30.8038L12.813 26.6047V26.6047ZM0.279341 31.8536L0 50.75L12.1971 57.0487V37.4301L0.279341 31.8536ZM25.3468 31.8536L14.3243 36.775V55.2766L25.3468 50.0276V31.8536ZM39.671 25.9075L31.3343 30.1067L39.055 33.9784L48.0077 30.1067L39.671 25.9075ZM27.1372 31.1566L26.8579 50.0528L39.055 56.3516V36.7352L27.1372 31.1566V31.1566ZM52.2046 31.1566L41.1822 36.078V54.5796L52.2046 49.3306V31.1566ZM78.4663 0.00915527L70.1297 4.20832L77.8505 8.07993L86.803 4.20832L78.4663 0.00915527ZM65.9326 5.25811L65.6533 24.1544L77.8504 30.4531V10.8367L65.9326 5.25811ZM91 5.25811L79.9775 10.1795V28.6811L91 23.4321V5.25811Z"
                  fill="#F7A80D"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="91" height="84" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h6>AWS</h6>
          </div>
        </ScrollAnimation>
      </LogoBox>

      <ScrollAnimation
        animateIn="bounceIn"
        delay={1100}
        duration={0.5}
        animateOnce="false"
      >
        <MongoDB>
          <img src={Mongo} alt="MongoDB" />
        </MongoDB>
      </ScrollAnimation>
    </Container>
  );
};

export default LogoContainer;

const LogoBox = styled.div`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 80px;

  /* align-content: center;
justify-content: center; */
  div {
    align-self: center;
    justify-self: center;
    transition: all 0.3s ease-in-out;
  }
  div:hover {
    transform: translate3d(0px, -10px, 15px);
  }
  img {
    width: 100px;
    justify-self: center;
    align-self: center;
    padding: 0 auto;
  }
  h6 {
    text-align: center;
    font-size: 24px;
    font-family: "Marvel";
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  `}
  ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  `}
  ${media.between("781px", "1500px")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  `}
`;
const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10vh 0;
  margin-bottom: 20vh;
  h2 {
    text-align: center;
    font-size: 42px;
    color: #282828;
    padding: 2rem 0 2rem 0;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    margin-bottom: 5vh;
  `}
  ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    margin-bottom: 5vh;
  `}
`;

const NodeDiv = styled.div`
  img {
    width: 100px;
    justify-self: center;
    align-self: center;
    padding-left: 20px;
  }
`;
const MongoDB = styled.div`
  width: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  img {
    width: 250px;
    margin: 0 auto;
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100%;
    margin-top: 5vh;
  `}
  ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    width: 100%;
    margin-top: 5vh;
  `}
`;
