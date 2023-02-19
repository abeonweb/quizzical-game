import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import blue from "./assets/blue.svg";
import yellow from "./assets/yellow.svg";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <img className="bg--img bg--img--yellow" src={yellow} alt="" />
        <img className="bg--img bg--img--blue" src={blue} alt="" />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
