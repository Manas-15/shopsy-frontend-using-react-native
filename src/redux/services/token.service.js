import AsyncStorage from "@react-native-async-storage/async-storage";

const getLocalAccessToken = async () => {
  // if (typeof window !== "undefined") {
  const item = await AsyncStorage.getItem("Shopsy-user");
  const user = JSON.parse(item);
  console.log(
    "getLocalAccessTokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn  USER",
    user?.user?.accessToken
  );
  return user?.user?.accessToken;
  // }
};

const getLocalRefreshToken = () => {
  if (typeof window !== "undefined") {
    const userData = JSON.parse(AsyncStorage.getItem("Shopsy-user"));
    return userData?.refresh_token;
  }
};

const updateLocalAccessToken = (token, refresh_token) => {
  if (typeof window !== "undefined") {
    let user = JSON.parse(AsyncStorage.getItem("Shopsy-user"));
    user.token = token;
    user.refresh_token = refresh_token;
    AsyncStorage.setItem("Shopsy-user", JSON.stringify(user));
  }
};
const getUser = () => {
  return JSON.parse(AsyncStorage.getItem("Shopsy-user"));
};
const setUser = async (res) => {
  await AsyncStorage.setItem(
    "Shopsy-user",
    JSON.stringify({
      token: res?.token,
      refresh_token: res?.refresh_token,
      user: res?.data,
    })
  );
};
const removeUser = () => {
  AsyncStorage.removeItem("Shopsy-user");
};

const TokenService = {
  getLocalAccessToken,
  getLocalRefreshToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
