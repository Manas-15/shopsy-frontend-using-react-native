import { cartConstants } from "../constants/cart.constants";
import { cartService } from "../services/cart.service";

export const cartActions = {
  addProduct,
  // removeProduct,
};

function addProduct(product) {
  return (dispatch) => {
    dispatch(request(product));
    cartService
      .addProduct(product)
      .then((data) => {
        dispatch(success(data));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };

  function request(product) {
    return { type: cartConstants.ADD_PRODUCT_REQUEST, product };
  }
  function success(data) {
    return { type: cartConstants.ADD_PRODUCT_SUCCESS, data };
  }
  function failure(error) {
    return { type: cartConstants.ADD_PRODUCT_FAILURE, error };
  }
}
