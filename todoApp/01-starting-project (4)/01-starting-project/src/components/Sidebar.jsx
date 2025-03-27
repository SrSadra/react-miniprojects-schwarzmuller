import React from 'react'
import ButtonNewProjbutton from './ButtonNewProject'

const Sidebar = ({projects,handleAdd,handleSelected, projectId}) => {
  return (
    <div className='w-1/3 h-full px-7 py-8 bg-stone-950 text-stone-300 md:w-72 rounded-r-xl '>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-100'>Your Projects</h2>
      <div>
        <ButtonNewProjbutton onClick={handleAdd}>Add Project</ButtonNewProjbutton>
      </div>
      <ul className='mt-5'>
        {projects.map((el) => {
          console.log("elll" , el);
          return (
          <li key={el.id}><button onClick={() => handleSelected(el.id)} className='my-5 w-max px-7 py-3 text-stone-900 rounded-sm bg-stone-500 hover:bg-stone-400'>{el.name}</button></li>
        )}
      )}
      </ul>
    </div>
  )
}

export default Sidebar
