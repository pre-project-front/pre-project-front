import { createSlice } from "@reduxjs/toolkit";

const questionToEditSlice = createSlice({
  name: "questionToEdit",
  initialState: {
    value: { id: null, author: "", title: "", content: "" },
  },
  reducers: {
    edit: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { edit } = questionToEditSlice.actions;
export default questionToEditSlice.reducer;
