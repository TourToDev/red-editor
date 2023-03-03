import React, { useState } from "react";
import MovableSpace from "./MovableSpace";

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

export default function App() {
  const [movableElements, setMovableElements] = useState([]);
  const addElement = () => {
    const newElement = createMovableElement();
    setMovableElements((prev) => prev.concat([newElement]));
  };
  return (
    <div>
      <button onClick={addElement}>Add one</button>
      <MovableSpace
        movableElements={movableElements}
        setMovableElements={setMovableElements}
      />
    </div>
  );
}
