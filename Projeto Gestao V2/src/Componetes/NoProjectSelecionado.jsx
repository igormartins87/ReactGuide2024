
import SemProjetoImagem from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelecionado({onStartAddProject}){
    return(
    <div className="mt-24 text-center w-2/3">
        <img src='{SemProjetoImagem}' className='w-16 h-16 object-contain mx-auto' />
        <h2 className='text-xl font-bold text-stone-500 my-4'>Não há projetos Selecionados</h2>
        <p className='text-stone-400 mb-4'>Selecione um projeto ou começe um novo</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Crie um novo projeto</Button>
        </p>
    </div>
    );
}