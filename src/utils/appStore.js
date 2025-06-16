import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

//config the stroe to use it globally
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
