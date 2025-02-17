import Button from "./Button";

export default function ProjectSideBar({onStartAddProject}) {
    return (
      <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Seu Projetos</h2>
        <div>
          <Button onClick={onStartAddProject} >
            +Adicionar Projetos
          </Button>
        </div>
        <ul></ul>
      </aside>
    
    );
  };
  
  