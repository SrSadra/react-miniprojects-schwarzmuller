import React, { useEffect, useState } from 'react'

function QuestionTimer({timer , onTimeout}) {
    const [remaining , setRemaining] = useState(timer);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(prev => prev - 10);
        } , 10);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() =>{
        const timeout = setTimeout(() => {
            
            onTimeout(); // be triggred only if no answer been selected
        }, timer);

        return () => {
            clearTimeout(timeout);
        }
    } , [timer, onTimeout]);

  return (
    <progress value={remaining} max={timer} className={ onTimeout ? null : "hidden"}/>
  )
}

export default QuestionTimer
