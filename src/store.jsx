import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./context/useSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
