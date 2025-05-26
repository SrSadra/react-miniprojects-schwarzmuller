import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  function navigation(){
    navigate("/product") // if some timer expired we can use navigate hook 
  }

  return (
    <>
      <h1>
          hi
      </h1>
      <p>head to <Link to="/product"> product list </Link></p>
      <button onClick={navigation}>go navigation manually</button>
    </>
  )
}

export default HomePage
