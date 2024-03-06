import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    img: componentsImg,
    titulo: "Components",
    descricao: "teste 111111111111111111133223",
  },
  {
    img: jsxImg,
    titulo: "JSX",
    descricao: "teste2.",
  },
  {
    img: propsImg,
    titulo: "Props",
    descricao: "teste3333333.",
  },
  {
    img: stateImg,
    titulo: "State",
    descricao: "teste4.",
  },
];

export const EXAMPLES = {
  Components: {
    titulo: "Components",
    descricao:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  Jsx: {
    titulo: "JSX",
    descricao:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    titulo: "Props",
    descricao:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  states: {
    titulo: "State",
    descricao:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
