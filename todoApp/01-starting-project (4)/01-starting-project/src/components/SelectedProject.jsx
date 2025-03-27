import React from 'react'
import Task from './Task';

const SelectedProject = ({project,onDelete}) => {
    console.log("project?" , project);
  
    const formattedDate = new Date(project.date).toLocaleDateString("en-US" , {
        year: "numeric",
        month: "short",
        day : "numeric"
    })

  return (
    <>
     <header className='my-2 mr-4 flex-column'>
        <div className='my-5  justify-between items-center '>
        <h1 className='text-xl font-bold mb-5'>{project.name}</h1>
        <button onClick={onDelete}>DELETE</button>
        </div>
        <p>{formattedDate}</p>
        <p className='whitespace-pre-wrap'>{project.description}</p> {/*this ensures that space between text be kept */}
    </header> 
    <Task/>
    </>
  )
}

export default SelectedProject;
