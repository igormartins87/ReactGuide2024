import { forwardRef,useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal =  forwardRef( function Modal({children, buttonCaption},ref){

    const dialogo = useRef();
    
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialogo.current.showModal();
            }
        };

    });

    return createPortal( <dialog ref={dialogo} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialogo"  className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById('modal-root')
    );
});


export default Modal;