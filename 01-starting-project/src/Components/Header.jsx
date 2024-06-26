
import Reactimg  from '../assets/react-core-concepts.png';
import './Header.css';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }



 export default function Header()
 {

  const descricao = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src= {Reactimg} alt="Stylized atom" />
      <h1>Igor Martins de Almeida </h1>
      <p>
        {descricao}  meu Primeiro portifólio de React !
      </p>
    </header>
  );
}
