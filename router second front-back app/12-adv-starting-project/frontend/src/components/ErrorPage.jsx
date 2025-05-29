import React from 'react'
import { useRouteError } from 'react-router';
import MainNavigation from './MainNavigation';

const ErrorPage = () => {
    const res = useRouteError(); // cuz we return response here the res is response type

    let title = "an error occured";
    let message = "something went wrong"

    if (res.status === 500){
        message = JSON.parse(res.data).message; // since res.data is string we should convert it back to object
    }
    else if (res.status === 404){
        title = "Not found"
        message = "page/resource not found"
    }



  return (
    <>
    <MainNavigation />
    <h2>
      {title}
    </h2>
    <p>{message}</p>
    </>
  )
}

export default ErrorPage
