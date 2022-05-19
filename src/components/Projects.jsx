import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ayalo from "../images/ayalo.jpg";
import heritage from "../images/heritage.jpg";
import port from "../images/port.jpg";
import tales from "../images/tales.jpg";
import trends from "../images/trends.jpg";
import zuri from "../images/zuri.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: auto;
  background-color: #d9d2d2;
  @media only screen and (max-width: 810px) {
    padding-bottom: 30px;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 550px) {
    width: 85vw;
  }
`;

const Heading = styled.h3`
  color: #db9a64;
  font-weight: 700;
`;

const Arrow = styled.div`
  margin-bottom: 30px;
  color: #db9a64;
`;

const ImageContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: auto;
  flex-direction: column;
  margin-top: 50px;

  border-radius: 10px;
  padding: 30px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 810px) {
    padding: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #db9a64;
  margin-top: 10px;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Heading>Here are</Heading>
        <Heading>Some of my projects</Heading>
        <Arrow>
          <ArrowDownwardIcon />
        </Arrow>

        <ImageContainer href="http://talesoftime.herokuapp.com/">
          <Image src={tales} />
          <ImageText>Tales of Time</ImageText>
        </ImageContainer>

        <ImageContainer href="https://heritagebuddy.herokuapp.com">
          <Image src={heritage} />
          <ImageText>Heritage Buddy</ImageText>
        </ImageContainer>

        <ImageContainer href="https://trendsng.herokuapp.com/">
          <Image src={trends} />
          <ImageText>Trends.ng</ImageText>
        </ImageContainer>

        <ImageContainer href="https://www.zuri.chat/">
          <Image src={zuri} />
          <ImageText>Zuri</ImageText>
        </ImageContainer>

        <ImageContainer href="https://ayalo.herokuapp.com/">
          <Image src={ayalo} />
          <ImageText>Ayalo</ImageText>
        </ImageContainer>

        <ImageContainer href="/">
          <Image src={port} />
          <ImageText>My Portfolio</ImageText>
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
