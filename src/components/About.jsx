import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import portfolio from "../images/portfolio.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  overflow: hidden;

  background-color: #311e25;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
const Wrapper = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  @media only screen and (max-width: 550px) {
    width: 85vw;
  }
`;
const Heading = styled.h3`
  color: #db9a64;
  font-weight: 500;
`;

const AboutText = styled.div`
  color: white;
  letter-spacing: 0.1em;
`;

const Arrow = styled.div`
  margin-bottom: 30px;
  color: #db9a64;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  display: none;
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Heading>A LITTLE ABOUT ME</Heading>
        <Arrow>
          <ArrowDownwardIcon />
        </Arrow>

        <AboutText>
          I'm an Innovative and result-oriented FullStack Software Engineer
          based in Port Harcourt, Nigeria. I am experienced in building scalable
          web applications and API’s using modern architectures. Adept at
          developing, and maintaining Web Applications. I have a Bachelor's
          Degree in Computer Science and i'm skilled in HTML, CSS, JavaScript,
          ReactJS, NodeJS, ExpressJS, PHP, Laravel, Git, MongoDb, MySQL and
          PgSQL.
        </AboutText>
        <ImageContainer>
          <Image src={portfolio} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default About;
