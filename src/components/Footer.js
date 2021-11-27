import React from "react";
import "./Footer.css";
import logo from "./logo.png";

const FooterComponent = () => {
  return(
    <div>
      <div className="footer-container">
        <div className="footer-photo">
          <img src={logo} className="logo"/>
        </div>
        <div className="footer-socials">
          <div className="footer-headers">
            socials
          </div>
          <div className="socials-icons">
            <a href="https://github.com/divygoyal/ideathonpecDSJRUG" target="_blank">
            <i  class="github icon"></i>
            </a>
            <a>
              <i className="instagram icon" />
            </a>
            <a>
              <i className="twitter icon" />
            </a>
            <a>
              <i className="facebook icon" />
            </a>
          </div>
          
        </div>
        <div className="footer-links">
          <div className="footer-headers">
            links
          </div>
          <ul className="links-content" style={{listStyleType:"disc"}}>
            <li>home</li>
            <li>info page</li>
            <li>news</li>
          </ul>
        </div>

      </div>
        <div className="madeby">
          made by the void team
        </div>
    </div>
  );
}

export default FooterComponent;