import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Body from './components/Body';
import Appi from './components/info';
import Footer from './components/Footer';
import StockNews from './components/stockNews';
const Home=()=>{
    return(
        <div>
            <NavBar />
            <Body />
            <App />
            <Footer />
        </div>

    );
};

const Info=()=>{
    return(
        <div>
            <NavBar />
            <Appi />
            <Footer />
        </div>

    );
};

const News=()=>{
    return(
        <div>
            <NavBar />
            <StockNews />
            <Footer />
        </div>

    );
};


const Application =()=>{
    return(
        <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/info" element ={<Info />}/>
            <Route exact path="/news" element ={<News />}/>
        </Routes>
        </Router>
    );
};


ReactDOM.render(<Application />, document.getElementById('root'));


serviceWorker.unregister();
