import api from "./api";

export const cartService = {
  addProduct,
  // removeProduct,
};

function addProduct(product) {
  console.log(
    "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
    product
  );
  return api.post("/cart-items", product);
}
