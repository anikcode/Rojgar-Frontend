import React, { useState } from "react";
import Button from "@mui/material/Button";
import { submitDetails } from "../services/apis";
import Register1 from "../images/register-img1.jpg";
import Register2 from "../images/register-img2.jpg";
import Register3 from "../images/register-img3.jpg";
import Header from "./Header";
function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header />
      <div className="flex justify-end pr-10 h-[92vh] items-center bg-slate-50">
        <img src={Register1} className="h-[200px]" />
        <img src={Register2} className="h-[200px]" />
        <img src={Register3} className="h-[200px]" />
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
              <label className="font-bold flex">Email</label>
            </p>
            <p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-[250px] flex mb-4 border-black rounded"
                placeholder="Enter your password"
              />
            </p>
          </div>
          <div>
            <p>
              <label className="font-bold flex">Phone</label>
            </p>
            <p>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 w-[250px] flex mb-4 border-black rounded"
                placeholder="10 digit mobile number"
              />
            </p>
          </div>
          <div className="flex mt-9">
            <Button
              onClick={() => submitDetails(name, email, phone, password)}
              variant="contained"
              className="w-[250px]"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
