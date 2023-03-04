import React from 'react'
import AccountBox from "./components/AccountBox"
// authenticate a user
// process if user does not exist
//access to register page


const Login = () => {
  return (
      <AccountBox 
      title ={"Login"} 
      subtitle={"Welcome Back"} 
      info={{text:"Don't have an account?", link: "register"}} 
    />
  )
}

export default Login