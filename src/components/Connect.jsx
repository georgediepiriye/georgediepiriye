import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: white;
`;

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h3`
  font-weight: 500;
  margin-top: 70px;
`;

const SecondHeading = styled.h3`
  font-weight: 500;
`;

const IconsWrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 100px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(0.8);
  }
`;

const LinkedInIconContainer = styled.div`
  color: blue;
`;

const IconTitle = styled.h4`
  color: #311e25;
  font-weight: 600;
`;

const GithubIconContainer = styled.div`
  color: black;
`;

const TwitterIconContainer = styled.div`
  color: #7d7de3;
`;

const Connect = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Don't be a stranger</Heading>
        <SecondHeading>Let's Connect</SecondHeading>
        <IconsWrapper>
          <IconContainer>
            <LinkedInIconContainer>
              <LinkedInIcon />
            </LinkedInIconContainer>
            <IconTitle>LinkedIn</IconTitle>
          </IconContainer>

          <IconContainer>
            <GithubIconContainer>
              <GitHubIcon />
            </GithubIconContainer>
            <IconTitle>GitHub</IconTitle>
          </IconContainer>

          <IconContainer>
            <TwitterIconContainer>
              <TwitterIcon />
            </TwitterIconContainer>
            <IconTitle>Twitter</IconTitle>
          </IconContainer>
        </IconsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Connect;
