import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkButton = styled(Link)`
  font-size: 1rem;
  background-color: #4d5b9e;
  color: #f5f7fb;
  padding: 1em 2.4em;
  border-radius: 10px;
  border: none;
  cursor: ${({ start }) => (start=="true" ? "allow" : "not-allowed")};
  opacity: ${({ start }) => (start=="true" ? 1 : 0.7)};
  text-decoration: none;
`;

const StyledLink = ({ start, text, link }) => {
  return (
    <StyledLinkButton to={link} start={start}>
      {text}
    </StyledLinkButton>
  );
};

export default StyledLink;
