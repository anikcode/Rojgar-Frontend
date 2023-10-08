import React from "react";
import { useLocation } from "react-router-dom";

function Login(props) {
  const location = useLocation();
  const passedProps = location.state;
  console.log(passedProps);
  return <div>Logged in {passedProps.name}</div>;
}

export default Login;
