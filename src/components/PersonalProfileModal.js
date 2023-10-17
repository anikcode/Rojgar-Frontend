import React, { useState, useEffect } from "react";
import CentreModal from "./CentreModal";
import Select from "react-select";

const PersonalProfileModal = () => {
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

  useEffect(() => {
    setDate(createOptionsArray(1, 31));
    setMonth(createOptionsArray(1, 12));
    setYear(createOptionsArray(1930, 2023));
  }, []);
  const [date, setDate] = useState([]);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <div>
      <CentreModal>
        <div className="block">
          <div>
            <label className="font-bold">Full Name</label>
            <div className="flex">
              <div className="w-full">
                <input
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
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
            <span className="p-2 border rounded-2xl border-gray-400">Male</span>
            <span className="p-2 border rounded-2xl border-gray-400">
              Female
            </span>
            <span className="p-2 border rounded-2xl border-gray-400">
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
              <input type="radio" name="yes" value="Yes" />
              <label className="mr-32">Yes</label>
              <input type="radio" name="no" value="No" />
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
              // value={name}
              // onChange={(e) => setName(e.target.value)}
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
