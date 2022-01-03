import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import ButtonI from './../../interfaces/ButtonI';
import './Button.scss';

const Button: React.FC<ButtonI> = (
    {
        position = 'start',
        title,
        handleClick,
        offcanvas = false,
        ChildComponent = () => (<></>)
    }
) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={`buttonComponent d-flex justify-content-${position}`}>
            <button onClick={offcanvas ? handleShow : handleClick}>
                { title }
            </button>
            <Offcanvas show={show} onHide={handleClose} placement={'start'} name={'start '} role="Offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{ title }</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ChildComponent  />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Button;