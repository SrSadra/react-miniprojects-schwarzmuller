import React from 'react'
import { redirect } from 'react-router'
import EventForm from './EventForm'

const NewEventPage = () => {
  return (
    <EventForm event={null} method="POST"/>
  )
}

export default NewEventPage


