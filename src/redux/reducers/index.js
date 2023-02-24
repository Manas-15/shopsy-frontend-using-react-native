import { combineReducers } from "redux";
import { user } from "./user.reducer";
import { product } from "./product.reducer";
import { cart } from "./cart.reducer";

const MainReducer = combineReducers({
  user,
  product,
  cart,
});

const rootReducer = (state, action) => {
  //   if (action.type === userConstants.LOGOUT) {
  //     state = undefined;
  //   }
  return MainReducer(state, action);
};

export default rootReducer;
