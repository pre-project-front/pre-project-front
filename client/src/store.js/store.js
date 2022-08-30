import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "slice/questionSlice";

const store = configureStore({
  reducer: {
    question: questionSlice,
  },
});

export default store;
