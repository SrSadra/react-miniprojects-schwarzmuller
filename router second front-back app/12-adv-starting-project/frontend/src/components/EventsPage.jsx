import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router';

function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();
//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/events');

//       if (!response.ok) {
//         setError('Fetching events failed.');
//       } else {
//         const resData = await response.json();
//         setFetchedEvents(resData.events);
//       }
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);

    const res = useLoaderData(); // return of loader function
    const events = res.events;


  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => { //Loader will be executed before the component is loaded.
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      //error
    //   throw Error("couldnt fetch data");
        throw new Response(JSON.stringify({message : "cant fetch data" , status: 500})); // the data is converted to string
        // throw json({message : "cant fetch data" , status: 500}); // another approach
    } else {
    //   const resData = await response.json();
    //   return resData.events;
    return response;
    }
  }