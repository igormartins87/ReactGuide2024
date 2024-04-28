export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group"></div>
      <p>
        <label>Investimento Inicial</label>
        <input
          type="number"
          required
          value={userInput.InvestimentoInicial}
          onChange={(event) =>
            onChange("InvestimentoInicial", event.target.value)
          }
        />
      </p>

      <p>
        <label>Investimento Anual</label>
        <input
          type="number"
          required
          value={userInput.InvestimentoAnual}
          onChange={(event) =>
            onChange("InvestimentoAnual", event.target.value)
          }
        />
      </p>

      <p>
        <label>Retorno Esperado</label>
        <input
          type="number"
          required
          value={userInput.RetornoEsperado}
          onChange={(event) => onChange("RetornoEsperado", event.target.value)}
        />
      </p>
      <p>
        <label>Duração</label>
        <input
          type="number"
          required
          value={userInput.duracao}
          onChange={(event) => onChange("duracao", event.target.value)}
        />
      </p>
    </section>
  );
}
