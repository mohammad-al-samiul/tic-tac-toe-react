import React, { useState } from "react";
import Board from "./board/board";
import History from "./history/history";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (newSquares) => {
    setXisNext(!xIsNext);
    const newHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXisNext(move % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to start the game`;
    }
    return (
      <li key={move}>
        <button
          className="border border-gray-400 m-1 p-2 cursor-pointer"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <History moves={moves} />
      </div>
    </div>
  );
}
