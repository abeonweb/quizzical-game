import React from "react";
import AccountBox from "./components/AccountBox";

// create a user and redirect to game
//access to login page
const Register = () => {
  return (
    <AccountBox
      title={"Register"}
      subtitle={"Create an Account for free."}
      info={{ text: "Already have an account?", link: "login" }}
    />
  );
};

export default Register;
