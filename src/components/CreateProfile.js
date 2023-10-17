import React, { useState } from "react";
import Header from "./Header";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CentreModal from "./CentreModal";
import PersonalProfileModal from "./PersonalProfileModal";

const CreateProfile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Header />
      {showModal && (
        <PersonalProfileModal hideModal={(e) => setShowModal(false)} />
      )}
      <div className="bg-slate-50 flex">
        <div className="flex mt-4">
          <div className="border h-[88vh] w-60 mr-10 shadow-lg ml-2 bg-white">
            <p className="text-lg font-semibold p-3">Quick Links</p>
          </div>
          <div className="block">
            <div
              className="flex  h-fit w-[1100px] justify-between font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white"
              onClick={() => setShowModal(true)}
            >
              <div className="">Personal Details</div>
              <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
                <span className="text-lg font-medium text-white ">
                  Create your profile
                </span>
                <div className="text-white ml-2">
                  <AddCircleRoundedIcon />
                </div>
              </div>
            </div>
            <div className="flex  h-fit w-[1100px] justify-between font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
              <div className="">Career Profile</div>
              <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
                <span className="text-lg font-medium text-white ">
                  Create your profile
                </span>
                <div className="text-white ml-2">
                  <AddCircleRoundedIcon />
                </div>
              </div>
            </div>
            <div className="flex  h-fit w-[1100px] justify-between font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
              <div className="">Profile Summary</div>
              <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
                <span className="text-lg font-medium text-white ">
                  Create your profile
                </span>
                <div className="text-white ml-2">
                  <AddCircleRoundedIcon />
                </div>
              </div>
            </div>
            <div className="flex  h-fit w-[1100px] justify-between font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
              <div className="">Projects</div>
              <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
                <span className="text-lg font-medium text-white ">
                  Create your profile
                </span>
                <div className="text-white ml-2">
                  <AddCircleRoundedIcon />
                </div>
              </div>
            </div>
            <div className="flex  h-fit w-[1100px] justify-between font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
              <div className="">Education</div>
              <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
                <span className="text-lg font-medium text-white ">
                  Create your profile
                </span>
                <div className="text-white ml-2">
                  <AddCircleRoundedIcon />
                </div>
              </div>
            </div>
            <div className="flex  h-fit w-[1100px] justify-between font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
              <div className="">Employement</div>
              <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
                <span className="text-lg font-medium text-white ">
                  Create your profile
                </span>
                <div className="text-white ml-2">
                  <AddCircleRoundedIcon />
                </div>
              </div>
            </div>
            <div className="flex  h-fit w-[1100px] justify-between font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
              <div className="">Key Skills</div>
              <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
                <span className="text-lg font-medium text-white ">
                  Create your profile
                </span>
                <div className="text-white ml-2">
                  <AddCircleRoundedIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
