import React from 'react'
import styled from "styled-components"


const BoxContainer = styled.div`
    width: 300px;
    height: 70vh;
    border: 2px solid #e2e2e2;
    border-radius: 20px;
    box-shadow: 5px 6px 10px rgba(15, 15, 15, 0.3);
`

const FormTitle = styled.h1`
  font-size: 25px;
  color: #000;
  font-weight: 700;
  text-align: center;
  padding: 1em 0;
  margin: 0;
`

const FormSubTitle = styled.h2`
  font-size: 18px;
  color: #000;
  font-weight: 400;
  text-align: center;
  padding: 0;
  margin: 0;
`

const Backdrop = styled.div`
  
`
const AccountBox = (props) => {
  const {title, subtitle} = props
  return (
    <div>
        <BoxContainer>
          <FormTitle>{title}</FormTitle>
          <FormSubTitle>{subtitle}</FormSubTitle>
          </BoxContainer>
    </div>
  )
}

export default AccountBox