import React from "react";
import styled from "styled-components";
import portfolio from "../images/portfolio.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  overflow: hidden;

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
  padding: 0px 10px;
  @media only screen and (max-width: 365px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 335px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 325px) {
    font-size: 18px;
  }
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

  @media only screen and (max-width: 325px) {
    background-color: #503841;
  }
`;

const SkillsBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media only screen and (max-width: 325px) {
    flex-direction: column;
  }
`;
const BottomText = styled.div`
  color: #dadada;

  @media only screen and (max-width: 325px) {
    background-color: #311e25;
    padding-left: 10px;
    padding-top: 5px;
  }
`;

const Home = () => {
  return (
    <Container id="home">
      <Wrapper>
        <LeftBox>
          <FirstText>Hi, i'm George Diepiriye</FirstText>

          <SecondText>-FullStack Engineer</SecondText>

          <BottomBox>
            <SkillsBox>
              <BottomText
                style={{
                  borderRadius: "20px 20px 0px 0px",
                  paddingTop: "25px",
                }}
              >
                ReactJS
              </BottomText>
              <BottomText>NodeJS</BottomText>
              <BottomText>ExpressJS</BottomText>
              <BottomText
                style={{
                  paddingBottom: "25px",
                  borderRadius: "0px 0px 20px 20px",
                }}
              >
                Laravel
              </BottomText>
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
