import React from "react";

const ShowProfileDetails = (props) => {
  return (
    <div className="flex flex-1 justify-between bg-slate-100 p-4 rounded-lg">
      <div>
        <p className="text-rose-900">Name</p>
        <p>{props.response[0]?.name}</p>
      </div>
      <div>
        <p className="text-rose-900">Date of birth</p>
        <p>{props.response[0]?.dob}</p>
      </div>
      <div>
        <p className="text-rose-900">Gender</p>
        <p>{props.response[0]?.gender}</p>
      </div>
      <div>
        <p className="text-rose-900">Career Break</p>
        <p>{props.response[0]?.career_break}</p>
      </div>
      <div>
        <p className="text-rose-900">Address</p>
        <p>{props.response[0]?.address}</p>
      </div>
    </div>
  );
};

export default ShowProfileDetails;
