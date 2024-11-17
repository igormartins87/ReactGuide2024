import { forwardRef, useImperativeHandle, useRef } from 'react';


const ResultModal = forwardRef (function ResultModal({ result, tempoAlvo }, ref) {

    const dialog = useRef(); 


    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    });

  return (
    <dialog ref={ref} className="result-modal" open>
      <h2>Você {result}:</h2>
      <p>
        {" "}
        O tempo algo estava <strong>{tempoAlvo} segundos.</strong>
      </p>
      <p>
        {" "}
        Você parou o tempo com <strong>X segundos a esquerda.</strong>
      </p>
      <form method="dialog">
        <button>Fechado</button>
      </form>
    </dialog>
  );
});

export default ResultModal ;
