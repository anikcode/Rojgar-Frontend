import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { Button } from "@mui/material";
import { loginUser } from "../services/apis";
import { useNavigate } from "react-router-dom";

function Login(props) {
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
      <div className="flex flex-row justify-center pr-10 h-[92vh] items-center bg-slate-50">
        <div className="mr-10">
          <p className="flex text-5xl font-bold">
            Find your dream <p className="text-[#447AB1] ml-3"> Job</p>
          </p>
          <p className="text-gray-400 text-xl font-semibold mt-7">
            Collaborating with big companies, we have helped <br></br> thousands
            of people to find the best job for themselves.
          </p>
          <div className="gap-4 flex mt-6">
            <div className="rounded-xl bg-white shadow-lg p-4 w-fit">
              <p className="text-[#447AB1] text-3xl font-bold">2000+</p>
              <div>CVs Received this month</div>
            </div>
            <div className="rounded-xl bg-white shadow-lg p-4 w-fit">
              <p className="text-[#447AB1] text-3xl font-bold">1000+</p>
              <div>Current Open Positions</div>
            </div>
            <div className="rounded-xl bg-white shadow-lg p-4 w-fit">
              <p className="text-[#447AB1] text-3xl font-bold">500+</p>
              <div>Daily Job Posting</div>
            </div>
          </div>
        </div>
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
                placeholder="Enter email id"
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
