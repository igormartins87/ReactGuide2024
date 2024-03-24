import { useState } from "react";


const inicialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
    const [quadrojogo, SetquadroJogo] = useState(inicialGameBoard);

    function handeSelectSquare(linhaIndex,colunaIndex){
        SetquadroJogo((prevGameBoard)=>{
            const updateGameBoard = [...prevGameBoard.map(innerArry=>[...innerArry])]
            prevGameBoard[linhaIndex][colunaIndex] = 'X';
            return updateGameBoard;


        });
    }

  
  return (
    <ol id="game-board">
      {quadrojogo.map((linha, linhaIndex) => (
        <li key={linhaIndex}>
          <ol>
            {linha.map((playerSymbol, colunaIndex) => (
              <li key={colunaIndex}>
                <button onClick={()=>handeSelectSquare(linhaIndex,colunaIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
