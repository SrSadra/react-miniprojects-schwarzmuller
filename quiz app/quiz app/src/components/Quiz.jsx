import React, { useCallback, useRef, useState } from 'react'
import QUESTIONS from "../questions"
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import SingleQuestion from './SingleQuestion';
import Summary from './Summary';

const Quiz = () => {

    const [userAnswers , setUserAnswers] = useState([]);

    const questionInd = userAnswers.length;



    const isFinished = questionInd === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prev => [...prev , selectedAnswer]);
    }, []);

    const handleSkip = useCallback(() => handleSelectAnswer(null) ,[handleSelectAnswer]);

    if (isFinished){
        return <Summary userAnswers={userAnswers}/>
    }    
    


  return (
    <div className='flex'>
      <SingleQuestion key={questionInd} questionInd={questionInd} handleSkip={handleSkip} onSubmit={handleSelectAnswer}/>
    </div>
  )
}

export default Quiz
