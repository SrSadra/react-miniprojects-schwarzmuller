import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({open , children , onClose}) => {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current; // this is better practice to store ref in const
        if (open){
            modal.showModal();
        }
        

        return () => modal.close();
    }, [open])

return createPortal(
    <dialog ref={dialog} onClose={onClose}> {/* if the esc button pressed or anything closed the dialog */}
        {children}
  </dialog>,
  document.getElementById("modal")
  )
}

export default Modal
