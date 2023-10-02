import { SHOW_ERROR, HIDE_ERROR } from "../actions/cakeTypes";

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    payload: {
      hasError: true,
      errorMessage,
    },
  };
};

export const hideError = () => {
  return {
    type: HIDE_ERROR,
    payload: {
      hasError: false,
    },
  };
};
