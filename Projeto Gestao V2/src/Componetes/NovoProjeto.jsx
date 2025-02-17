import { useRef } from "react";
import Input from "./Inputs";

export default function NovoProjeto({onAdd}) {

  const tituloRef = useRef();
  const descricaoRef = useRef();
  const vencimetoRef = useRef();

  function handleSave(){
    const enteredTitulo = tituloRef.current.value;
    const enteredDescricao = descricaoRef.current.value;
    const enteredVencimento = vencimetoRef.current.value;


    onAdd({
      titulo: enteredTitulo,
      descricao: enteredDescricao,
      vencimento: enteredVencimento
    })

  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancelar</button>
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
  );
}
