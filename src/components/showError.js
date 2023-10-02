import React from "react";
import store from "../redux/store";

export const showError = (error) => {
  let errorMessage = error;
  // if (error.response && error.response.data.errorMessage) {
  //   errorMessage = error.response.data.errorMessage;
  // }
  store.dispatch({
    type: "SHOW_ERROR",
    payload: errorMessage,
  });
};

export default showError;
