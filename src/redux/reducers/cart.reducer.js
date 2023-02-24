import { cartConstants } from "../constants/cart.constants";

export function cart(
  state = {
    allCartProducts: null,
  },
  action
) {
  switch (action.type) {
    case cartConstants.ADD_PRODUCT_REQUEST:
      return { ...state, isAdded: false };
    case cartConstants.ADD_PRODUCT_SUCCESS:
      return { ...state, allCartProducts: [action?.data], isAdded: true };
    case cartConstants.ADD_PRODUCT_FAILURE:
      return { ...state, isAdded: false };

    default:
      return state;
  }
}
