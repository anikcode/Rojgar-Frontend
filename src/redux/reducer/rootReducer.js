import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import userProfileReducer from "./userProfileReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  login: loginReducer,
  userProfile: userProfileReducer,
  authToken: authReducer,
});

export default rootReducer;
