import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css"

function Modal({ children, open, className = "", onClose}) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
        dialog.current.showModal()
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`${classes.modal} ${className}`} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
