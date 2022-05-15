import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  flex-direction: column;

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
const About = () => {
  return (
    <Container>
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
      </Wrapper>
    </Container>
  );
};

export default About;
