import Player from "./Componentes/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Jogadores */}

        <ol id="players">
          <Player name="Jogador 1" symbol="X" />
          <Player name="Jogador 2" symbol="0" />
        </ol>
      </div>
    </main>
  );
}

export default App;
