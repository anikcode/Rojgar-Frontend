import { USER_PROFILE } from "../actions/cakeTypes";

const initialState = {
  editProfile: "",
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        editProfile: action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
