import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { mutateElement } from "../../store/features/movable/movableSlice";
import "./movable-space.less";

export default function MovableSpace() {
  const movableElements = useSelector((state) => state.movable.movableElements);
  const dispatch = useDispatch();
  const handleMouseDownOnMovable = (existentId) => {
    const moveHandler = (e) => {
      console.log("moveEvents");
      console.log(e);
      const movedElm = movableElements.find((item) => item.id === existentId);
      const elmData = {
        ...movedElm,
        position: {
          x: movedElm.position.x + e.movementX,
          y: movedElm.position.y + e.movementY,
        },
      };
      dispatch(mutateElement({ id: existentId, data: elmData }));
      // setMovableElements((prev) => {
      //   return prev.map((item) => {
      //     if (item.id === existentId) {
      //       return {
      //         ...item,
      //         position: {
      //           x: item.position.x + e.movementX,
      //           y: item.position.y + e.movementY,
      //         },
      //       };
      //     }
      //     return item;
      //   });
      // });
    };
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", moveHandler);
    });
  };
  return (
    <div className="movable-space">
      {JSON.stringify(movableElements)}
      {movableElements.map((item) => (
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
