import React from 'react'
import ButtonNewProject from './ButtonNewProject'

const NoProject = ({handleAdd}) => {
  return (
    <div className='mt-20 '>
      <h2>No project Selected</h2>
      <p>By creating new project you can be more creative...</p>
      <p><ButtonNewProject onClick={handleAdd}>New Project</ButtonNewProject></p>
    </div>
  )
}

export default NoProject
