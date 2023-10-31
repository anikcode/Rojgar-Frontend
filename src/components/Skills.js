import React, { useState, useEffect } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CentreModal from "./CentreModal";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { userProfile } from "../redux/actions/userProfileActions";
import {
  deleteProjectDetails,
  getProjectDetails,
  saveProjectDetails,
} from "../services/apis";
import { useSelector } from "react-redux";

const Skills = (props) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: "10px",
    }),
  };
  const createOptionsArray = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => ({
      label: start + index,
      value: start + index,
    }));
  };
  const isEdit = useSelector((state) => state.userProfile.editProfile.editUser);
  const [response, setResponse] = useState([]);
  const [id, setId] = useState(null);
  const [joiningYear, setJoiningYear] = useState([]);
  const [joiningMonth, setJoiningMonth] = useState([]);
  const [startMonth, setStartMonth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [workTillYear, setWorkTillYear] = useState([]);
  const [workTillMonth, setWorkTillMonth] = useState([]);
  const [selectedWorkTillYear, setSelectedWorkTillYear] = useState(null);
  const [selectedWorkTillMonth, setSelectedWorkTillMonth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  //   const [company, setCompany] = useState("");
  //   const [jobDescription, setJobDescription] = useState("");
  //   const [employmentType, setEmploymentType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const joiningDate = `${startDate?.value} - ${startMonth?.value}`;
  const workedTill = `${selectedWorkTillYear?.value} - ${selectedWorkTillMonth?.value}`;
  const [deletedProfile, setDeletedProfile] = useState(false);
  useEffect(() => {
    setJoiningYear(createOptionsArray(1980, 2023));
    setJoiningMonth(createOptionsArray(1, 12));
    setWorkTillYear(createOptionsArray(1980, 2024));
    setWorkTillMonth(createOptionsArray(1, 12));
    const fetchData = async () => {
      try {
        const response = await getProjectDetails();
        setResponse(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [!showModal, deletedProfile]);
  console.log(response, "employement response");
  const dispatch = useDispatch();
  const editProfile = (index = null) => {
    if (index == "null") {
      setShowModal(true);
      setTitle("");
      setDescription("");
      //   setEmploymentType("");
      //   setCompany("");
      setStartMonth(null);
      setStartDate(null);
      setSelectedWorkTillYear(null);
      setSelectedWorkTillMonth(null);
      dispatch(userProfile(""));
      //   setJobDescription("");
    } else {
      setShowModal(true);
      setId(response[index]?.id);
      setTitle(response[index]?.title);
      setDescription(response[index]?.project_description);
      //   setJobDescription(response[index]?.job_description);
      //   setEmploymentType(response[index]?.employment_type);
      //   setCompany(response[index]?.company);
      dispatch(userProfile("edit"));
      const exp = response[index]?.total_experience;
      const formattedDob = exp ? exp.split("-") : "";
      const joining = response[index]?.joining_date;
      const formattedJoining = joining ? joining.split("-") : "";
      const work = response[index]?.worked_till;
      const formattedWork = work ? work.split("-") : "";
      setStartMonth({
        label: formattedJoining[0],
        value: formattedJoining[0],
      });
      setStartDate({
        label: formattedJoining[1],
        value: formattedJoining[1],
      });
      console.log(formattedDob, "formattedDob");
      setSelectedWorkTillYear({
        label: formattedWork[0] !== "undefined " ? formattedWork[0] : "0",
        value: formattedWork[0] !== "undefined " ? formattedWork[0] : "0",
      });
      setSelectedWorkTillMonth({
        label: formattedWork[1] !== "undefined " ? formattedWork[1] : "0",
        value: formattedWork[1] !== "undefined " ? formattedWork[1] : "0",
      });
    }
    console.log(index, "index");
  };
  const deleteProjectDetailsFromIds = async (index) => {
    try {
      console.log(response[index]?.id, "response[index]?.id");
      const res = await deleteProjectDetails(response[index]?.id);
      setDeletedProfile(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      {showModal && (
        <div>
          <CentreModal
            hideModal={() => setShowModal(false)}
            handleClick={() =>
              saveProjectDetails(
                id,
                title,
                description,
                joiningDate,
                workedTill,
                isEdit
              )
            }
          >
            <div className="block mb-3">
              <div className="gap-3 flex mt-1"></div>
            </div>
            <div className="block">
              <div>
                <label className="font-bold">Skills</label>
                <div className="flex">
                  <div className="w-full">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                      placeholder="Enter your skills here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CentreModal>
        </div>
      )}
      <div className="h-fit w-[1100px] font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
        <div className="flex  h-fit w-[1100px] justify-between ">
          <div className="">Projects</div>
          {false ? (
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
              onClick={() => editProfile("null")}
            >
              <AddCircleRoundedIcon />
            </div>
          )}
        </div>
        {response &&
          response.length > 0 &&
          response.map((result, index) => (
            <>
              <div className="block mb-7 ">
                <div className="flex gap-5">
                  <div className="font-semibold">{result.title}</div>
                  <div
                    onClick={() => editProfile(index)}
                    className="cursor-pointer"
                  >
                    <EditIcon />
                  </div>
                  <div
                    onClick={() => deleteProjectDetailsFromIds(index)}
                    className="cursor-pointer text-red-700"
                  >
                    <DeleteIcon />
                  </div>
                </div>
                <div className="text-slate-400 font-normal text-s">
                  <span>Nov 2022 to Present </span>
                </div>
                <div className="font-normal text-s">
                  {result.project_description}
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Skills;
