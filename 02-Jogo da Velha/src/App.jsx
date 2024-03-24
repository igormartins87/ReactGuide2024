import Player from "./Componentes/Player";
import GameBoard from "./Componentes/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Jogadores */}

        <ol id="players">
          <Player initialName="Jogador 1" symbol="X" />
          <Player initialName="Jogador 2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
