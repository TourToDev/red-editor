import React, { useState } from "react";
import { addNewElement } from "../store/features/movable/movableSlice";
import { Counter } from "./Counter";
import MovableSpace from "./MovableSpace";
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const movableElements = useSelector((state) => state.movable.movableElements);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addNewElement())}>Add one</button>
      <Counter></Counter>
      <MovableSpace
        movableElements={movableElements}
      />
    </div>
  );
}
