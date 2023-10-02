import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useSelector, useDispatch } from "react-redux";
import IceCreamContainer from "./components/IceCreamContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import ErrorModal from "./components/ErrorModal";

function RouteFile(props) {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.login.showError);
  const showError = useSelector((state) => state.login.showError);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ice" element={<IceCreamContainer />} />
          <Route path="/hook" element={<HookCakeContainer />} />
          <Route path="/error" element={<ErrorModal />} />
        </Routes>
      </Router>
      {flag && <ErrorModal flag={true} />}
    </div>
  );
}

export default RouteFile;
