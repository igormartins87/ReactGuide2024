import {  useState }  from "react";
import TabButton  from "./TabButton.jsx";
import { EXAMPLES  }  from "../data.js";


export default function Examples(){


    const [selectTopic, setSelectedTopic] = useState();

    function handleSelect(selectButton) {
      // selectButton => Componentes,Jsx,props,states
      setSelectedTopic(selectButton);
      console.log(selectTopic);
    }
  
    return (
        <section id="examples">
        <h2>Exemplos</h2>
        <menu>
          <TabButton isSelect={selectTopic ==='Components'} onSelect={() => handleSelect("Components")}>
            Componentes
          </TabButton>
          <TabButton isSelect={selectTopic === 'Jsx'} onSelect={() => handleSelect("Jsx")}>Jsx</TabButton>
          <TabButton isSelect={selectTopic==='props'} onSelect={() => handleSelect("props")}>props</TabButton>
          <TabButton isSelect={selectTopic ==='states'}onSelect={() => handleSelect("states")}>
            states
          </TabButton>
        </menu>

        {!selectTopic ? (
          <p>Por favor, selecione algum tópico.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectTopic]?.titulo}</h3>
            <p>{EXAMPLES[selectTopic]?.descricao}</p>
            <pre>
              <code>{EXAMPLES[selectTopic]?.code}</code>
            </pre>
          </div>
        )}
      </section>
    )
}