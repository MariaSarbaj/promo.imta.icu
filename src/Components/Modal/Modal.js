import React, {forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = forwardRef((props, ref) => {

    const [display, setDispay] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        }
    })

    const open = () => {
        setDispay(true)
        document.getElementById('root').classList.add('act')

    }

    const close = () => {
        setDispay(false)
        document.getElementById('root').classList.remove('act')
    }

    if (display) {

        return ReactDOM.createPortal(<div className={'modal-wrapper'}>
            <div className={"modal-box"}>
                {props.children}
                <button onClick={close}>Close</button>
            </div>

            <div onClick={close} className={'modal-backdrop'}></div>

        </div>, document.getElementById('modal-root'))

    }

    return null;

})


export default Modal;