import api from "./api";

export const userService = {
  signup,
  login,
};

function signup(user) {
  return api.post(`/signup`, user);
}
function login(user) {
  return api.post(`/authentication`, user);
}
