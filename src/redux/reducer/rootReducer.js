import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
