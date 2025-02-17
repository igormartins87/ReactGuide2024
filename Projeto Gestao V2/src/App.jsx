import { useState } from "react";


import NoProjectSelecionado from "./Componetes/NoProjectSelecionado";
import NovoProjeto from "./Componetes/NovoProjeto";
import ProjectSideBar from "./Componetes/projetoSideBar";
import { use } from "react";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId:undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId : null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState=>{

      const NovoProjeto = {
        ...projectData,
        id: Math.random()
      };
      return{
        ...prevState,
        projects: [...prevState.projects,NovoProjeto]
      }
    })
  }


  console.log(projectState);



  let content;

  if(projectState.selectedProjectId === null){
    content = <NovoProjeto onAdd={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelecionado onStartAddProject={handleStartAddProject}/> ;
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar onStartAddProject={handleStartAddProject}  />

        {content}
        
      </main>
    </>
  );
}

export default App;
