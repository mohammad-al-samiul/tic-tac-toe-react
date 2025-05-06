import React from "react";

export default function Square({ value, handleSquareClick }) {
  return (
    <button
      onClick={handleSquareClick}
      className="cursor-pointer w-12 h-12 border border-gray-400 m-1 font-bold"
    >
      {value}
    </button>
  );
}
