import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #d9d2d2;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  margin-top: 100px;
`;
const Heading = styled.h3`
  font-weight: 600;
`;
const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.div`
  flex: 1;
  margin-left: 20px;
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
  min-height: 70px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
`;

const Button = styled.div`
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
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Heading>Get in Touch</Heading>
          <SubText>
            Do you have a project? Get in touch,let me handle your project
            professionally
          </SubText>
        </LeftSide>
        <RightSide>
          <Input type="email" placeholder="Enter Your email address" />
          <Input type="text" placeholder="Enter Subject" />
          <Input type="text" placeholder="Enter Your name/company name" />
          <MessageInput type="text" placeholder="Enter Your message" />
          <ButtonContainer>
            <Button>Send</Button>
          </ButtonContainer>
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Contact;
