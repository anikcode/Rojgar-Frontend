import React, { useEffect } from "react";
import { GetDetails } from "../services/apis";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

function HomePage() {
  const login = useSelector((state) => state.login.showError);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   GetDetails();
  // }, []);
  return (
    <div>
      <Header />
      HomePage -{login ? 1 : 0}
      <div className="items-center flex justify-center w-[250px] h-[50px] flex rounded-2xl bg-blue-600">
        <span className="text-lg font-medium text-white ">
          Create your profile
        </span>
        <div className="text-white ml-2">
          <AddCircleRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
