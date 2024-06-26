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
  const [players, setPlayers] = useState({
    X: "Jogador 1",
    O: "Jogador 2",
  });

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let board = [...inicialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }

  let Vencedor;

  for (const Combinacoes of WINNING_COMBINATIONS) {
    const PrimeiraSaqureSymbol =
      board[Combinacoes[0].row][Combinacoes[0].column];
    const SegundaSaqureSymbol =
      board[Combinacoes[1].row][Combinacoes[1].column];
    const TerceiraSaqureSymbol =
      board[Combinacoes[2].row][Combinacoes[2].column];

    if (
      PrimeiraSaqureSymbol &&
      PrimeiraSaqureSymbol === SegundaSaqureSymbol &&
      PrimeiraSaqureSymbol === TerceiraSaqureSymbol
    ) {
      Vencedor = players[PrimeiraSaqureSymbol];
    }
  }

  const empate = gameTurns.length === 9 && !Vencedor;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
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
          <Player
            initialName="Jogador 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Jogador 2"
            symbol="0"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(Vencedor || empate) && (
          <GameOver vencedor={Vencedor} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={board} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
