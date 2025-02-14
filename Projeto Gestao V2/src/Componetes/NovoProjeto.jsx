import Input from "./Inputs";

export default function NovoProjeto() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancelar</button>
        </li>
        <li>
          <button>Salvar</button>
        </li>
      </menu>

      <div>
        < Input label= "titulo"/>
        < Input label= "Descrição" textarea/>
        < Input label= "Vencimento"/>
      </div>
    </div>
  );
}
