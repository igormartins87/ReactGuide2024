import { useState } from "react";
import Header from "./componentes/Header.jsx";
import UserInput from "./componentes/UserInput.jsx";

function App() {
  const [userInput, setUserImput] = useState({
    InvestimentoIncial: 10000,
    InvestimentoAnual: 1200,
    RetornoEsperado: 6,
    duracao: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserImput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput />
    </>
  );
}

export default App;
