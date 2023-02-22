import { combineReducers } from "redux";
import { user } from "./user.reducer";

const MainReducer = combineReducers({
  user,
});

const rootReducer = (state, action) => {
  //   if (action.type === userConstants.LOGOUT) {
  //     state = undefined;
  //   }
  return MainReducer(state, action);
};

export default rootReducer;
