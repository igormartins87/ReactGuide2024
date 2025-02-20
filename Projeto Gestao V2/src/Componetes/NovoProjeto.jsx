import { useRef } from "react";
import Input from "./Inputs";
import Modal from "./Modal";

export default function NovoProjeto({onAdd, onCancel}) {
  const modal = useRef();
  const tituloRef = useRef();
  const descricaoRef = useRef();
  const vencimetoRef = useRef();

  function handleSave(){
    const enteredTitulo = tituloRef.current.value;
    const enteredDescricao = descricaoRef.current.value;
    const enteredVencimento = vencimetoRef.current.value;


    if(enteredTitulo.trim() ===''|| enteredDescricao.trim() === '' || enteredVencimento.trim() ===''){

      modal.current.open();
      return;

    }

    


    onAdd({
      titulo: enteredTitulo,
      descricao: enteredDescricao,
      vencimento: enteredVencimento
    })

  }

  return (
    <>

    <Modal ref={modal} buttonCaption="ok">

      <h2 className='text-xl font-bold text-stone-700 my-4'> Informação invalida</h2>
      <p className='text-stone-600 mb-4'> Você esqueceu de preencher algum valor</p>
      <p className='text-stone-600 mb-4'> Preencha com dados validos</p>

    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancelar</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Salvar</button>
        </li>
      </menu>

      <div>
        < Input type="text" ref={tituloRef} label= "titulo"/>
        < Input ref={descricaoRef} label= "Descrição" textarea/>
        < Input  type="date"ref={vencimetoRef} label= "Vencimento"/>
      </div>
    </div>
    </>
  );
}
