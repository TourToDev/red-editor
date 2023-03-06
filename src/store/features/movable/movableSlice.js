import { createSlice } from "@reduxjs/toolkit";
const createMovableElement = () => {
  const newMovable = {
    position: {
      x: 10,
      y: 20,
    },
    properties: {},
    styles: {},
    id: new Date().getTime(),
  };
  return newMovable;
};
const initialState = {
  movableElements: [],
};

export const movableSlice = createSlice({
  name: "movable",
  initialState,
  reducers: {
    addNewElement: (state) => {
      const newElement = createMovableElement();
      state.movableElements.push(newElement);
    },
    mutateElement: (state, action) => {
      console.log("mutate");
      console.log(action);
      const { id, data } = action.payload;
      const elmIndex = state.movableElements.findIndex(
        (item) => item.id === id
      );
      //Object.assign(elm, data);
      state.movableElements[elmIndex] = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewElement, mutateElement } = movableSlice.actions;

export default movableSlice.reducer;
