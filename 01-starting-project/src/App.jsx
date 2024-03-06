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
            <CoreConcept
              titulo={CORE_CONCEPTS[0].titulo}
              descricao={CORE_CONCEPTS[0].descricao}
              img={CORE_CONCEPTS[0].image}
              CORE_CONCEPTS
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Exemplos</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Componentes
            </TabButton>
            <TabButton onSelect={() => handleSelect("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>props</TabButton>
            <TabButton onSelect={() => handleSelect("states")}>
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
