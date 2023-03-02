import React, { useState } from "react";
import "./movable-space.less";

const movableElements = [
  {
    position: {
      x: 10,
      y: 20,
    },
    properties: {},
    styles: {},
    id: new Date().getTime(),
  },
];

export default function MovableSpace() {
  const [movableExistents, setMovableExistents] = useState(movableElements);
  const handleMouseDownOnMovable = (existentId) => {
    const moveHandler = (e) => {
      console.log("moveEvents");
      console.log(e);
      setMovableExistents((prev) => {
        return prev.map((item) => {
          if (item.id === existentId) {
            return {
              ...item,
              position: {
                x: item.position.x + e.movementX,
                y: item.position.y + e.movementY,
              },
            };
          }
          return item;
        });
      });
    };
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", moveHandler);
    });
  };
  return (
    <div className="movable-space">
        {JSON.stringify(movableExistents)}
      {movableExistents.map((item) => (
        <button
          className="movable-element"
          style={{
            top: item.position.y + "px",
            left: item.position.x + "px",
            width: 200 + "px",
            height: 50 + "px",
          }}
          key={item.id}
          onMouseDown={() => handleMouseDownOnMovable(item.id)}
        >
          Move me
        </button>
      ))}
    </div>
  );
}
