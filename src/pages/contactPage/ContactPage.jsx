import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import ContactAvatar from "../../assets/images/ContactLogos/contact.png";
import Footer from "../../components/UI/footer/Footer";

const ContactPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <Container>
      <Columns>
        <ContactAvatarDiv>
          <img src={ContactAvatar} alt="Contact" />
        </ContactAvatarDiv>
        <RightForm>
          <h3>Get in touch</h3>

          <InputGroup>
            <input
              className="name-input"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(name) => setName(name.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <input
              className="email-input"
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(email) => setEmail(email.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <input
              type="text"
              name="subject"
              value={subject}
              placeholder="Subject"
              onChange={(subject) => setSubject(subject.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <textarea
              className="message-input"
              name="message"
              value={message}
              placeholder="Message"
              onChange={(message) => setMessage(message.target.value)}
            />
          </InputGroup>
          <button>Submit</button>
        </RightForm>
      </Columns>
      <Footer />
    </Container>
  );
};

export default ContactPage;

const Container = styled.div`
  width: 100vw;
`;
const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 20vh 10vw;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
     display:flex;
     flex-direction:column;
     
  `}
`;
const ContactAvatarDiv = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-content: flex-end;
  border-radius: 22px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
const RightForm = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  padding: 1rem;

  h3 {
    font-size: 32px;
    text-align: center;
  }

  .message-input {
    height: 25vh;
  }
  button {
    width: 155px;
    height: 51px;
    background-color: #3845b9;
    color: #ffffff;
    font-size: 24px;
    border: none;
    margin: 0 12vw;
    /* box-shadow: 6px 4px 16px -2px rgba(134, 143, 179, 1); */
  }
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    width: 100%;
  `}
`;

const InputGroup = styled.div`
  width: 90%;
  margin: 2vh auto;

  input {
    width: 100%;
    height: 5vh;
    margin: 1vh 0;
    padding-left: 2vw;
    border: 1px gray solid;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    margin: 1vh 0;
    padding-left: 2vw;
    border: 1px gray solid;
    border-radius: 5px;
    padding-top: 1vh;
  }
`;
