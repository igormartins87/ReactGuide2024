export default function DesafioTempo({tile ,tempoAlvo}){
    return <section className="challenge">
        <h2>{tile}</h2>
        <p className="challenge-time">
            {tempoAlvo} Segundos{tempoAlvo > 1 ? 'S' : ''}
        </p>
        <p>
            <button>
                começando Desafio
            </button>
        </p>
        <p className="">
            Tempo está rodando/ Tempo Inativo
        </p>
    </section>
}