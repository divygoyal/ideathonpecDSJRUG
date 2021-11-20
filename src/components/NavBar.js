import React from "react";
import "./NavBar.css";
import Appi from "./info.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../App";

const NavBar=()=>{
    return (
        <Router>
        <div>
            <div className="header">
                <div className="header-name">
                    The void
                </div>
                <div className="header-searchbar">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search here" />
                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>
                <div className="header-icon">
                    <i className="moon icon"></i>
                </div>
            </div>
            <div className="lower-header">
            <Link to={"/home"}>
                <div className="header-home-icon">
                    <i className="home icon"></i>
                </div>
                </Link>
                <div>
                    <i className="newspaper icon"></i>
                </div>
                <div>
                <Link to={"/info"}>
                    <i className="info circle icon"></i>
                    </Link>
                </div>
            </div>
        </div>
        <Routes>
        <Route path="/info" element={<Appi />} />
        </Routes>
        </Router>
    );
}

export default NavBar;