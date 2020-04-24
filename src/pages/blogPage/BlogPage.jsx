import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as Blogactions from "../../store/actions/BlogActions";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import BlogBox from "../../components/blog/BlogBox";
import Footer from "../../components/UI/footer/Footer";

const BlogPage = () => {
  const blogsRedux = useSelector(state => state.blog.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogsFromRedux();
  }, []);
  const getBlogsFromRedux = async () => {
    await dispatch(Blogactions.getBlogs());
  };
  console.log(blogsRedux);
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

      {/* <Link to="/blog/add">Create a new Blog</Link> */}
      <BlogContainer>
        {blogsRedux &&
          blogsRedux.map(blog => <BlogBox key={blog.bID} blog={blog} />)}
      </BlogContainer>
    </Container>
  );
};

export default BlogPage;

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
const BlogContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 25vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
  align-content: center;
  justify-content: center;
`;
