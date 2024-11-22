import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function DesafioTempo({ tile, tempoAlvo }) {
    const time = useRef();
    const dialog = useRef();

    // Estados
    const [tempoRemaining, setTimeRemaining] = useState(tempoAlvo * 1000);
    const [tempoExpirado, setTempoExpirado] = useState(false);
    const [tempoComecar, setTempoComecar] = useState(false);

    const timeIsActive = tempoRemaining > 0 && tempoRemaining < tempoAlvo * 1000;

    if (tempoRemaining <= 0) {
        clearInterval(time.current);
        setTimeRemaining(tempoAlvo * 1000);
        dialog.current?.open();
    }

    function handleStart() {
        setTempoComecar(true);
        time.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);

            if (tempoRemaining <= 0) {
                setTempoExpirado(true);
                dialog.current?.open();
                clearInterval(time.current);
            }
        }, 10);
    }

    function handleStop() {
        setTempoComecar(false);
        clearInterval(time.current);
        dialog.current?.open();
    }

    return (
        <>
            {tempoExpirado && (
                <ResultModal ref={dialog} tempoAlvo={tempoAlvo} result="Perdeu" />
            )}
            <section className="challenge">
                <h2>{tile}</h2>
                {tempoExpirado && <p>Você Perdeu</p>}
                <p className="challenge-time">
                    {tempoAlvo} Segundo{tempoAlvo > 1 ? "s" : ""}
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
