import React, { useState } from "react";
import Button from "@mui/material/Button";
import { submitDetails } from "../services/apis";
import Register1 from "../images/job.png";
import Header from "./Header";
import SwiperDrawer from "./SwiperDrawer";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isValidPassword = confirmPassword === password;
  const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const handleValidateEmail = (email) => {
    return validateEmail.test(email);
  };
  const isValidEmail = handleValidateEmail(email);
  const canContinue =
    name !== "" && phone.length == 10 && isValidEmail && isValidPassword;

  return (
    <>
      <Header />
      <div className="flex justify-around pr-10 h-[92vh] items-center bg-slate-50">
        <div>
          <img src={Register1} className="h-[400px]" />
          <p className="font-semibold text-3xl mt-5 mb-0 text-gray-400 font-serif">
            Featured companies actively hiring :-
          </p>
          <SwiperDrawer />
        </div>
        <div className="shadow-2xl rounded-xl p-10 bg-white">
          <p className="text-3xl font-extrabold mb-2">Create Account</p>
          <p className="text-l font-extrabold flex mb-4">Welcome Guest</p>
          <div>
            <p>
              <label className="font-bold flex">Full Name</label>
            </p>
            <p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-[250px] flex mb-4 border-black rounded"
                placeholder="Enter Your Name"
              />
            </p>
          </div>
          <div>
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
          <div>
            <p>
              <label className="font-bold flex">Confirm Password</label>
            </p>
            <p>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2 w-[250px] flex border-black rounded"
                placeholder="min 8 character"
              />
            </p>
            {!isValidPassword && confirmPassword !== "" && (
              <span className="text-red-500 text-xs">
                Password and confirm password must be same
              </span>
            )}
          </div>
          <div>
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
            {!isValidEmail && email !== "" && (
              <span className="text-red-500 text-xs">
                Email address is invalid
              </span>
            )}
          </div>
          <div>
            <p className="mt-4">
              <label className="font-bold flex">Phone</label>
            </p>
            <p>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 w-[250px] flex mb-4 border-black rounded"
                placeholder="10 digit mobile number"
                maxlength="10"
              />
            </p>
          </div>
          <div className="flex mt-9 mb-4">
            <Button
              onClick={() =>
                submitDetails(name, email, phone, password, confirmPassword)
              }
              variant="contained"
              className="w-[250px]"
              disabled={!canContinue}
            >
              Submit
            </Button>
          </div>
          <p className="font-bold">
            Already have an account?{" "}
            <span
              className="underline"
              onClick={() => navigate("/login", { state: { name, phone } })}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
