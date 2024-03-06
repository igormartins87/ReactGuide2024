import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TabButton from "./Components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectTopic, setSelectedTopic] = useState();

  function handleSelect(selectButton) {
    // selectButton => Componentes,Jsx,props,states
    setSelectedTopic(selectButton);
    console.log(selectTopic);
  }

  console.log("Componentes do APP estão sendo executados");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.id} {...conceptItem} />)}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
