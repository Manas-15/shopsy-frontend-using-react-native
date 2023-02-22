import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../redux/reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loggerMiddleware = createLogger();
const persistedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = AsyncStorage.getItem("state");
    // if (serializedState === null) return undefined;
    // return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));
