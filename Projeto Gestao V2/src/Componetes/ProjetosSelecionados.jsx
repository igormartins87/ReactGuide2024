import Tarefas from './Tarefas';

export default function ProjetosSelecionados({project, onDelete,onAddTarefa,onDeleteTarefa,tarefas}){

    const formattedDate = new Date(project.vencimento).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });


    return (
        <div className=" w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.titulo}</h1>
                    <button className="text-stone-600 hover: text-stone-950"onClick={onDelete}>Deletar</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.descricao}</p>
            </header>
            <Tarefas onAdd={onAddTarefa} onDelete={onDeleteTarefa} tarefas={tarefas} />

        </div>
    )
}