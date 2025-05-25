import React, { useEffect, useState } from 'react'
import Product from './Product';
import useHttp from '../hook/useHttp';
import Error from './Error';

const requestInitial = {} // to avoid infinite loop and infinite req

const Meals = () => {
  const {isLoading , error , data: loadedMeals} = useHttp("http://localhost:3000/meals",requestInitial  , [])

  if(isLoading){
    return <p>Meals are loading...</p>
  }

  if (error){
    return <Error title="failed to fetch" message={error}/>
  }

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (<Product key={meal.id}  meals={meal}/>))}
    </ul>
  )
}

export default Meals
