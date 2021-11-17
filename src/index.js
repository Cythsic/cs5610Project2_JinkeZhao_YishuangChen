import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import NormalBoard from './NormalBoard'
import FreeBoard from './FreeBoard';
import Rules from './rules';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import './css/style.css'

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <h1 >Battleship</h1>

    <Router >
      <Link to={"/"} className="homeBtn">Home</Link>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/normalBoard" element={<NormalBoard />} />
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router >

  </Provider>,

  document.getElementById('root')
);
