import React,{useState} from "react";
import "./NavBar.css";
import Appi from "./info.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

var datetime = () => {

    var showdate = new Date();
    //var dt=showdate.toDateString();
    var dt = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    return (
        <div className="time-date" style={{fontSize:"3.5vh"}}>
            {dt}
        </div>
    )
}

const darkModeIcon = 'moon icon';
const lightModeIcon = 'sun icon';


const NavBar=()=>{
    const pathname = window.location.pathname
    const getcolor = (curr) => {
        if(pathname===curr){
            return {
                color:"rgba(0,0,0,0.35)",
                fontSize:"4.25vh",
            }
        }
        else{
            return {color:""}
        }
    }

    const [darkMode, setDarkMode] = useState(false);
    const [modeIcon, setModeIcon] = useState(darkModeIcon);
    
    const theme = {
      dark: {
          animateColorOne: '#950740',
          animateColorTwo: '#c2023b',
          lowernavbar: '#950740',
          navbarColor:'rgba(0,0,0,0.8)',
          primaryColor : '#121212',
          secondaryColor : '#950740',
          stockcardOne : '#950740',
          stockcardTwo : '#c3073f',
          newsback:'#262626',
          footerColor : '#950740',
          newsheader:'#950740',
          newscontent:'#950740',
          bodyColor:'rgba(0,0,0,0.9)',
          iconColor:'orange',
          stockgraph:'#262626',
          stockgraphcontent:'white',
          modeIcon: lightModeIcon,
      }, 
      light: {
          navbarColor : 'rgba(229, 236, 255,0.9)',
          animateColorOne: '#5680e9',
          lowernavbar:'#5680E9',
          animateColorTwo: '#5ab9ea',
          primaryColor : '#5ab9ea',
          secondaryColor : '#5680e9',
          stockcardOne : '#5680e9',
          stockcardTwo : '#5ab9ea',
          newsback:'rgb(102, 140, 255)',
          newsheader:'#5680E9',
          newscontent:'#8860d0',
          footerColor:'#8c66ff',
          bodyColor:'white',
          stockgraph:'white',
          stockgraphcontent:'black',
          iconColor:'rgba(0,0,0,0.7)',
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
        document.documentElement.style.setProperty('--newsback', theme.dark.newsback);
        document.documentElement.style.setProperty('--navbarColor', theme.dark.navbarColor);
        document.documentElement.style.setProperty('--animateColorOne', theme.dark.animateColorOne);
        document.documentElement.style.setProperty('--animateColorTwo', theme.dark.animateColorTwo);
        document.documentElement.style.setProperty('--lowernavbar', theme.dark.lowernavbar);
        document.documentElement.style.setProperty('--footerColor', theme.dark.footerColor);
        document.documentElement.style.setProperty('--iconColor', theme.dark.iconColor);
        document.documentElement.style.setProperty('--newsheader', theme.dark.newsheader);
        document.documentElement.style.setProperty('--newscontent', theme.dark.newscontent);
        document.documentElement.style.setProperty('--stockgraph', theme.dark.stockgraph);
        document.documentElement.style.setProperty('--stockgraphcontent', theme.dark.stockgraphcontent);
  
        setModeIcon(theme.dark.modeIcon);
        
      } else {
        document.body.style.backgroundColor = theme.light.bodyColor;
        document.documentElement.style.setProperty('--primaryColor', theme.light.primaryColor);
        document.documentElement.style.setProperty('--secondaryColor', theme.light.secondaryColor);
        document.documentElement.style.setProperty('--stockcardOne', theme.light.stockcardOne);
        document.documentElement.style.setProperty('--stockcardTwo', theme.light.stockcardTwo);
        document.documentElement.style.setProperty('--newsback', theme.light.newsback);
        document.documentElement.style.setProperty('--navbarColor', theme.light.navbarColor);
        document.documentElement.style.setProperty('--animateColorOne', theme.light.animateColorOne);
        document.documentElement.style.setProperty('--animateColorTwo', theme.light.animateColorTwo);
        document.documentElement.style.setProperty('--lowernavbar', theme.light.lowernavbar);
        document.documentElement.style.setProperty('--footerColor', theme.light.footerColor);
        document.documentElement.style.setProperty('--iconColor', theme.light.iconColor);
        document.documentElement.style.setProperty('--newsheader', theme.light.newsheader);
        document.documentElement.style.setProperty('--newscontent', theme.light.newscontent);
        document.documentElement.style.setProperty('--stockgraph', theme.light.stockgraph);
        document.documentElement.style.setProperty('--stockgraphcontent', theme.light.stockgraphcontent);
  
        setModeIcon(theme.light.modeIcon);
      }
  
      setDarkMode(!darkMode);
    };

    window.onload = handleClick
    
    return (
        <div>
            <div className="header">
                <div >
                    {datetime()}
                </div>
                <div className="header-name">
                    The void
                </div>
                <div className="header-icon">
                    <i className={modeIcon} onClick={handleClick}></i>
                </div>
                
            </div>
            <div className="lower-header">
            <Link to={"/"}>
                <div className="header-home-icon" >
                    <i style={getcolor("/")} className="home icon"></i>
                </div>
                </Link>
                <Link to={"/news"}>
                <div>
                    <i style={getcolor("/news")} className="newspaper icon"></i>
                </div>
                </Link>
                <div>
                <Link to={"/info"}>
                    <i style={getcolor("/info")} className="info circle icon"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;