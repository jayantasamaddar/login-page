import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import successPage from "../SuccessPage";


function LoginButtons() {


  return (<div>

    <br></br>
    <a href="#">Forgot your password or email ?</a>
    <br></br>
    <br></br>
    {/* <button id="btn"> */}
      <Link to="/home">
        Sign Up
      </Link>
    {/* </button> */}
  </div>)

}

export default LoginButtons;