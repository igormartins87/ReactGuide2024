import { useState } from "react";

export default function UserInput() {


  return (
    <section id="user-input">
      <div className="input-group"></div>
      <p>
        <label>Investimento Incial</label>
        <input
          type="number"
          required
          value={userInput.InvestimentoIncial}
          onChange={(event) => handleChange("InvestimentoIncial", event.value)}
        />
      </p>

      <p>
        <label>Investimento Anual</label>
        <input
          type="number"
          required
          value={userInput.InvestimentoAnual}
          onChange={(event) => handleChange("InvestimentoAnual", event.value)}
        />
      </p>

      <p>
        <label>Retorno Esperado</label>
        <input
          type="number"
          required
          value={userInput.RetornoEsperado}
          onChange={(event) => handleChange("RetornoEsperado", event.value)}
        />
      </p>
      <p>
        <label>Duração</label>
        <input
          type="number"
          required
          value={userInput.duracao}
          onChange={(event) => handleChange("duracao", event.value)}
        />
      </p>
    </section>
  );
}
