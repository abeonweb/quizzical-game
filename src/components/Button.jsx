import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
  font-size: 1rem;
  background-color: #4d5b9e;
  color: #f5f7fb;
  text-decoration: none;
  padding: 1em 2.4em;
  border-radius: 10px;
  border: none;
  cursor: ${({ start }) => (start ? "allow" : "not-allowed")};
  opacity: ${({ start }) => (start ? 1 : 0.7)};
`;

const Button = ({ start, text }) => {
  return (
    <Link to="game">
      <StyledButton start={start}>{text}</StyledButton>
    </Link>
  );
};

export default Button;
