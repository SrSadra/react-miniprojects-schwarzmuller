import React from 'react'
import EventForm from './EventForm'
import { useLoaderData, useRouteLoaderData } from 'react-router'

const EditEventPage = () => {
    const data = useRouteLoaderData("event-detail"); // to access parent loader return

  return (
    <EventForm event={data.event}/> 
  )
}

export default EditEventPage
