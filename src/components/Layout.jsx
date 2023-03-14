import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import blue from "../assets/blue.svg";
import yellow from "../assets/yellow.svg";
import styled from "styled-components";

const BackgroundLayout = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
`

const BackgroundImage = styled.img`
  width: 150px;
  position: absolute;
  z-index: -1;
  transform: rotate(0);
  animation: spin 30s infinite reverse ease;

  &:first-of-type{
    top: 30px;
    right: 30px;
  }

  &:last-of-type{
    bottom: 30px;
    left: 30px;
  }

  @media (min-width: 400px){
    width: 180px;
  }

  @keyframes spin {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
    
  }
`
const Layout = () => {
  return (
    <>
      <Navbar />
      <BackgroundLayout>
        <BackgroundImage src={yellow} alt="" />
        <Outlet />
        <BackgroundImage src={blue} alt="" />
      </BackgroundLayout>
      <Footer />
    </>
  );
};

export default Layout;
