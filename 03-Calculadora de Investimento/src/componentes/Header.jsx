import logo from '../assets/investment-calculator-logo.png'

export default function Header(){
    return <header id="header">
        <img src={logo} alt="Logo para mostrar bolsa de valores " />
        <h1>Calculador de Investimento</h1>
    </header>
}