import { useState } from "react";

import Player from "./Componentes/Player";
import GameBoard from "./Componentes/GameBoard";
import Log from "./Componentes/Log";


function App() {
  const[gameTurns,setGameTurns] =useState([])
  const [jogadorAtivo,setJogadorAtivo] = useState('X');

  function handleSelectSquare(){
    setJogadorAtivo((curActivePlayer) => curActivePlayer ==='X' ? 'O':'X');
    setGameTurns();
  }
  return (
    <main>
      <div id="game-container">
        {/* Jogadores */}

        <ol id="players" className="highlight-player">
          <Player initialName="Jogador 1" symbol="X" isActive={jogadorAtivo ==='X'} />
          <Player initialName="Jogador 2" symbol="0" isActive={jogadorAtivo ==='O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol ={jogadorAtivo} />
      </div>
      <Log />
    </main>
  );
}

export default App;
