import React, { useState } from "react";
import Board from "./board/board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] = useState(true);

  const currentSquares = history[history.length - 1];

  const handlePlay = (newSquares) => {
    setXisNext(!xIsNext);
    setHistory([...history, newSquares]);
  };

  return (
    <>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </>
  );
}
