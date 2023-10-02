import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";
import IceCreamContainer from "./components/IceCreamContainer";
import HookCakeContainer from "./components/HookCakeContainer";

import ErrorModal from "./components/ErrorModal";
import Register from "./components/Register";

function RouteFile(props) {
  const flag = useSelector((state) => state.login.showError);
  const showError = useSelector((state) => state.login.showError);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ice" element={<IceCreamContainer />} />
          <Route path="/hook" element={<HookCakeContainer />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      {flag && <ErrorModal flag={true} />}
    </div>
  );
}

export default RouteFile;