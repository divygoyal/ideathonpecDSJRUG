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
          <div>
            contact us
          </div>
          <div className="socials-icons">
            <i className="instagram icon" />
            <i className="twitter icon" />
            <i className="facebook icon" />
          </div>
        </div>
        <div className="footer-links">
          <div>
            links
          </div>
          <ul className="links-content" style={{listStyleType:"disc"}}>
            <li>home</li>
            <li>info page</li>
            <li>news</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;