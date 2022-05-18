import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const NavItem = styled.div`
  color: #db9a64;
  font-size: 16px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.4);
    font-weight: 700;
  }
`;

const EndContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  @media only screen and (max-width: 650px) {
    display: none;
  }
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

const MenuIconContainer = styled.div`
  color: #db9a64;

  margin-top: 15px;

  padding: 10px;
`;

const SideMenu = styled.div`
  position: fixed;
  top: 7vh;
  right: 0;
  width: 50%;
  height: 93vh;
  background-color: #311e25;
  flex-direction: column;
  display: flex;
  align-items: center;
  transition: 850ms;
`;

const SideItem = styled.div`
  color: #db9a64;
  cursor: pointer;
  margin-top: 20px;

  transition: 0.3s;
  &:hover {
    transform: scale(1.4);
    font-weight: 700;
  }
`;

const CloseContainer = styled.div`
  color: #db9a64;
  margin-top: 15px;
  padding: 10px;
`;

const IconBox = styled.div`
  display: none;
  margin-right: 30px;
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
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

      <IconBox>
        {!show ? (
          <MenuIconContainer onClick={handleClick}>
            <MenuIcon />
          </MenuIconContainer>
        ) : (
          <CloseContainer onClick={handleClick}>
            <CloseOutlinedIcon />
          </CloseContainer>
        )}
        {show ? (
          <SideMenu>
            <SideItem>Home</SideItem>
            <SideItem>About</SideItem>
            <SideItem>Projects</SideItem>
            <SideItem>Contact</SideItem>
            <SideItem>Let's Talk</SideItem>
          </SideMenu>
        ) : null}
      </IconBox>
    </Container>
  );
};

export default Nav;
