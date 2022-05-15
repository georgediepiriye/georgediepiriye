import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #311e25;
  height: 80px;

  position: fixed;
  top: 0;
  z-index: 3;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;
const Logo = styled.h1`
  color: #db9a64;
  cursor: pointer;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-around;

  align-items: center;
`;
const NavItem = styled.div`
  color: #db9a64;
  font-size: 16px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    font-size: 24px;
    font-weight: 600;
    transition: all 0.3s ease-out;
  }
`;

const EndContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const EndButton = styled.div`
  border: 1px solid #db9a64;
  color: #db9a64;
  padding: 10px 40px;
  cursor: pointer;

  &:hover {
    background-color: #db9a64;
    color: white;
    transition: all 0.3s ease-out;
  }
`;
const Nav = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>GD.</Logo>
      </LogoContainer>

      <MiddleContainer>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </MiddleContainer>
      <EndContainer>
        <EndButton>Let's Talk</EndButton>
      </EndContainer>
    </Container>
  );
};

export default Nav;
