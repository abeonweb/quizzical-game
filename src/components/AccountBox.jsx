import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 300px;
  height: 75vh;
  border: 2px solid #e2e2e2;
  border-radius: 20px;
  box-shadow: 5px 6px 10px rgba(15, 15, 15, 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 3em;
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  padding: 1em 0;
  margin: 0;
  position: relative;
  z-index: 10;
`;

const HeaderSubTitle = styled.h2`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: 0 0 2em;
  position: relative;
  z-index: 10;
`;

const Backdrop = styled.div`
  height: 530px;
  width: 160%;
  position: absolute;
  top: -290px;
  left: -120px;
  display: flex;
  flex-direction: column;
  border-radius: 60%;
  transform: rotate(60deg);
  background: #fdfd0a;
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  z-index: 5;
`;

const StyledForm = styled.form`
  padding: 0.5em;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 0.8em;
  margin: 0 0 1em;
  border: 1px solid #bcbbbb;
  border-radius: 6px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.8em 0.5em;
  margin: 0 0 1em;
  border-radius: 20px;
  border: none;
  background-color: rgba(241, 196, 15, 1);

  &:hover {
    box-shadow: 4px 5px 10px 1px rgb(192, 192, 192);
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

`

const AccountBox = (props) => {
  const { title, subtitle } = props;
  return (
    <div>
      <BoxContainer>
        <HeaderContainer>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubTitle>{subtitle}</HeaderSubTitle>
        </HeaderContainer>
        <Backdrop />
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
