export default function GameOver({ vencedor }) {
  return (
    <div id="game-over">
      <h2>Fim do Jogo!</h2>
      <p>{vencedor} Ganhador!</p>
      <p>
        <button>Restar!</button>
      </p>
    </div>
  );
}
