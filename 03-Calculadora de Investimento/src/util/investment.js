// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - RetornoEsperado: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  InvestimentoIncial,
  InvestimentoAnual,
  RetornoEsperado,
  duracao,
}) {
  const annualData = [];
  let investmentValue = InvestimentoIncial;

  for (let i = 0; i < duracao; i++) {
    const interestEarnedInYear = investmentValue * (RetornoEsperado / 100);
    investmentValue += interestEarnedInYear + InvestimentoAnual;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      InvestimentoAnual: InvestimentoAnual, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

