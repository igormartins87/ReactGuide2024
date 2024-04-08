export default function GameOver({ vencedor ,onRestart }) {
  return (
    <div id="game-over">
      <h2>Fim do Jogo!</h2>
      {vencedor && <p>{vencedor} Ganhador!</p>}
      {!vencedor && <p>Foi um empate!</p>}
      <p>
        <button onClick={onRestart}>Restart!</button>
      </p>
    </div>
  );
}
