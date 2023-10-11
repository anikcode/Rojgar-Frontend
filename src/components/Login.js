import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { Button } from "@mui/material";
import { loginUser } from "../services/apis";
import { useNavigate } from "react-router-dom";

function Login(props) {
  // const location = useLocation();
  // const passedProps = location.state;
  // console.log(passedProps);
  // return <div>Logged in {passedProps.name}</div>;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const canContinue = email !== "" && password !== "";
  const validateLogin = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      if (response.data.message === "success") {
        navigate("/homepage");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center pr-10 h-[92vh] items-center bg-slate-50">
        <div className="shadow-2xl rounded-xl p-10 bg-white">
          <div>
            <p className="text-3xl font-extrabold mb-2">Login</p>
            <p>
              <label className="font-bold flex mt-4">Email</label>
            </p>
            <p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-[250px] flex border-black rounded"
                placeholder="Enter your password"
              />
            </p>
          </div>
          <div className="mt-4">
            <p>
              <label className="font-bold flex">Password</label>
            </p>
            <p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-[250px] flex mb-4 border-black rounded"
                placeholder="min 8 character"
              />
            </p>
          </div>
          <div className="flex mt-4 mb-4">
            <Button
              onClick={() => validateLogin(email, password)}
              variant="contained"
              className="w-[250px]"
              disabled={!canContinue}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
