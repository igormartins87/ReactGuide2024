import NovoProjeto from "./Componetes/NovoProjeto";
import ProjectSideBar from "./Componetes/projetoSideBar";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar />
        <NovoProjeto />
      </main>
    </>
  );
}

export default App;
