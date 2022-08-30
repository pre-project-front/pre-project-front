import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    value: { id: null, author: "", title: "", content: "" },
  },
  reducers: {
    edit: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { edit } = questionSlice.actions;
export default questionSlice.reducer;
