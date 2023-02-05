import React from 'react'
import styled from "styled-components"


const BoxContainer = styled.div`
    width: 300px;
    height: 70vh;
    border: 1px solid gray;
`

const FormTitle = styled.h1`
  font-size: 25px;
  color: #000;
  font-weight: 700;
  text-align: center;
  padding: 1em 0;;
`

const Backdrop = styled.div`
  
`
const AccountBox = () => {
  return (
    <div>
        <BoxContainer>
          <FormTitle>Login</FormTitle>
          </BoxContainer>
    </div>
  )
}

export default AccountBox