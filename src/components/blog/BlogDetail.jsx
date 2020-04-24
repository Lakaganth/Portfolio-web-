import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../UI/navbar/NavBar";
import ReactMarkdown from "react-markdown";
import * as Showdown from "showdown";
import MarkdownIt from "markdown-it";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const BlogDetail = ({ location }) => {
  const selectedblog = location.state.blog;

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const markdownOption = {
    html: true, // Enable HTML tags in source
    xhtmlOut: false, // Use '/' to close single tags (<br />)
    breaks: true, // Convert '\n' in paragraphs into <br>
    langPrefix: "language-", // CSS language prefix for fenced blocks
    linkify: false, // autoconvert URL-like texts to links
    typographer: true, // Enable smartypants and other sweet transforms
    quotes: "“”‘’"
  };

  const md = new MarkdownIt(markdownOption);

  const htmlOutput = md.render(selectedblog.post);
  const renderResult = {
    __html: htmlOutput
  };

  return (
    <Container>
      <svg
        className="two-circles"
        width="89"
        height="71"
        viewBox="0 0 89 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="27" cy="44" r="27" fill="#FBFF2D" fillOpacity="0.46" />
        <circle
          cx="71.5"
          cy="17.5"
          r="17.5"
          fill="#6B90F1"
          fillOpacity="0.46"
        />
      </svg>

      <svg
        className="green-squiggys"
        width="114"
        height="83"
        viewBox="0 0 114 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.26659 47.882L13.7493 31.8661L29.7652 39.3488L37.2479 23.3329L53.2638 30.8156L60.7465 14.7998L76.7624 22.2825L84.2452 6.26658L100.261 13.7493"
          stroke="#39FB4D"
          strokeWidth="2"
        />
        <path
          d="M18.213 80.7801L25.6957 64.7642L41.7116 72.2469L49.1943 56.231L65.2102 63.7137L72.693 47.6978L88.7088 55.1805L96.1916 39.1647L112.207 46.6474"
          stroke="#39FB4D"
          strokeWidth="2"
        />
        <path
          d="M13.0091 63.5197L20.4919 47.5038L36.5078 54.9865L43.9905 38.9706L60.0064 46.4533L67.4891 30.4374L83.505 37.9202L90.9877 21.9043L107.004 29.387"
          stroke="#39FB4D"
          strokeWidth="2"
        />
      </svg>
      <svg
        className="blue-triangle"
        width="62"
        height="59"
        viewBox="0 0 62 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6037 11.2844L61.3378 37.5514L18.7228 58.8286L21.6037 11.2844Z"
          fill="#62F6FF"
          fillOpacity="0.31"
        />
      </svg>
      <BlogDetailContainer>
        <BlogPost>
          <ImageContainer
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            src={selectedblog.blogImage}
          ></ImageContainer>
          <PostTitle>{selectedblog.title}</PostTitle>
          {/* <ReactMarkdown source={input} escapeHtml={false} />
        <ReactMarkdown source={selectedblog.post} escapeHtml={true} /> */}

          <Post dangerouslySetInnerHTML={renderResult} />
        </BlogPost>
      </BlogDetailContainer>
    </Container>
  );
};

export default BlogDetail;

const Container = styled.div`
  width: 100vw;

  svg {
    position: absolute;
    z-index: -15;
  }
  .two-circles {
    transform: translate3d(60vw, 15vh, 0);
  }
  .green-squiggys {
    transform: translate3d(60vw, 75vh, 0);
  }
  .green-triangle {
    transform: translate3d(20vw, 75vh, 0);
  }
  .blue-triangle {
    transform: translate3d(5vw, 20vh, 0);
  }
`;
const BlogDetailContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 25vh;
`;
const BlogPost = styled.div`
  border-radius: 6px;
  box-shadow: -3px 4px 10px rgba(0, 0, 0, 0.25),
    3px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 3vh 0;
  margin-bottom: 3vh;
  /* overflow: hidden; */
`;

const ImageContainer = styled(animated.div)`
  width: 80%;
  margin: 0 auto;
  height: 40vh;

  border-radius: 10px;
  box-shadow: 1.5px 6px 16px 0px rgba(0, 0, 0, 0.33);
  ${({ src }) => src && ` background: url(${src}) ;`}
  background-size:cover;
  background-position: center center;
`;

const PostTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  margin: 5vh 0;
`;

const Post = styled.div`
  width: 80%;
  margin: 0 auto;
  h2 {
    font-size: 24px;
    padding: 5vh 0 2vh 0;
  }
  p {
    font-size: 20px;
    margin: 2vh 0 1vh 0;
  }
  pre {
    font-size: 20px;
    color: white;
    padding: 20px;
    background: black;
    border-radius: 10px;
    box-shadow: 1.5px 6px 16px 0px rgba(0, 0, 0, 0.33);
  }
`;
