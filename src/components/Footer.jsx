import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #d9d2d2;
  overflow: hidden;
`;

const FooterText = styled.div`
  margin-bottom: 30px;
  margin-top: 70px;
`;
const Footer = () => {
  return (
    <Container>
      <FooterText>Copyright ©2022 All rights reserved </FooterText>
    </Container>
  );
};

export default Footer;
