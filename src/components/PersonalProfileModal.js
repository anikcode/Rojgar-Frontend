import React, { useState, useEffect } from "react";
import CentreModal from "./CentreModal";
import Select from "react-select";
import { getProfileDetails, saveProfileDetails } from "../services/apis";
import { useSelector } from "react-redux";

const PersonalProfileModal = (props) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: "10px",
    }),
  };
  const isEdit = useSelector((state) => state.userProfile.editProfile.editUser);
  const authToken = useSelector((state) => state.authToken.authToken.authToken);
  const createOptionsArray = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => ({
      label: start + index,
      value: start + index,
    }));
  };

  const saveProfileData = (
    dob,
    name,
    gender,
    careerBreak,
    address,
    isEdit,
    userId
  ) => {
    return saveProfileDetails(
      dob,
      name,
      gender,
      careerBreak,
      address,
      isEdit,
      userId
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfileDetails(authToken);
        setResponse(response);
        setName(response[0]?.name);
        setAddress(response[0]?.address);
        setCareerBreak(response[0]?.career_break);
        setUserId(response[0]?.id);
        const dob = response[0]?.dob;
        const formattedDob = dob.split("-");
        setSelectedDate({ label: formattedDob[0], value: formattedDob[0] });
        setSelectedMonth({ label: formattedDob[1], value: formattedDob[1] });
        setSelectedYear({ label: formattedDob[2], value: formattedDob[2] });
        setGender(response[0]?.gender);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    setDate(createOptionsArray(1, 31));
    setMonth(createOptionsArray(1, 12));
    setYear(createOptionsArray(1930, 2023));
    setName(response[0]?.name);
  }, []);

  const [response, setResponse] = useState([]);
  const [date, setDate] = useState([]);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [gender, setGender] = useState("");
  const [name, setName] = useState(response[0]?.name);
  const [address, setAddress] = useState("");
  const [careerBreak, setCareerBreak] = useState("");
  const [userId, setUserId] = useState("");
  const dob = `${selectedDate?.value}-${selectedMonth?.value}-${selectedYear?.value}`;
  return (
    <div>
      <CentreModal
        hideModal={props.hideModal}
        handleClick={() =>
          saveProfileData(
            dob,
            name,
            gender,
            careerBreak,
            address,
            isEdit,
            userId
          )
        }
      >
        <div className="block">
          <div>
            <label className="font-bold">Full Name</label>
            <div className="flex">
              <div className="w-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="block mb-3">
          <div>
            <label className="font-bold">Gender</label>
          </div>
          <div className="gap-3 flex mt-1">
            <span
              className="p-2 border rounded-2xl border-gray-400"
              onClick={() => setGender("male")}
            >
              Male
            </span>
            <span
              className="p-2 border rounded-2xl border-gray-400"
              onClick={() => setGender("female")}
            >
              Female
            </span>
            <span
              className="p-2 border rounded-2xl border-gray-400"
              onClick={() => setGender("transgender")}
            >
              Transgender
            </span>
          </div>
        </div>
        <div className="block mb-3">
          <div>
            <label className="font-bold">Date of birth</label>
          </div>
          <div className="gap-3 flex mt-1">
            <span>
              <Select
                value={selectedDate}
                onChange={setSelectedDate}
                options={date}
                placeholder="Day"
                className="w-40"
                styles={customStyles}
              />
            </span>
            <span>
              <Select
                value={selectedMonth}
                onChange={setSelectedMonth}
                options={month}
                placeholder="Month"
                className="w-40"
                styles={customStyles}
              />
            </span>
            <span>
              <Select
                value={selectedYear}
                onChange={setSelectedYear}
                options={year}
                placeholder="Year"
                className="w-40"
                styles={customStyles}
              />
            </span>
          </div>
        </div>
        <div className="block mb-3">
          <div>
            <label className="font-bold">Have you taken a career break</label>
            <div className="flex gap-2">
              <input
                type="radio"
                name={careerBreak}
                value={careerBreak}
                checked={careerBreak === "yes"}
                onChange={() => setCareerBreak("yes")}
              />
              <label className="mr-32">Yes</label>
              <input
                type="radio"
                name={careerBreak}
                value={careerBreak}
                checked={careerBreak === "no"}
                onChange={() => setCareerBreak("no")}
              />
              <label>No</label>
            </div>
          </div>
          <div className="gap-3 flex mt-1"></div>
        </div>

        <div className="block mb-3">
          <div>
            <label className="font-bold">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 pl-4 w-full flex mb-4 mt-1 border-black rounded-2xl"
              placeholder="Enter Your Address"
            />
          </div>
          <div className="gap-3 flex mt-1"></div>
        </div>
      </CentreModal>
    </div>
  );
};

export default PersonalProfileModal;
