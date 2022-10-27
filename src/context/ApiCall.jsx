import React from "react";
import { updateStart, updateSuccess, updateError } from "./useSlice";
export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("http://127.0.0.1:5173/", user);
    dispatch(updateSuccess(res.data));
  } catch (e) {
    dispatch(updateError());
  }
};
