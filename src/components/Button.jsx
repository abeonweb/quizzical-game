import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
  font-size: 1rem;
  background-color: #4d5b9e;
  color: #f5f7fb;
  padding: 1em 2.4em;
  border-radius: 10px;
  border: none;
  cursor: ${({ start }) => (start ? "allow" : "not-allowed")};
  opacity: ${({ start }) => (start ? 1 : 0.7)};
  text-decoration: none;
`;

const Button = ({ start, text }) => {
  return (
    <StyledButton to="game" start={start}>
      {text}
    </StyledButton>
  );
};

export default Button;
