import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal ({targetTime , timeRemaining , onReset} , ref) {
  const dialog = useRef();

  const isLost = timeRemaining < 0;
  const score = Math.floor((1 - (timeRemaining / (targetTime * 1000))) * 100);

  useImperativeHandle(ref, () => { // ref is attrbute from outside component
    // this function is for variables that has same responsibility with this component but should be accesable from outside
    return { // the return contains all functionality that should be exposed from outside
      open(){
        dialog.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className='result-modal' > {/*open will make dialog box visible */}
        {isLost && <h2>You Lost</h2>}
        {!isLost && <h2>Your Score: {score}</h2>}
        <p>The target time was {targetTime}</p>
        <p><strong>{(timeRemaining/1000).toFixed(2)}</strong>seconds was left...</p>
        <form method='dialog' onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  ,document.getElementById("modal"))
});

export default ResultModal
