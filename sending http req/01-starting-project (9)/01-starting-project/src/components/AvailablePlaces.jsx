import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js"
import {fetchLocation} from "../httpReq.js"  
import {useFetch} from "../hooks/useFetch.js"

async function fetchSortedPlaces(){ // if you have some other logics you can create a function including that fetch 
  //function and returning promis and sending it to costum hook
      const places = await fetchLocation();

      return new Promise((resolve , reject) => {
        console.log(places);
        navigator.geolocation.getCurrentPosition((position) => {
        const sortedLocation = sortPlacesByDistance(places , position.coords.latitude , position.coords.longitude);

        resolve(sortedLocation);
        })
      })

  }

export default function AvailablePlaces({ onSelectPlace }) {


  const {error , data: availablePlaces , isFetching } = useFetch(fetchSortedPlaces , []); // second is alising to availablePlaces


  if (error){
    return <Error title={"an error occured"} message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      onSelectPlace={onSelectPlace}
    />
  );
}
