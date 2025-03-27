import React, { useEffect, useState } from 'react'

function ProgressBar({timer}) { //this component ensures just this component be executed every 10 mili second and not all deleteConfirm
  const [remaining , setRemaining] = useState(timer);
 
  useEffect(() => { 
    const interval = setInterval(() => {
      setRemaining((prev) => prev - 10);
      console.log("interval");
      
    } , 10)

    return () => {
      clearInterval(interval);
    }
  } , []);

  return (
    <progress value={remaining} max={timer}/>
  )
}

export default ProgressBar
