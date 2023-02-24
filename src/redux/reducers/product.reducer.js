import { productConstants } from "../constants/product.constants";

export function product(
  state = {
    allProducts: null,
  },
  action
) {
  switch (action.type) {
    case productConstants.GET_PRODUCT_REQUEST:
      return { ...state, isProductFetched: false };
    case productConstants.GET_PRODUCT_SUCCESS:
      return { ...state, allProducts: [action?.data], isProductFetched: true };
    case productConstants.GET_PRODUCT_FAILURE:
      return { ...state, isProductFetched: false };
    default:
      return state;
  }
}
