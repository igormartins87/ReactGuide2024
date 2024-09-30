export default function DesafioTempo({tile ,tempoAlvo}){
    return <section className="challenge">
        <h2>{tile}</h2>
        <p className="challenge-time">
            {tempoAlvo} Segundos{tempoAlvo > 1 ? 'S' : ''}
        </p>
        <p>
            <button>
                come�ando Desafio
            </button>
        </p>
        <p className="">
            Tempo est� rodando/ Tempo Inativo
        </p>
    </section>
}