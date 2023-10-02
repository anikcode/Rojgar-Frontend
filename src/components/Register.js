import React from "react";
import Button from "@mui/material/Button";
import { submitDetails } from "../services/apis";
function Register() {
  return (
    <div>
      <p>Register</p>
      <label>Name</label>
      <input type="text" />

      <label>Password</label>
      <input type="password" />

      <label>Email</label>
      <input type="email" />

      <label>Phone</label>
      <input type="phone" />

      <Button onClick={() => submitDetails("sa", "sw", "999", "p")}>
        Submit
      </Button>
    </div>
  );
}

export default Register;
