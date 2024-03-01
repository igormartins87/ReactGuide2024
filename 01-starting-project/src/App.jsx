
;
import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';
import TabButton from './Components/TabButton.jsx';



function App() {

  function handleSelect(){
    console.log('Hello');
}

  return (
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              titulo = {CORE_CONCEPTS[0].titulo}
              descricao = {CORE_CONCEPTS[0].descricao}
              img = {CORE_CONCEPTS[0].image} 

              CORE_CONCEPTS {...CORE_CONCEPTS[1]}

            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]}/>
           
        </ul>
        </section>
        <section id="examples">
          <h2>Exemplos</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Componentes</TabButton>
            <TabButton onSelect={handleSelect}>Jsx</TabButton>
            <TabButton onSelect={handleSelect}>props</TabButton>
            <TabButton onSelect={handleSelect}>states</TabButton>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
