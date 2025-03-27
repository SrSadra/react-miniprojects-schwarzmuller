import React from 'react'

const ButtonNewProject = ({children,...props}) => {
  return (
    <button {...props} className='px-4 py-2 bg-stone-700 text-stone-300 rounded-md text-xl md:text-base hover:bg-stone-500'>
    {children}
    </button>
  )
}

export default ButtonNewProject;
