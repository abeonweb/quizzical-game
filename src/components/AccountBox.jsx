import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 300px;
  height: 70vh;
  border: 2px solid #e2e2e2;
  border-radius: 20px;
  box-shadow: 5px 6px 10px rgba(15, 15, 15, 0.3);
`;

const FormTitle = styled.h1`
  font-size: 25px;
  color: #000;
  font-weight: 700;
  text-align: center;
  padding: 1em 0;
  margin: 0;
`;

const FormSubTitle = styled.h2`
  font-size: 18px;
  color: #000;
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: 0 0 2em;
`;

const Backdrop = styled.div``;

const StyledForm = styled.form`
  padding: 0.5em;
`
const StyledInput = styled.input`
  width: 100%;
  padding: 0.5em;
  margin: 0 0 1em ;
  border-radius: 6px;
`

const StyledButton = styled.button`
  width: 100%;
  padding: 0.5em;
  margin: 0 0 1em ;
  border-radius: 6px;
  border:  2px solid #c6c602;
  background-color: #fdfd0a;

  &:hover {
    box-shadow: 4px 5px 10px 1px rgb(192, 192, 192);
  }
`

const AccountBox = (props) => {
  const { title, subtitle } = props;
  return (
    <div>
      <BoxContainer>
        <FormTitle>{title}</FormTitle>
        <FormSubTitle>{subtitle}</FormSubTitle>
        <StyledForm>
          <StyledInput type={"email"} placeholder={"email"} />
          <StyledInput type={"password"} placeholder={"password"} />
          <StyledButton type={"submit"}>Sign In</StyledButton>
        </StyledForm>
      </BoxContainer>
    </div>
  );
};

export default AccountBox;
