import { useState } from "react";

import Player from "./Componentes/Player";
import GameBoard from "./Componentes/GameBoard";
import Log from "./Componentes/Log";
import GameOver from "./Componentes/GameOver";
import { WINNING_COMBINATIONS } from "./Componentes/Combinacoes";


const inicialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let board = inicialGameBoard;

  for(const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;

    board[row][col]=player

  }

  let Vencedor ;

  for(const Combinacoes of WINNING_COMBINATIONS){
    const PrimeiraSaqureSymbol = board[Combinacoes[0].row][Combinacoes[0].column];
    const SegundaSaqureSymbol = board[Combinacoes[1].row][Combinacoes[1].column];
    const TerceiraSaqureSymbol = board[Combinacoes[2].row][Combinacoes[2].column];

    if(PrimeiraSaqureSymbol && PrimeiraSaqureSymbol === SegundaSaqureSymbol && PrimeiraSaqureSymbol === TerceiraSaqureSymbol){
      Vencedor = PrimeiraSaqureSymbol
    }
  }



  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);




      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <header>
        <img src="public/game-logo.png" alt="jogo" />
        <h1> Jogo da Velha do Igor</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Jogador 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Jogador 2" symbol="0" isActive={activePlayer === "O"} />
        </ol>
        {Vencedor && <GameBoard Vencedor={Vencedor} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={board} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
