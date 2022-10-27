import { createSlice } from "@reduxjs/toolkit";

export const useSlide = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Tony",
      email: "Tony@gmail.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    updateStart: (state, action) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state, action) => {
      state.error = true;
      state.pending = false;
    },
    remove: (state) => (state = {}),
  },
});
export const {
  updateSuccess,
  updateStart,
  updateError,
  update,
  remove,
  pending,
} = useSlide.actions;
export default useSlide.reducer;
