import React from "react";
import { useDispatch } from "react-redux";

export default function FreeButton(props) {
    const dispatch = useDispatch();

    return (<button onClick={() => dispatch({
        type: 'freereset',
    })}>
        {props.text}
    </button>)
}