
;
import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';



function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
