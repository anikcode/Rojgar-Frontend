import React, { useState } from "react";
import Button from "@mui/material/Button";
import { submitDetails } from "../services/apis";
import Register1 from "../images/job.png";
import Header from "./Header";
import SwiperDrawer from "./SwiperDrawer";
function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header />
      <div className="flex justify-around pr-10 h-[92vh] items-center bg-slate-50">
        <div>
          <img src={Register1} className="h-[400px]" />
          <p className="font-semibold text-3xl mt-5 mb-0 text-gray-400">
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
