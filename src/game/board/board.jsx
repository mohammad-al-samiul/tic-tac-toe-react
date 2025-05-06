import React, { useState } from "react";
import Square from "../../components/ui/square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleSquareClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div>
        <Square squareClick={handleSquareClick} />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
