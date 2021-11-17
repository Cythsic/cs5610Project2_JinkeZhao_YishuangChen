import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (<div class="WelcomePage">
        <h1>
            Welcome to Battleship!
        </h1>
        <div>
            <Link to={"/normalBoard"}>Normal play</Link>
        </div>
        <div>
            <Link to={"/freeBoard"}>Free play</Link>
        </div>
        <div>
            <Link to={"/rules"}>Rules</Link>
        </div>

    </div>)

}