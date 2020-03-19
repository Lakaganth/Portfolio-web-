import React from "react";
import "./HomePage.scss";
import LakaProfile from "../../assets/images/profile.png";
import NavBar from "../../components/UI/navbar/NavBar";
import Wave from "react-wavify";

const HomePage = () => {
  return (
    <div class-name="hero-container">
      <NavBar />
      <div className="hero-section">
        <div className="lines-dot">
          <svg
            width="536"
            height="633"
            viewBox="0 0 536 633"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48.8337"
              height="464.819"
              rx="24.4169"
              transform="matrix(0.777695 -0.628642 0.635168 0.772374 155.965 226.735)"
              fill="#D4B1FF"
              fill-opacity="0.51"
            />
            <rect
              width="48.8337"
              height="464.819"
              rx="24.4169"
              transform="matrix(0.777695 -0.628642 0.635168 0.772374 0.598999 197.088)"
              fill="#D4B1FF"
              fill-opacity="0.51"
            />
            <rect
              width="48.8337"
              height="464.819"
              rx="24.4169"
              transform="matrix(0.777695 -0.628642 0.635168 0.772374 140.508 31.4106)"
              fill="#D4B1FF"
              fill-opacity="0.51"
            />
            <ellipse
              rx="26.2049"
              ry="25.9903"
              transform="matrix(0.989316 -0.145785 0.148258 0.988949 506.222 603.477)"
              fill="#D4B1FF"
              fill-opacity="0.51"
            />
            <ellipse
              rx="26.2049"
              ry="25.9903"
              transform="matrix(0.989316 -0.145785 0.148258 0.988949 350.856 573.83)"
              fill="#D4B1FF"
              fill-opacity="0.51"
            />
            <ellipse
              rx="26.2049"
              ry="25.9903"
              transform="matrix(0.989316 -0.145785 0.148258 0.988949 490.765 408.152)"
              fill="#D4B1FF"
              fill-opacity="0.51"
            />
          </svg>
        </div>

        <div className="purple-square">
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6.6178"
              y="19.4111"
              width="31"
              height="31"
              rx="5"
              transform="rotate(-24.3737 6.6178 19.4111)"
              stroke="#FFC0F1"
              stroke-opacity="0.56"
              stroke-width="10"
            />
          </svg>
        </div>
        <div className="hero-left">
          <h2>
            Hi! I'm <br />
            <span>Lakshmi Mohan</span>
          </h2>
          <h4>Web Developer</h4>

          <p>
            <div className="orange-circle">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 16.5C27 22.9974 21.9312 28 16 28C10.0688 28 5 22.9974 5 16.5C5 10.0026 10.0688 5 16 5C21.9312 5 27 10.0026 27 16.5Z"
                  stroke="#FF7223"
                  stroke-opacity="0.44"
                  stroke-width="10"
                />
              </svg>
            </div>
            I’m a creative web developer based in Canada. <br />
            Love bringing ideas to life through minimalist design and clean
            code.
          </p>
          <div className="hero-button-group">
            <div className="two-crosses">
              <svg
                width="42"
                height="64"
                viewBox="0 0 42 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="23.3516"
                  width="6.61264"
                  height="35.8978"
                  rx="3.30632"
                  transform="rotate(37.216 23.3516 0)"
                  fill="#6EE039"
                />
                <rect
                  y="7.79225"
                  width="6.92765"
                  height="35.8978"
                  rx="3.46382"
                  transform="rotate(-50.1542 0 7.79225)"
                  fill="#6EE039"
                />
                <rect
                  x="36.3318"
                  y="43.6947"
                  width="4.05844"
                  height="22.0319"
                  rx="2.02922"
                  transform="rotate(37.216 36.3318 43.6947)"
                  fill="#7CE7F5"
                />
                <rect
                  x="22"
                  y="48.4771"
                  width="4.25177"
                  height="22.0319"
                  rx="2.12589"
                  transform="rotate(-50.1542 22 48.4771)"
                  fill="#7CE7F5"
                />
              </svg>
            </div>
            <button className="project-button">Projects</button>
            <button className="contact-button">Contact</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img">
            <svg
              width="862"
              height="848"
              viewBox="0 0 662 648"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="330.785"
                cy="323.558"
                rx="330.785"
                ry="323.558"
                fill="#60319C"
                fill-opacity="0.29"
              />
              <ellipse
                cx="330.785"
                cy="324.114"
                rx="261.848"
                ry="256.289"
                fill="#A780DA"
                fill-opacity="0.3"
              />
              <circle cx="330.785" cy="324.114" r="181.793" fill="#B99DDD" />
            </svg>
            <img src={LakaProfile} alt="laka-profile" />
          </div>
        </div>
      </div>

      <div className="wave-1">
        <svg
          viewBox="100 0 1000 1800"
          fill="freeze"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M292.5 15C116.9 -29.4 24.3333 38.5 0 78V259H1436.5V107C1365.83 63.6667 1157.5 1.3 889.5 98.5C554.5 220 512 70.5 292.5 15Z"
            fill="#E7D1F4"
            fill-opacity="0.5"
          />
        </svg>
      </div>
      <div className="wave-2">
        <svg
          viewBox="200 0 1050 1900"
          fill="freeze"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M292.5 15C116.9 -29.4 24.3333 38.5 0 78V259H1436.5V107C1365.83 63.6667 1157.5 1.3 889.5 98.5C554.5 220 512 70.5 292.5 15Z"
            fill="#E7D1F4"
            fill-opacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
