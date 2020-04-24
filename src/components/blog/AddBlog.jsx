import React from "react";
import styled from "styled-components";
import moment from "moment";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import NavBar from "../UI/navbar/NavBar";
import * as BlogActions from "../../store/actions/BlogActions";
import { useDispatch } from "react-redux";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});
const Container = styled.div`
  width: 100vw;
  height: 130vh;
`;
const BlogForm = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 20vh;
  h2 {
    text-align: center;
    margin: 10vh 0;
  }
`;

const InputGroup = styled.div`
  width: 50%;
  margin: 2vh 0;
  label {
    width: 100%;
    padding-left: 2vw;
  }
  input {
    width: 100%;
    height: 5vh;
    margin: 1vh 0;
    padding-left: 2vw;
    border: 1px gray solid;
    border-radius: 5px;
  }
`;

const AddBlog = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [newBlog, setNewBlog] = React.useState({
    title: "",
    subtitle: "",
    blogImage: "",
    author: ""
  });
  const [created, setCreated] = React.useState(new Date());

  const { title, blogImage, author, subtitle } = newBlog;

  const handleFormChange = e => {
    e.preventDefault();
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value
    });
  };

  console.log(created);

  const handleSubmit = async () => {
    const inputData = {
      title,
      subtitle,
      blogImage,
      author,
      created,
      post: value
    };

    await dispatch(BlogActions.createBlog(inputData));
  };

  return (
    <Container>
      <NavBar />
      <BlogForm>
        <h2>Create a New Blog</h2>

        <InputGroup>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter Title"
              onChange={handleFormChange}
            />
          </label>
        </InputGroup>
        <InputGroup>
          <label>
            Sub-Title
            <input
              type="text"
              name="subtitle"
              value={subtitle}
              placeholder="Enter SubTitle"
              onChange={handleFormChange}
            />
          </label>
        </InputGroup>
        <InputGroup>
          <label>Image</label>
          <input
            type="text"
            name="blogImage"
            value={blogImage}
            placeholder="Image Link"
            onChange={handleFormChange}
          />
        </InputGroup>
        <InputGroup>
          <label>Author Name</label>
          <input
            type="text"
            name="author"
            value={author}
            placeholder="Enter your name"
            onChange={handleFormChange}
          />
        </InputGroup>
        <div className="container">
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </BlogForm>
    </Container>
  );
};

export default AddBlog;
