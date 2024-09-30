
import { useState } from "react";

export default function DesafioTempo({tile ,tempoAlvo}){
    const [tempoComecar , setTempoComecar] = useState(false);
    const[TempoExpirado, SetTempoExpirado] = useState(false);

    let time;

    function handleStart(){
        time = setTimeout(() => {
            SetTempoExpirado(true);
            
        }, tempoAlvo * 1000);
        setTempoComecar(true);
    }


    function handStop(){
        clearTimeout();
    }




    return <section className="challenge">
        <h2>{tile}</h2>
        {TempoExpirado && <p>Você Perdeu</p>}
        <p className="challenge-time">
            {tempoAlvo} Segundos{tempoAlvo > 1 ? 'S' : ''}
        </p>
        <p>
            <button onClick={handleStart}> {tempoComecar ? 'Pare':'Começar'} 
                começando Desafio
            </button>
        </p>
        <p className={tempoComecar ? 'Ativo' : undefined}>
            {tempoComecar ? 'Tempo está rodando' :'Tempo Inativo'};
        </p>
    </section>
}