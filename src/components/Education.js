import React, { useState, useEffect } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CentreModal from "./CentreModal";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { userProfile } from "../redux/actions/userProfileActions";
import {
  deleteEducationDetails,
  getEducationDetails,
  saveEducationDetails,
} from "../services/apis";
import { useSelector } from "react-redux";

const Education = (props) => {
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
  const [selectedJoiningMonth, setSelectedJoiningMonth] = useState(null);
  const [selectedJoiningDate, setSelectedJoiningDate] = useState(null);
  const [workTillYear, setWorkTillYear] = useState([]);
  const [workTillMonth, setWorkTillMonth] = useState([]);
  const [selectedWorkTillYear, setSelectedWorkTillYear] = useState(null);
  const [selectedWorkTillMonth, setSelectedWorkTillMonth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [grade, setGrade] = useState("");
  const joiningDate = `${selectedJoiningDate?.value} - ${selectedJoiningMonth?.value}`;
  const workedTill = `${selectedWorkTillYear?.value} - ${selectedWorkTillMonth?.value}`;
  const [deletedProfile, setDeletedProfile] = useState(false);
  useEffect(() => {
    setJoiningYear(createOptionsArray(1980, 2023));
    setJoiningMonth(createOptionsArray(1, 12));
    setWorkTillYear(createOptionsArray(1980, 2024));
    setWorkTillMonth(createOptionsArray(1, 12));
    const fetchData = async () => {
      try {
        const response = await getEducationDetails();
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
      setSchoolName("");
      setDegreeName("");
      setGrade("");
      setSelectedJoiningMonth(null);
      setSelectedJoiningDate(null);
      setSelectedWorkTillYear(null);
      setSelectedWorkTillMonth(null);
      dispatch(userProfile(""));
      setDescription("");
    } else {
      setShowModal(true);
      setId(response[index]?.id);
      setSchoolName(response[index]?.school);
      setDescription(response[index]?.description);
      setDegreeName(response[index]?.degree);
      setGrade(response[index]?.grade);
      dispatch(userProfile("edit"));
      const exp = response[index]?.total_experience;
      const formattedDob = exp ? exp.split("-") : "";
      const joining = response[index]?.joining_date;
      const formattedJoining = joining ? joining.split("-") : "";
      const work = response[index]?.worked_till;
      const formattedWork = work ? work.split("-") : "";
      setSelectedJoiningMonth({
        label: formattedJoining[0],
        value: formattedJoining[0],
      });
      setSelectedJoiningDate({
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
  const deleteEmploymentDetailsFromIds = async (index) => {
    try {
      console.log(response[index]?.id, "response[index]?.id");
      const res = await deleteEducationDetails(response[index]?.id);
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
              saveEducationDetails(
                id,
                schoolName,
                degreeName,
                joiningDate,
                workedTill,
                grade,
                description,
                isEdit
              )
            }
          >
            <div className="block">
              <div>
                <label className="font-bold">School</label>
                <div className="flex">
                  <div className="w-full">
                    <input
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                      placeholder="Type your organization"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div>
                <label className="font-bold">Degree</label>
                <div className="flex">
                  <div className="w-full">
                    <input
                      type="text"
                      value={degreeName}
                      onChange={(e) => setDegreeName(e.target.value)}
                      className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                      placeholder="Type your organization"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="block mb-3">
              <div>
                <label className="font-bold">Joining year</label>
              </div>
              <div className="gap-3 flex mt-1">
                <span>
                  <Select
                    value={selectedJoiningDate}
                    onChange={setSelectedJoiningDate}
                    options={joiningYear}
                    placeholder="Years"
                    className="w-40"
                    styles={customStyles}
                  />
                </span>
                <span>
                  <Select
                    value={selectedJoiningMonth}
                    onChange={setSelectedJoiningMonth}
                    options={joiningMonth}
                    placeholder="Months"
                    className="w-40"
                    styles={customStyles}
                  />
                </span>
              </div>
            </div>
            <div className="block mb-3">
              <div>
                <label className="font-bold">Worked till</label>
              </div>
              <div className="gap-3 flex mt-1">
                <span>
                  <Select
                    value={selectedWorkTillYear}
                    onChange={setSelectedWorkTillYear}
                    options={workTillYear}
                    placeholder="Years"
                    className="w-40"
                    styles={customStyles}
                  />
                </span>
                <span>
                  <Select
                    value={selectedWorkTillMonth}
                    onChange={setSelectedWorkTillMonth}
                    options={workTillMonth}
                    placeholder="Months"
                    className="w-40"
                    styles={customStyles}
                  />
                </span>
              </div>
            </div>
            <div className="block">
              <div>
                <label className="font-bold">Grade</label>
                <div className="flex">
                  <div className="w-full">
                    <input
                      type="text"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                      placeholder="Type your degreeName"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div>
                <label className="font-bold">Description</label>
                <div className="flex">
                  <div className="w-full">
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                      placeholder="Type your description"
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
          <div className="">Education</div>
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
                  <div className="font-semibold">{result.degree}</div>
                  <div
                    onClick={() => editProfile(index)}
                    className="cursor-pointer"
                  >
                    <EditIcon />
                  </div>
                  <div
                    onClick={() => deleteEmploymentDetailsFromIds(index)}
                    className="cursor-pointer text-red-700"
                  >
                    <DeleteIcon />
                  </div>
                </div>
                <div className="font-medium">{result.school}</div>
                <div className="text-slate-400 font-normal text-s">
                  <span>{result.grade}</span> |{" "}
                  <span>Nov 2022 to Present </span>
                </div>
                <div className="font-normal text-s">{result.description}</div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Education;
