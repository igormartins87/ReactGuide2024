import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function DesafioTempo({ tile, tempoAlvo }) {
  const time = useRef();
  const dialog = useRef();

  // Estados
  const [tempoRemaining, setTimeRemaining] = useState(tempoAlvo * 1000);
  const [tempoComecar, setTempoComecar] = useState(false);

  const timeIsActive = tempoRemaining > 0 && tempoRemaining < tempoAlvo * 1000;

  function handleStart() {
    setTempoComecar(true);
    time.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 10) {
          clearInterval(time.current);
          dialog.current?.open();
          return 0; // Garante que o tempo não fique negativo
        }
        return prevTime - 10;
      });
    }, 10);
  }

  function handleStop() {
    setTempoComecar(false);
    clearInterval(time.current);
    dialog.current?.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        tempoAlvo={tempoAlvo}
        remainingTime={tempoRemaining}
      />
      <section className="challenge">
        <h2>{tile}</h2>
        <p className="challenge-time">
          {tempoRemaining / 1000} Segundo{tempoRemaining / 1000 > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {tempoComecar ? "Parar" : "Começar"} Desafio
          </button>
        </p>
        <p className={timeIsActive ? "Ativo" : undefined}>
          {tempoComecar ? "Tempo está rodando" : "Tempo Inativo"}
        </p>
      </section>
    </>
  );
}
