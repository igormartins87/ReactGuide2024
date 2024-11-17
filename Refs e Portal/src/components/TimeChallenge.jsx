
import { useState , useRef } from "react";
import ResultModal from "./ResultModal";




export default function DesafioTempo({tile ,tempoAlvo}){
    const time = useRef();
    const dialog = useRef();

    const [tempoRemaining , setTimeRemaining] = useState( tempoAlvo * 1000);

    const timeisActive = tempoRemaining > 0 && tempoRemaining < tempoAlvo * 1000;

    if(tempoRemaining <=0){
        clearInterval(time.current);
        setTimeRemaining(tempoAlvo * 1000);
        dialog.current.open();
    }
 

   

    function handleStart(){
        time.current = setInterval(() => {
            SetTempoExpirado(true);
            dialog.current?.open();
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
            
        },10);
    }


    function handleStop(){
        dialog.current.open();
        clearInterval(time.current);
    }




    return(
    <>
    {TempoExpirado && < ResultModal ref={dialog} tempoAlvo={tempoAlvo} result= "Perdeu" />}
    <section className="challenge">
        <h2>{tile}</h2>
        {TempoExpirado && <p>Você Perdeu</p>}
        <p className="challenge-time">
            {tempoAlvo} Segundos{tempoAlvo > 1 ? 'S' : ''}
        </p>

        <p>
            <button onClick={ timeisActive ?handleStop : handleStart}> {tempoComecar ? 'Pare':'Começar'} 
                começando Desafio
            </button>
        </p>
        <p>
            <button onClick={handleStart}> {tempoComecar ? 'Pare':'Começar'} 
                começando Desafio
            </button>
        </p>
        <p className={timeisActive ? 'Ativo' : undefined}>
            {tempoComecar ? 'Tempo está  rodando' :'Tempo Inativo'};
        </p>
    </section>
    </>
    )
}