import React from "react";

export default function Square({ squareClick }) {
  return (
    <button
      onClick={squareClick}
      className="w-12 h-12 border border-gray-400 m-1 "
    >
      X
    </button>
  );
}
