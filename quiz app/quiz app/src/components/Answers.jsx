import React, { useRef } from 'react'

function Answers({answers , answerState , handleSelectAnswer}) {
    const shuffledAnswersRef = useRef(); 

    if (!shuffledAnswersRef.current){ //if the shuffled answer is undefined.(just in the first creation)
        shuffledAnswersRef.current = [...answers];
        shuffledAnswersRef.current.sort(() => Math.random() - 0.5);    
    }

    console.log(answerState);
    

  return (
    <ul>
    {shuffledAnswersRef.current.map((answer) => (
      <li key={answer}>
          <button onClick={() => handleSelectAnswer(answer)} className={answerState  ? "bg-green-600": answerState == false ? "bg-red-600" : ""} disabled={answerState !== null}>{answer}</button>
      </li>
    ))}
    </ul>
  )
}

export default Answers
