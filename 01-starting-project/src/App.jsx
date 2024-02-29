
import img  from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';



const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header()
 {

  const descricao = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src= {img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descricao} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({img,titulo,descricao}){
  return (
    <li>
      <img src = {img} alt={titulo}/>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </li>
  )
}




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
