import {  useState }  from "react";
import TabButton  from "./TabButton.jsx";
import { EXAMPLES  }  from "../data.js";
import Section from "./Section.jsx";


export default function Examples(){


    const [selectTopic, setSelectedTopic] = useState();

    function handleSelect(selectButton) {
      // selectButton => Componentes,Jsx,props,states
      setSelectedTopic(selectButton);
      console.log(selectTopic);
    }
  
    return (
        <Section titulo="Examples" id="examples">
        <h2>Exemplos</h2>
        <menu>
          <TabButton isSelect={selectTopic ==='Components'} onClick={() => handleSelect("Components")}>
            Componentes
          </TabButton>
          <TabButton isSelect={selectTopic === 'Jsx'} onClick={() => handleSelect("Jsx")}>Jsx</TabButton>
          <TabButton isSelect={selectTopic==='props'} onClick={() => handleSelect("props")}>props</TabButton>
          <TabButton isSelect={selectTopic ==='states'}onClick={() => handleSelect("states")}>
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
      </Section>
    )
}