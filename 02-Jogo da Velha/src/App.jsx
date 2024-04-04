import { useState } from "react";

import Player from "./Componentes/Player";
import GameBoard from "./Componentes/GameBoard";
import Log from "./Componentes/Log";
import { WINNING_COMBINATIONS } from "./Componentes/Combinacoes";

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
