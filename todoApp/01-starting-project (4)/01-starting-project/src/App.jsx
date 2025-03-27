import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const counter = useRef(0);
  const [isAddProjectClicked , setIsAddProjectClicked] = useState(false);
  const [projectStatus , setProjectStatus] = useState({
    projectId: undefined,
    projects: []
  });


  function handleAddTask(taskText){
    setProjectStatus((prev) => {
      const project = projectStatus.projects.find((el) => el.id === prev.projectId);
      const newTask = {
        id : Math.random(),
        name : taskText
      }
      project = {
        ...project,
        tasks : [...tasks , newTask]
      }

      //need work...
    })
  }

  function handleAddProject(){
    setProjectStatus(prev =>  {
      return {
      projectId: null, // null for adding new project
      projects: prev.projects
      }
    })
  };

  function handleCancelButton(){
    setProjectStatus(prev => {
      return {
        projectId : undefined,
        projects : prev.projects
      }
    })
  }

  function handleDeleteButton(){
    setProjectStatus(prev => {
      return {
        projectId : undefined,
        projects : prev.projects.filter(el => el.id !== prev.projectId)
      }
    })
  }

  function handleSelectedProject(id){
    setProjectStatus(prev => {
      return {
        projectId : id,
        projects : prev.projects
      }
    })
  }

  function handleNewProject(newProject){
    setProjectStatus(prev => {
      return {
        projectId : newProject.id,
        projects : [...prev.projects , newProject]
      }
    })
  }

  let content;
  // when handlenewproject function is executed then this will be runned in next rendering
  if (projectStatus.projectId === null){ //adding new project
    content = <AddProject projectId={counter} handleNewProject={handleNewProject} onCancel={handleCancelButton}/>
  }else if (projectStatus.projectId === undefined){
    content = <NoProject handleAdd={handleAddProject}/>
  }else{
    content = <SelectedProject onDelete={handleDeleteButton} project={projectStatus.projects.find(el => el.id === projectStatus.projectId)}/>;
  }

  console.log(projectStatus);
  

  return (
    <main className="h-screen flex gap-8"> 
      <Sidebar  projects={projectStatus.projects} handleAdd={handleAddProject} handleSelected={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
