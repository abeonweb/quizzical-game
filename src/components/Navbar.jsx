import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`

const ListItem = styled.li`
  padding: 0 0.5em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #293264;
`

const Navbar = () => {
  return (
    <header>
      <nav>
        <StyledList>
          <ListItem>
            <StyledLink to="login">Login</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="register">Register</StyledLink>
          </ListItem>
        </StyledList>
      </nav>
    </header>
  );
};

export default Navbar;
