import { SHOW_ERROR, HIDE_ERROR } from "../actions/cakeTypes";
const initialState = {
  showError: false,
  hideError: true,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        showError: true,
        errorMessage: action.payload,
      };
    case HIDE_ERROR:
      return {
        ...state,
        hideError: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
