import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Body from './components/Body';
import Appi from './components/info'
const Rockey=()=>{
    return(
        <div>
            <NavBar />
            <Body />
            <App />
        </div>

    );
};

const Hi=()=>{
    return(
        <div>
            <NavBar />
            <Appi />
        </div>

    );
};
const Application =()=>{
    return(
        <Router>
        <Routes>
            <Route exact path="/" element={<Rockey />}/>
            <Route exact path="/info" element ={<Hi />}/>
        </Routes>
        </Router>
    );
};


ReactDOM.render(<Application />, document.getElementById('root'));


serviceWorker.unregister();
