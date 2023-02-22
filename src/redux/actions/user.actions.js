import { userConstants } from "../constants/user.constants";
import { userService } from "../services/user.service";
// import TokenService from "../services/token.service";
import axios from "axios";

export const userActions = {
  signup,
  login,
  //   logOut,
  //   refreshToken,
};

function signup(user) {
  return (dispatch) => {
    dispatch(request(user));
    userService
      .signup(user)
      .then((data) => {
        console.log(data);
        dispatch(success(data));
        // if (data?.data?.data?.auth === true) {
        //   if (data?.data?.token) {
        //     const res = data?.data;
        //     TokenService.setUser(res);
        //   }
        // } else {
        //   toast(data?.data?.message?.toString(), {
        //     type: "error",
        //   });
        // }
      })
      .catch((error) => {
        console.log(error);
        dispatch(failure(error.toString()));
        toast(error?.message?.toString(), {
          type: "error",
        });
      });
  };

  function request(user) {
    return { type: userConstants.USER_SIGNUP_REQUEST, user };
  }
  function success(data) {
    return { type: userConstants.USER_SIGNUP_SUCCESS, data };
  }
  function failure(error) {
    return { type: userConstants.USER_SIGNUP_FAILURE, error };
  }
}

function login(user) {
  return (dispatch) => {
    dispatch(request(user));
    userService
      .login(user)
      .then((data) => {
        dispatch(success(data));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };

  function request(user) {
    return { type: userConstants.USER_LOGIN_REQUEST, user };
  }
  function success(data) {
    return { type: userConstants.USER_LOGIN_SUCCESS, data };
  }
  function failure(error) {
    return { type: userConstants.USER_LOGIN_FAILURE, error };
  }
}
