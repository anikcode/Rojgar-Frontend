import React from "react";
import store from "../redux/store";

export const showError = (error) => {
  let errorMessage = error;
  store.dispatch({
    type: "SHOW_ERROR",
    payload: errorMessage,
  });
};

export default showError;
