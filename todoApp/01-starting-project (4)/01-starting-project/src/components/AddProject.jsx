import React, { useRef } from 'react'
import { useState } from 'react'
import Modal from './Modal';

const AddProject = ({handleNewProject, onCancel , projectId}) => {
    const [name , setName] = useState("");
    const [description , setDescription] = useState("");
    const [date , setDate] = useState(null);

    const errorRef = useRef();

    function handleAdd(){
      if (name.trim() === "" || description.trim() === ""){
        console.log("akififddddddddddddddd");
        errorRef.current.open();

        return;
      }
      console.log("miad injaaa???");
      
      const newProject = {
        id : projectId.current,
        name,
        description,
        date,
        tasks: []
      };

      projectId.current++;

      handleNewProject(newProject);
    }

  return (
    <>
    <Modal ref={errorRef} />
    <div className='w-[50rem] mt-16'>
      <h2 className='flex justify-center text-stone-700 font-bold text-xl'>Add Project</h2>
      <form className='mx-auto my-8' onSubmit={handleAdd}>
        <div className='relative z-0 w-full mb-5 group'>
        <label className='peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-stone-600 peer-focus:dark:text-stone-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Name</label>
        <input onChange={(e) => setName(e.target.value)} className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:border-stone-600 peer' type="text" placeholder='Project 1'/>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
        <label className='peer-focus:font-medium absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-stone-600 peer-focus:dark:text-stone-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Description</label>
        <input onChange={(e) => setDescription(e.target.value)} className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:border-stone-600 peer' type="text" />
        </div>
        <div className='relative z-0 w-full mb-5 group'>
        <label className='peer-focus:font-medium absolute text-m text-stone-500 dark:text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-stone-600 peer-focus:dark:text-stone-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Due Date</label>
        <input onChange={(e) => setDate(e.target.value)} className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:border-stone-600 peer' type="date"/>
        </div>
        <main className='flex my-5  items-center justify-end'>
        <button type='submit' onClick={handleAdd} className='mx-2 text-stone-200 bg-stone-700 hover:bg-stone-600 rounded-md px-5 py-2'>Submit</button> 
        <button onClick={onCancel} className='ml-2 bg-stone-300 rounded-md px-5 py-2'>Cancel</button>
        </main>
      </form>
    </div>
    </>
  )
}

export default AddProject
