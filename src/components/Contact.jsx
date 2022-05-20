import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #d9d2d2;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  margin-top: 100px;

  @media only screen and (max-width: 810px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
  }
`;
const Heading = styled.h3`
  font-weight: 600;
`;
const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.form`
  flex: 1;
  margin-left: 20px;

  @media only screen and (max-width: 810px) {
    margin-left: 0px;
    margin-top: 25px;
  }
`;
const SubText = styled.div``;

const Input = styled.input`
  width: 100%;
  padding-left: 20px;
  margin-bottom: 20px;
  border: none;

  height: 70px;
`;

const MessageInput = styled.textarea`
  width: 100%;
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 20px;
  border: none;
  min-height: 200px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  border: 1px solid #db9a64;

  color: #db9a64;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background-color: #db9a64;
    color: white;
    transition: all 0.3s ease-out;
  }
`;

const Contact = () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  //send message
  const sendMessage = async (e) => {
    e.preventDefault();
    const newMessage = { email, name, subject, message };
    try {
      setIsSendingMessage(true);
      setTimeout(async () => {
        const res = await axios.post(
          `http://localhost:5000/api/v1/message`,
          newMessage
        );
        if (res) {
          setIsSendingMessage(false);
          notify();
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        }
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  //toast when message is sent
  const notify = () => {
    toast.success("Message sent successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  };

  return (
    <Container id="contact">
      <ToastContainer />
      <Wrapper>
        <LeftSide>
          <Heading>Get in Touch</Heading>
          <SubText>
            Do you have a project? Get in touch, let me handle your project
            professionally
          </SubText>
        </LeftSide>
        <RightSide onSubmit={sendMessage}>
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            id="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Enter Subject"
            id="subject"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Enter Your name/company name"
            id="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <MessageInput
            type="text"
            placeholder="Enter Your message"
            id="message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <ButtonContainer>
            {!isSendingMessage ? (
              <Button type="submit">Send</Button>
            ) : (
              <Button disabled>
                <CircularProgress color="inherit" />
              </Button>
            )}
          </ButtonContainer>
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Contact;
