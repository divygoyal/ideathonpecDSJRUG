import React from "react";
import "./NavBar.css";
import Appi from "./info.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

var datetime = () => {

    var showdate = new Date();
    var dt=showdate.toDateString();
    //var displaytodaydate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    return (
        <div className="time-date">
            {dt}
        </div>
    )
}

const NavBar=()=>{
    return (
        <Router>
        <div>
            <div className="header">
                <div className="header-name">
                    The void
                </div>
                <div className="header-icon">
                    <i className="moon icon"></i>
                </div>
                <div >
                    {datetime()}
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