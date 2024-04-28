import { useState } from "react";
import Header from "./componentes/Header.jsx";
import UserInput from "./componentes/UserInput.jsx";
import Results from "./componentes/Resultados.jsx";

function App() {
  const [userInput, setUserImput] = useState({
    InvestimentoIncial: 10000,
    InvestimentoAnual: 1200,
    RetornoEsperado: 6,
    duracao: 10,
  });

  const inputIsValid = userInput.duracao >= 1

  function handleChange(inputIdentifier, newValue) {
    setUserImput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center"> Por favor digite um valor valido</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
