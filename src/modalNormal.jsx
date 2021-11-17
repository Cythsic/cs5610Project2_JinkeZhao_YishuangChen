import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";

export const ModalTerminalNormal = ({ user, ai }) => {
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const handleClose = () => {
        setShow(false)
    };
    const resetBoard = () => {
        dispatch({
            type: 'normalreset',
        })
    };
    if (user) {
        return (
            <main>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Victory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You win! Please quit or reset the board to take another round game.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="secondary" onClick={resetBoard}>
                            Reset
                        </Button>
                    </Modal.Footer>
                </Modal>
            </main>
        );
    }
    else if (ai) {
        return (
            <main>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Defeat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        AI wins! Please quit or reset the board to take another round game.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="secondary" onClick={resetBoard}>
                            Reset
                        </Button>
                    </Modal.Footer>
                </Modal>
            </main>
        );
    }
    else {
        return (
            <div></div>
        );
    }
};