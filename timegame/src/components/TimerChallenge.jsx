import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

const TimerChallenge = ({title , targetTime}) => {
    // const [timerStarted , setTimerStarted] = useState(false);
    // const [timeEnded , setTimeEnded] = useState(false);
    const timer = useRef()
    const showDialog = useRef();
    const [timeRemaining , setTimeRemaining] = useState(targetTime * 1000) // in milisecond

    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000; // second is for when timer started or not

    if (timeRemaining <= 0){
      clearInterval(timer.current);
      showDialog.current.open();
    }

    const onResetTimer = () => {
      setTimeRemaining(targetTime * 1000); // this can cause infinte assignment but since its in condition its ok
    }

    function onTimerStarted(){
        timer.current = setInterval(() => {
            // setTimeEnded(true) // this will be called when time has ended
            // showDialog.current.open()// this is a ref to dialog tag and shows it with this func
          setTimeRemaining(preTime => preTime - 10);
        }, 10); // interval every 10 milisecond

        // setTimerStarted(true);
    }

    function onTimerEnded(){
        clearInterval(timer.current);
        showDialog.current.open();
        // setTimerStarted(false);
    }

  return (
    <>
    <ResultModal onReset={onResetTimer} ref={showDialog} targetTime={targetTime} timeRemaining={timeRemaining} /> {/* showing it without condition not make error cuz showModal func is conditionally */}
    <section className='challenge'>
      <h2>{title}</h2>
      <p className='challenge-time'>{targetTime} Challege second{targetTime > 1 ? "s" : ""}</p>
      <p>
        <button onClick={timerActive ? onTimerEnded : onTimerStarted}>{timerActive ? "stop" : "start"}</button>
      </p>
      <p className={timerActive ? "active" : undefined}>{timerActive ? "time is running" : "timer inactive"}</p>
    </section>
    </>
  )
}

export default TimerChallenge
