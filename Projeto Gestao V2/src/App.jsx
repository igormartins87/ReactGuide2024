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
      const projectId = Math.random();

      const NovoProjeto = {
        ...projectData,
        id: projectId,
      };
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects,NovoProjeto]
      }
    })
  }


  function handleCancelAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId : undefined,
      }
    })
  }




  let content;

  if(projectState.selectedProjectId === null){
    content = <NovoProjeto onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelecionado onStartAddProject={handleStartAddProject}/> ;
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects}  />

        {content}
        
      </main>
    </>
  );
}

export default App;
