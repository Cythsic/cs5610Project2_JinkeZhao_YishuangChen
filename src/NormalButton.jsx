import React from "react";
import { useDispatch } from "react-redux";

export default function NormalButton(props) {
    const dispatch = useDispatch();

    return (<button onClick={() => dispatch({
        type: 'normalreset',
    })}>
        {props.text}
    </button>)
}