import React, { useState } from 'react'
import questions from '../questions'
import Answers from './Answers';
import QuestionTimer from './QuestionTimer';

const SingleQuestion = ({questionInd ,handleSkip , onSubmit }) => {

    const [answer, setAnswer] = useState({
        userAnswer : "",
        isCorrect : null
    });

    let timer = 3000; // total time for answring

    if (answer.isCorrect !== null){
        timer = 2000;
    }
    else if (answer.userAnswer !== ""){
        timer = 1000;
    }
    

    

    function handleSelectAnswer(userAnswer){
        setAnswer({
            userAnswer : userAnswer,
            isCorrect : null
        });

        console.log("in func" , answer.isCorrect );
        

        setTimeout(() => {
            setAnswer({
                userAnswer : userAnswer,
                isCorrect: questions[questionInd].answers[0] === userAnswer
            });

            setTimeout(() => {
                onSubmit(userAnswer);
            }, 2000);
        }, 1000);
    }



  return (
    <>
      <h2>Question number {questionInd + 1}</h2>
      <QuestionTimer timer={timer} onTimeout={answer.userAnswer === "" ? handleSkip : null} /> {/* null is just placeholder that user has no answer selected  */}
      {/* key attrbute make the component to be re-created again so the timer be reset again */}
      {/*adding key prop to questionTimer make the component to be created again when the timer changes. it makes the interval to be created again */}
      {/*making the onTimeput conditionaly in order to this funct be effected only if the time is up for no answering not on ending the timeout  */}
      <p>{questions[questionInd].text}</p>
      <Answers  answers={questions[questionInd].answers} answerState={answer.isCorrect} handleSelectAnswer={handleSelectAnswer}/>
    </>
  )
}

export default SingleQuestion
