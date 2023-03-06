import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import movableReducer from "./features/movable/movableSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movable: movableReducer
  },
});
