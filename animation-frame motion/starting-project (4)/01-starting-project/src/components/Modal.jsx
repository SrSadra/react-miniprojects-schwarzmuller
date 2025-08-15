import { createPortal } from 'react-dom';
import * as motion from "motion/react-client"

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog open className="modal"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 }
      }}
        initial="hidden" animate="visible" transition={{ duration: 0.5 }} exit="hidden">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
