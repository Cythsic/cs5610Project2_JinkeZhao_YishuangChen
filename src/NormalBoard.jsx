import React from 'react';
import './css/NormalBoard.css'
import { useSelector } from 'react-redux';
import { NormalBox } from './NormalBox';
import NormalButton from './NormalButton';
import { Aibox } from './Aibox';
import { ModalTerminalNormal } from './modalNormal';

export default function NormalBoard() {
    const shipState = useSelector((state) => state.normalShip);
    const bombState = useSelector((state) => state.normalBomb);
    const aiShip = useSelector((state) => state.aiShip);
    const boardComponent = [];
    const aiComponent = [];

    for (let i = 0; i < shipState.length; i++) {
        let row = shipState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<NormalBox ship={shipState[i][j]} bomb={bombState[0][i][j]} x={i} y={j} />))
        }
    }

    for (let i = 0; i < aiShip.length; i++) {
        let row = aiShip[i];
        for (let j = 0; j < row.length; j++) {
            aiComponent.push(<Aibox ship={aiShip[i][j]} bomb={bombState[1][i][j]} />)
        }

    }

    const finish = checkFinish();
    const aiFinish = checkAi();

    return (
        <div className="mainNormal">
            <h3>
                Normal play mode
            </h3>
            <div>
                <ModalTerminalNormal user={finish} ai={aiFinish} />
            </div>
            <div>
                <NormalButton text="Reset" />
            </div>
            <div className="game-screen">
                <h3>
                    your board
                </h3>
                <div id="normalBoard">
                    {boardComponent}
                </div>
                <h3>
                    AI board
                </h3>
                <div id="normalBoard">
                    {aiComponent}
                </div>
            </div>
        </div>
    )

    function checkFinish() {
        for (let i = 0; i < shipState.length; i++) {
            let row = shipState[i];
            for (let j = 0; j < row.length; j++) {
                if (shipState[i][j] === 'O' && bombState[0][i][j] === '')
                    return false;
            }
        }
        return true;
    }

    function checkAi() {
        for (let i = 0; i < aiShip.length; i++) {
            let row = aiShip[i];
            for (let j = 0; j < row.length; j++) {
                if (aiShip[i][j] === 'O' && bombState[1][i][j] === '')
                    return false;
            }
        }
        return true;
    }
}