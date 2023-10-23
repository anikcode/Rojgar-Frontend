import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";
import loginReducer from "./loginReducer";
import userProfileReducer from "./userProfileReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  login: loginReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
