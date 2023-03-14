import React from "react";
import styled from "styled-components";

const FooterElement = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #4d5b9e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomText = styled.p`
  color: #eeeeeb;
  font-size: 0.9em;
  letter-spacing: 2px;
`;

const Footer = () => {
  return (
    <FooterElement>
      <BottomText>Quizzical &copy;2023</BottomText>
    </FooterElement>
  );
};

export default Footer;
