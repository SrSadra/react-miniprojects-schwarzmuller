import React from 'react'
import quizlogo from "../assets/quiz-logo.png"

function Header() {
  return (
    <header className='flex flex-col items-center p-4 mb-5 bg-sky-300 border-y-sky-950 border-t-2 border-b-2'>
      <img className='w-11 h-11 ' src={quizlogo} alt="quiz img"/>
      <h1 className='uppercase text-3xl font-bold'>Quiz App</h1>
    </header>
  )
}

export default Header;
