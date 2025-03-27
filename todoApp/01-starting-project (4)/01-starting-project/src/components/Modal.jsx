import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import ButtonNewProject from './ButtonNewProject';

const Modal = forwardRef(function Modal({} , ref) {
    const dialog = useRef();

    useImperativeHandle(ref , () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })

  return createPortal(
    <dialog className='backdrop:bg-stone-900/90 p-4 rounded-md' ref={dialog}>
        {/* <h2>Input Error</h2>
        <p>you missed to fill some properties</p> */}
        <form method='dialog'>
            <ButtonNewProject>Close</ButtonNewProject>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  )
})

export default Modal
