import React, { useState } from 'react'

function AddTask() {
  const [taskName , setTaskName] = useState("");

  function addTask(event){
    setTaskName(event.target.value);
  }

  function submitTask(){
    //forward task
    setTaskName("");
  }

  return (
    <div>
      <input value={taskName} onChange={addTask} className='mx-5' type='text'/>
      <button onClick={submitTask} className='bg-stone-600 p-1 rounded-md text-xl text-stone-400 font-mono'>Add Task</button> 
    </div>
  )
}

export default AddTask;