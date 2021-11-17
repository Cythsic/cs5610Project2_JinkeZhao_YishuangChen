import React from 'react';
import { Box } from './box';
import './css/FreeBoard.css'
import { useSelector } from 'react-redux';
import FreeButton from './FreeButton';
import { ModalTerminalFree } from './modalFree';

export default function FreeBoard() {
    const shipState = useSelector((state) => state.free);
    const bombState = useSelector((state) => state.bomb);
    const boardComponent = [];

    for (let i = 0; i < shipState.length; i++) {
        let row = shipState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Box ship={shipState[i][j]} bomb={bombState[i][j]} x={i} y={j} />))
        }
    }

    let status;
    const finish = checkFinish();
    if (finish) {
        status = "Find all ship!!!! "; //add termination
    } else {
        status = "Not finished yet...";
    }

    return (
        <div>
            <h1>
                Free play mode
            </h1>
            <div>
                <ModalTerminalFree user={finish} />
            </div>
            <div>
                <FreeButton text="Reset" />
            </div>
            <div id="freeboard">
                {boardComponent}
            </div>

        </div>
    )

    function checkFinish() {
        for (let i = 0; i < shipState.length; i++) {
            let row = shipState[i];
            for (let j = 0; j < row.length; j++) {
                if (shipState[i][j] === 'O' && bombState[i][j] === '')
                    return false;
            }
        }
        return true;
    }

}