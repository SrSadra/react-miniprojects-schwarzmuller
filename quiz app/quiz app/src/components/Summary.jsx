import React from 'react'
import questions from '../questions'



function Summary({userAnswers}) {
    const skippedQ = userAnswers.filter((el) => el === null);
    const correctQ = userAnswers.filter((el, ind) => el === questions[ind].answers[0]);

    const skippedPercentage =  Math.round(skippedQ.length / userAnswers.length * 100);
    const correctPercentage =  Math.round(correctQ.length / userAnswers.length * 100);
    const incorrectPercentage = 100 - skippedPercentage - correctPercentage;


  return (
    <div>
      <h2>Quiz finished</h2>
      <div>
        <p>
            <span>{correctPercentage}%</span>
            <span>Correct</span>
        </p>
        <p>
            <span>{skippedPercentage}%</span>
            <span>Skipped</span>
        </p>
        <p>
            <span>{incorrectPercentage}%</span>
            <span>Incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer , ind) => {
            let cssClass = "";

            if (answer === null){
                cssClass += "skiped";
            }else if (answer === questions[ind].answers[0]){
                cssClass += "correct";
            }
            else {
                cssClass += "incorrect";
            }

            return (
                <li key={ind}>
                    <h3>{questions[ind].text}</h3>
                    <p className={cssClass === "correct" ? "text-green-300" : cssClass === "incorrect" ? "text-red-400" : "text-gray-500"}>{answer === null ? "skipped" : answer}</p>
                </li>
            )
        })}
      </ol>
    </div>
  )
}

export default Summary
