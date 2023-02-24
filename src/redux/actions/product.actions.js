import { productConstants } from "../constants/product.constants";
import { productService } from "../services/product.service";

export const productActions = {
  getProduct,
};

function getProduct() {
  return (dispatch) => {
    dispatch(request());
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzcxNTUwMjQsImV4cCI6MTY3NzI0MTQyNCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjNmNDYwMGM4MTk5ZTc4ODJlMjBiNjk2IiwianRpIjoiMzdlYWIzZWYtMWExYy00ODY5LWE1MGEtOGJlZGNkNzI2OTM0In0.7L8cmupLJD3lvn8Un0JaVZeYE2vKu28f34b8Nv6iy8w";
    // fetch("http://192.168.2.44:8000/products", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //     Authorization: `Bearer ${token}`, // notice the Bearer before your token
    //   },
    //   // body: JSON.stringify(yourNewData),
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson, "res JSON");
    //   })
    //   .catch((err) => console.log(err));
    console.log(
      "get product data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    );
    productService
      .getProduct()
      .then((data) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD data", data);
        dispatch(success(data));
      })
      .catch((error) => {
        console.log(
          "Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr "
        );
        dispatch(failure(error.toString()));
      });
  };

  function request() {
    return { type: productConstants.GET_PRODUCT_REQUEST };
  }
  function success(data) {
    return { type: productConstants.GET_PRODUCT_SUCCESS, data };
  }
  function failure(error) {
    return { type: productConstants.GET_PRODUCT_FAILURE, error };
  }
}
