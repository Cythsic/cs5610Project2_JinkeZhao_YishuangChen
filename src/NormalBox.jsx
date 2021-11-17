import React from 'react';
import { useDispatch } from 'react-redux';
import './css/box.css'

export function NormalBox(props) {
    let style_icon = {
        display: "flex",
        justifyContent: "center",
    }
    const ship = props.ship;
    const bomb = props.bomb;

    let Color = 'white';
    if (ship === '' && bomb === 'O') {
        Color = 'green';
    } else if (ship === 'O' && bomb === 'O') {
        Color = 'red';
    }

    const dispatch = useDispatch();
    if (Color === 'green') {
        return (<div onClick={() => {
            const x = props.x;
            const y = props.y;

            dispatch({
                type: 'normalBomb',
                x: x,
                y: y,
            })
        }}
            id="box"
            class={Color}>
            <span className="material-icons-outlined" style={style_icon}>radio_button_unchecked</span>
        </div >);
    }
    else if (Color === 'red') {
        return (<div onClick={() => {
            const x = props.x;
            const y = props.y;

            dispatch({
                type: 'normalBomb',
                x: x,
                y: y,
            })
        }}
            id="box"
            class={Color}>
            <span className="material-icons-outlined" style={style_icon}>highlight_off</span>
        </div >);
    }
    else {
        return (<div onClick={() => {
            const x = props.x;
            const y = props.y;

            dispatch({
                type: 'normalBomb',
                x: x,
                y: y,
            })
        }}
            id="box"
            class={Color}>
        </div >);
    }
}

