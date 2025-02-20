import { forwardRef,useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal =  forwardRef( function Modal({children, buttonCaption},ref){

    const dialogo = useRef();
    
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialogo.current.showModal();
            }
        };

    });

    return createPortal( <dialog ref={dialogo}>
        {children}
        <form method="dialogo">
            <button>{buttonCaption}</button>
        </form>
    </dialog>, document.getElementById('modal-root')
    );
});


export default Modal;