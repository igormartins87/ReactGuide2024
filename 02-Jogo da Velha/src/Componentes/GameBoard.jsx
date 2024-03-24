import { useState } from "react";

const inicialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare , activePlayerSymbol}) {
  const [quadrojogo, SetquadroJogo] = useState(inicialGameBoard);

  function handeSelectSquare(linhaIndex, colunaIndex) {
    SetquadroJogo((prevGameBoard) => {
      const updateGameBoard = [
        ...prevGameBoard.map((innerArry) => [...innerArry]),
      ];
      updateGameBoard[linhaIndex][colunaIndex] = activePlayerSymbol;
      return updateGameBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {quadrojogo.map((linha, linhaIndex) => (
        <li key={linhaIndex}>
          <ol>
            {linha.map((playerSymbol, colunaIndex) => (
              <li key={colunaIndex}>
                <button
                  onClick={() => handeSelectSquare(linhaIndex, colunaIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
