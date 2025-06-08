import React from 'react'
import { redirect, useLoaderData, useParams, useRouteLoaderData } from 'react-router'
import EventItem from './EventItem';

const EventsDetailPage = () => {
    const data = useRouteLoaderData("event-detail");


  return (
    <EventItem event={data.event} />

  )
}

export default EventsDetailPage;

export const eventLoader = async ({requests , params}) => { 
    const id = params.id;
    console.log(id);
    

    const res = await fetch(`http://localhost:8080/events/${id}`);

    if (!res.ok){
        throw new Response(JSON.stringify({messgae : "couldnt fetch data", status : 500}));
    }else{
        return res;
    }
  }


export const deleteEventAction = ({request, params}) => {
  const id = params.id;

  const res = fetch(`http://localhost:8080/events/${id}`, {
    method: request.method
  });

  if (!res.ok){
    throw new Response(JSON.stringify({messgae : "couldnt fetch data", status : 500}));
  }

  return redirect("/events");
}
