import React,{useState} from "react";
import "./NavBar.css";
import Appi from "./info.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

var datetime = () => {

    var showdate = new Date();
    var dt=showdate.toDateString();
    //var displaytodaydate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    return (
        <div className="time-date" style={{fontSize:"3.5vh"}}>
            {dt}
        </div>
    )
}

const darkModeIcon = 'moon icon';
const lightModeIcon = 'sun icon';

const NavBar=()=>{

    const [darkMode, setDarkMode] = useState(false);
    const [modeIcon, setModeIcon] = useState(darkModeIcon);
  
    
    const theme = {
      dark: {
          animateColorOne: '#950740',
          animateColorTwo: '#c2023b',
          lowernavbar: '#950740',
          navbarColor:'#1a1a1d',
          primaryColor : '#1a1a1d',
          secondaryColor : '#950740',
          stockcardOne : '#950740',
          stockcardTwo : '#c3073f',
          stockcardThree:'#8860d0',
          bodyColor:'#1a1a1d',
          modeIcon: lightModeIcon,
      }, 
      light: {
          navbarColor : 'white',
          animateColorOne: '#5680e9',
          lowernavbar:'#5680E9',
          animateColorTwo: '#5ab9ea',
          primaryColor : '#5ab9ea',
          secondaryColor : '#5680e9',
          stockcardOne : '#5680e9',
          stockcardTwo : '#5ab9ea',
          stockcardThree:'#8860d0',
          bodyColor:'white',
        modeIcon: darkModeIcon,
      }
    };
  
  
    const handleClick = () => {
    
      if(darkMode) {
        document.body.style.backgroundColor = theme.dark.bodyColor;
        document.documentElement.style.setProperty('--primaryColor', theme.dark.primaryColor);
        document.documentElement.style.setProperty('--secondaryColor', theme.dark.secondaryColor);
        document.documentElement.style.setProperty('--stockcardOne', theme.dark.stockcardOne);
        document.documentElement.style.setProperty('--stockcardTwo', theme.dark.stockcardTwo);
        document.documentElement.style.setProperty('--stockcardThree', theme.dark.stockcardThree);
        document.documentElement.style.setProperty('--navbarColor', theme.dark.navbarColor);
        document.documentElement.style.setProperty('--animateColorOne', theme.dark.animateColorOne);
        document.documentElement.style.setProperty('--animateColorTwo', theme.dark.animateColorTwo);
        document.documentElement.style.setProperty('--lowernavbar', theme.dark.lowernavbar);
  
        setModeIcon(theme.dark.modeIcon);
        
      } else {
        document.body.style.backgroundColor = theme.light.bodyColor;
        document.documentElement.style.setProperty('--primaryColor', theme.light.primaryColor);
        document.documentElement.style.setProperty('--secondaryColor', theme.light.secondaryColor);
        document.documentElement.style.setProperty('--stockcardOne', theme.light.stockcardOne);
        document.documentElement.style.setProperty('--stockcardTwo', theme.light.stockcardTwo);
        document.documentElement.style.setProperty('--stockcardThree', theme.light.stockcardThree);
        document.documentElement.style.setProperty('--navbarColor', theme.light.navbarColor);
        document.documentElement.style.setProperty('--animateColorOne', theme.light.animateColorOne);
        document.documentElement.style.setProperty('--animateColorTwo', theme.light.animateColorTwo);
        document.documentElement.style.setProperty('--lowernavbar', theme.light.lowernavbar);
  
        setModeIcon(theme.light.modeIcon);
      }
  
      setDarkMode(!darkMode);
    };

    window.onload = handleClick
    
    return (
        <div>
            <div className="header">
                <div className="header-name">
                    The void
                </div>
                <div className="header-icon">
                    <i className={modeIcon} onClick={handleClick}></i>
                </div>
                <div >
                    {datetime()}
                </div>
            </div>
            <div className="lower-header">
            <Link to={"/"}>
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
    );
}

export default NavBar;