import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNotification from './MainNotification'

const Route = () => {
  return (
    <>
     <MainNotification />
     <Outlet /> 
    </>
  )
}

export default Route
