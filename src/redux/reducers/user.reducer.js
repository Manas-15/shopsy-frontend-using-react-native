import { userConstants } from "../constants/user.constants";

export function user(
  state = {
    loggedIn: false,
    accessToken: null,
    user: null,
  },
  action
) {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return { ...state, loggedIn: false };
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        accessToken: action?.data?.accessToken,
        user: action?.data,
      };
    case userConstants.USER_LOGIN_FAILURE:
      return { ...state, loggedIn: false };

    case userConstants.REFRESH_TOKEN:
      return {
        ...state,
        refresh_token: action?.refreshToken,
      };

    case userConstants.LOGOUT:
      return { loggedOut: true };

    default:
      return state;
  }
}
