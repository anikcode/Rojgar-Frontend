import React, { useState, useEffect } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CentreModal from "./CentreModal";
import Select from "react-select";
import { getCareerDetails, saveEmploymentDetails } from "../services/apis";

const Employement = (props) => {
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
  const [response, setResponse] = useState([]);
  const [year, setYear] = useState([]);
  const [month, setMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [joiningYear, setJoiningYear] = useState([]);
  const [joiningMonth, setJoiningMonth] = useState([]);
  const [selectedJoiningMonth, setSelectedJoiningMonth] = useState(null);
  const [selectedJoiningDate, setSelectedJoiningDate] = useState(null);
  const [workTillYear, setWorkTillYear] = useState([]);
  const [workTillMonth, setWorkTillMonth] = useState([]);
  const [selectedWorkTillYear, setSelectedWorkTillYear] = useState(null);
  const [selectedWorkTillMonth, setSelectedWorkTillMonth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const totalExperience = `${selectedDate?.value} - ${selectedMonth?.value}`;
  const joiningDate = `${selectedJoiningDate?.value} - ${selectedJoiningMonth?.value}`;
  const workedTill = `${selectedWorkTillYear?.value} - ${selectedWorkTillMonth?.value}`;
  useEffect(() => {
    setYear(createOptionsArray(1, 10));
    setMonth(createOptionsArray(1, 12));
    setJoiningYear(createOptionsArray(1980, 2023));
    setJoiningMonth(createOptionsArray(1, 12));
    setWorkTillYear(createOptionsArray(1980, 2024));
    setWorkTillMonth(createOptionsArray(1, 12));
    const fetchData = async () => {
      try {
        const response = await getCareerDetails();
        setResponse(response);
        // setName(response[0]?.name);
        // setDesignation(response[0]?.designation);
        // setCareerBreak(response[0]?.career_break);
        // setUserId(response[0]?.id);
        // const dob = response[0]?.dob;
        // const formattedDob = dob.split("-");
        // setSelectedDate({ label: formattedDob[0], value: formattedDob[0] });
        // setSelectedMonth({ label: formattedDob[1], value: formattedDob[1] });
        // setSelectedYear({ label: formattedDob[2], value: formattedDob[2] });
        // setGender(response[0]?.gender);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [!showModal]);
  console.log(response, "employement response");

  return (
    <div>
      {showModal && (
        <div>
          <CentreModal
            hideModal={() => setShowModal(false)}
            handleClick={() =>
              saveEmploymentDetails(
                company,
                employmentType,
                totalExperience,
                name,
                designation,
                joiningDate,
                workedTill
              )
            }
          >
            <div className="block mb-3">
              <div>
                <label className="font-bold">
                  Is this your current organization?
                </label>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name={company}
                    value={company}
                    checked={company === "yes"}
                    onChange={() => setCompany("yes")}
                  />
                  <label className="mr-32">Yes</label>
                  <input
                    type="radio"
                    name={company}
                    value={company}
                    checked={company === "no"}
                    onChange={() => setCompany("no")}
                  />
                  <label>No</label>
                </div>
              </div>
              <div className="gap-3 flex mt-1"></div>
            </div>
            <div className="block mb-3">
              <div>
                <label className="font-bold">Employment type</label>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name={employmentType}
                    value={employmentType}
                    checked={employmentType === "Fulltime"}
                    onChange={() => setEmploymentType("Fulltime")}
                  />
                  <label className="mr-32">Full-time</label>
                  <input
                    type="radio"
                    name={employmentType}
                    value={employmentType}
                    checked={employmentType === "Internship"}
                    onChange={() => setEmploymentType("Internship")}
                  />
                  <label>Internship</label>
                </div>
              </div>
              <div className="gap-3 flex mt-1"></div>
            </div>
            <div className="block mb-3">
              <div>
                <label className="font-bold">Total experience</label>
              </div>
              <div className="gap-3 flex mt-1">
                <span>
                  <Select
                    value={selectedDate}
                    onChange={setSelectedDate}
                    options={year}
                    placeholder="Years"
                    className="w-40"
                    styles={customStyles}
                  />
                </span>
                <span>
                  <Select
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    options={month}
                    placeholder="Months"
                    className="w-40"
                    styles={customStyles}
                  />
                </span>
              </div>
            </div>
            <div className="block">
              <div>
                <label className="font-bold">Company name</label>
                <div className="flex">
                  <div className="w-full">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                      placeholder="Type your organization"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div>
                <label className="font-bold">Designation</label>
                <div className="flex">
                  <div className="w-full">
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                      placeholder="Type your designation"
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
          </CentreModal>
        </div>
      )}
      <div className="h-fit w-[1100px] font-semibold rounded-lg p-4 mt-5 shadow-lg bg-white">
        <div className="flex  h-fit w-[1100px] justify-between ">
          <div className="">Employment</div>
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
              onClick={() => setShowModal(true)}
            >
              <AddCircleRoundedIcon />
            </div>
          )}
        </div>
        {response &&
          response.length > 0 &&
          response.map((result) => (
            <>
              <div className="block mb-7">
                {console.log(result.designation, "repo")}
                <div className="flex gap-5">
                  <div className="font-semibold">{result.designation}</div>
                  <div
                    onClick={() => setShowModal(true)}
                    className="cursor-pointer"
                  >
                    <EditIcon />
                  </div>
                  <div>
                    <DeleteIcon />
                  </div>
                </div>
                <div className="font-medium">{result.name}</div>
                <div className="text-slate-400 font-normal text-s">
                  <span>{result.employment_type}</span> |{" "}
                  <span>Nov 2022 to Present </span>
                </div>
                <div className="font-normal text-s">
                  Worked on skills like html,css,javascript
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Employement;
