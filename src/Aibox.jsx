import React from 'react';
import './css/box.css'

export function Aibox(props) {
    let style_icon = {
        display: "flex",
        justifyContent: "center",
        height: 50
    }
    const ship = props.ship;
    const bomb = props.bomb;

    let Color = 'white';
    if (ship === '' && bomb === 'O') {
        Color = 'green';
    } else if (ship === 'O' && bomb === 'O') {
        Color = 'red';
    }

    if (Color === 'green') {
        return (<div id="box"
            class={Color}>
            <span className="material-icons-outlined" style={style_icon}>radio_button_unchecked</span>
        </div >);
    }
    else if (Color === 'red') {
        return (<div id="box"
            class={Color}>
            <span className="material-icons-outlined" style={style_icon}>highlight_off</span>
        </div >);
    }
    else if(ship === 'O'){
        return (<div id="box"
            class={Color}>
            <span className="material-icons-outlined" style={style_icon}>priority_high</span>
        </div >);
    }
    else {
        return (<div id="box"
            class={Color}>
        </div >);
    }
}

