import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, tempoAlvo, tempoRestante }, ref) {
  const dialog = useRef();

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
      <h2>Você {result}!</h2>
      <p>
        O tempo alvo era <strong>{tempoAlvo} segundos.</strong>
      </p>
      <p>
        Você parou o tempo com <strong>{(tempoRestante / 1000).toFixed(2)} segundos</strong> restantes.
      </p>
      <form method="dialog">
        <button>Fechar</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
