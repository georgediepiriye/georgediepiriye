import React from "react";
import styled from "styled-components";
import portfolio from "../images/portfolio.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;

  background-color: #d9d2d2;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  background-color: #503841;
  border-radius: 30px;
  color: white;
  display: flex;

  @media only screen and (max-width: 550px) {
    width: 85vw;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const RightBox = styled.div`
  flex: 1;

  display: flex;

  justify-content: start;

  @media only screen and (max-width: 1115px) {
    display: none;
  }
`;

const FirstText = styled.h1`
  font-weight: 600;
`;
const SecondText = styled.h5`
  color: #db9a64;
`;
const Image = styled.img`
  width: auto;
  height: auto;
  border-radius: 100% 0% 0% 100%;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-self: flex-end;
  background-color: #311e25;
  margin-top: 30px;
  border-radius: 50% 50% 50% 50%;
  padding: 10px;
`;

const SkillsBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const BottomText = styled.div`
  color: #dadada;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <FirstText>Hi, i'm George Diepiriye</FirstText>

          <SecondText>-FullStack Engineer</SecondText>

          <BottomBox>
            <SkillsBox>
              <BottomText>ReactJS</BottomText>
              <BottomText>NodeJS</BottomText>
              <BottomText>ExpressJS</BottomText>
              <BottomText>Laravel</BottomText>
            </SkillsBox>
          </BottomBox>
        </LeftBox>
        <RightBox>
          <Image src={portfolio} />
        </RightBox>
      </Wrapper>
    </Container>
  );
};

export default Home;
