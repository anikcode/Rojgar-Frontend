import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CentreModal from "./CentreModal";
import PersonalProfileModal from "./PersonalProfileModal";
import ShowProfileDetails from "./ShowProfileDetails";
import { getProfileDetails } from "../services/apis";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { userProfile } from "../redux/actions/userProfileActions";
import Employement from "./Employement";
import Project from "./Project";
import Education from "./Education";
import { useSelector } from "react-redux";
import Skills from "./Skills";

const CreateProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const authToken = useSelector((state) => state.authToken.authToken.authToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfileDetails(authToken);
        setResponse(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [!showModal]);

  // const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();
  const editProfile = () => {
    setShowModal(true);
    dispatch(userProfile("edit"));
  };
  return (
    <div>
      <Header />
      {showModal && (
        <PersonalProfileModal hideModal={() => setShowModal(false)} />
      )}
      <div className="bg-slate-50 flex">
        <div className="flex mt-4">
          <div className="border w-60 mr-10 shadow-lg ml-2 bg-white">
            <p className="text-lg font-semibold p-3">Quick Links</p>
          </div>
          <div className="block">
            <div className="h-fit w-[1100px] font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
              <div className="flex  h-fit w-[1100px] justify-between ">
                <div className="">Personal Details</div>
                {response && response.length == 0 ? (
                  <div
                    className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600 cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    <span className="text-lg font-medium text-white">
                      Create your profile
                    </span>
                    <div className="text-white ml-2">
                      <AddCircleRoundedIcon />
                    </div>
                  </div>
                ) : (
                  <div
                    className="mr-8 mb-4 cursor-pointer"
                    onClick={editProfile}
                  >
                    <EditIcon />
                  </div>
                )}
              </div>
              {response && response.length > 0 && (
                <div className="block">
                  <ShowProfileDetails response={response} />
                </div>
              )}
            </div>

            <Employement />
            <Project />
            <Education />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
