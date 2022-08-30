import { configureStore } from "@reduxjs/toolkit";
import questionToEditSlice from "slice/questionToEditSlice";

const store = configureStore({
  reducer: {
    questionToEdit: questionToEditSlice,
  },
});

export default store;
