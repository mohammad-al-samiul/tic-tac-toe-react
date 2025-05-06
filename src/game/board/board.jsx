import React, { useState } from "react";
import Square from "../../components/ui/square";
import { calculateWinner } from "../../utils/calculate-winner";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next Player ${xIsNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    const newSquares = squares.slice();

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setXisNext(!xIsNext);
    setSquares(newSquares);
  };
  return (
    <>
      {status}
      <div className="flex">
        <Square value={squares[0]} handleSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} handleSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} handleSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} handleSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} handleSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} handleSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} handleSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} handleSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} handleSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
