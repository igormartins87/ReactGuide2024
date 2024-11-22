import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ tempoAlvo, remainingTime }, ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const fomatarTempoCorrendo = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>Você Perdeu!</h2>}
      {!userLost && <h2>Você Parou o Desafio!</h2>}
      <p>
        O tempo alvo era <strong>{tempoAlvo} segundos.</strong>
      </p>
      <p>
        Você parou o tempo com <strong>{fomatarTempoCorrendo} segundos</strong> restantes.
      </p>
      <form method="dialog">
        <button>Fechar</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
