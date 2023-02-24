import api from "./api";

export const productService = {
  getProduct,
};

function getProduct() {
  return api.get("/products");
}
