import { userActions } from "../actions/user.actions";
import instance from "./api";
import TokenService from "./token.service";

const setup = (store) => {
  instance.interceptors.request.use(
    (config) => {
      console.log("Beforeeeeee");
      const token = TokenService.getLocalAccessToken();
      console.log("AFTERRRRRRRRRRRRRRRRRRRRR", token);
      if (token) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  const { dispatch } = store;

  instance.interceptors.response.use(
    (res) => {
      // console.log(res, "111111111111111");
      return res;
    },
    async (err) => {
      // console.log(err, "22222222222222");

      const originalConfig = err.config;
      if (originalConfig?.url !== "/" && err.response) {
        // Access Token was expired
        if (err.response.status === 403 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await instance.put("api/v1.0/users/getToken", {
              refresh_token: TokenService.getLocalRefreshToken(),
            });

            const { token, refresh_token } = rs.data?.data;

            // console.log(rs.data?.data);

            if (rs.data?.data) {
              dispatch(userActions.refreshToken(refresh_token));
              TokenService.updateLocalAccessToken(token, refresh_token);
              return instance(originalConfig);
            }
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
};
export default setup;
