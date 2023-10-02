import React, { useEffect } from "react";
import { GetDetails } from "../services/apis";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";

function HomePage() {
  const login = useSelector((state) => state.login.showError);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   GetDetails();
  // }, []);
  return (
    <div className="text-3xl font-bold underline text-ellipsis">
      <Header />
      HomePage -{login ? 1 : 0}
    </div>
  );
}

export default HomePage;
