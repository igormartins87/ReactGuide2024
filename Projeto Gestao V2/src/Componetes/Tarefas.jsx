import NovaTarefa from "./NovaTarefa";

export default function Tarefas({tarefas,onAdd, onDelete}){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tarefas</h2>
        <NovaTarefa onAdd={onAdd} />
        {tarefas.length === 0 && (<p className="text-stone-800 my-4"> Esse projeto ainda não  tem nenhum tarefa</p>)}
        {tarefas.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tarefas.map((tarefa)=> (<li key={tarefa.id} className="flex justify-between my-4"><span> {tarefa.text}</span>
            <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(tarefa.id)}>Apagar</button>
            
            </li>))}

        </ul>}
    </section>
}