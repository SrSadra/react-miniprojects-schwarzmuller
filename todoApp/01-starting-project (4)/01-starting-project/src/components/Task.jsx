import React from 'react'
import AddTask from './AddTask';

const Task = ({tasks}) => {
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold text-stone-800 my-2'>TASKS</h2>
      <AddTask />
      {tasks.length == 0 && <p>There is no task...</p>}
      {tasks.length !== 0 && <ul>{tasks.forEach((task) => {
        return (
          <li key={task.id} >
            <span>{task.name}</span> 
            <button>Clear</button>
          </li>
        )
      })}</ul>}
    </section>
  )
}

export default Task;
