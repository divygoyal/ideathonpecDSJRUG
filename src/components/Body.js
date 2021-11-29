import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import trail from "./trail.jpg"

const stockInfoCard = (props) => {
    return(
        
        <div className="stock-info-card">
            <div className="stock-info-card-one">
                {props}
            </div>
            <hr />
            <div className="stock-info-card-two">
            
                <div>
                    Close:  
                </div>
                <div style={{paddingLeft:"8px"}}>
                    {RandomNumber()}
                </div>
            </div>
            <hr />
            <div className="stock-info-card-three">
            
                <div>
                    Open:  
                </div>
                <div style={{paddingLeft:"8px"}}>
                    {RandomNumber()}
                </div>
            </div>
        </div>
        
    );
}

const RandomNumber = () => {
    const [number, setNumber] = React.useState(0);
    
    // add side effect to component
    React.useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => setNumber(Math.floor(Math.random() * 1000 + 1))+100,
        5000
      );
  
      // clean up interval on unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return <p>{number}</p>;
  };

const Body = () => {
    return (
        <div className="body">
            <div className="stock-info">
                <div className="stock-info-header">
                    Top Potential Stocks
                </div>
                <div className="stock-info-all-cards">
                    {stockInfoCard('YHOO')}
                    {stockInfoCard('EBR')}
                    {stockInfoCard('EVI')}
                    {stockInfoCard('INTC')}
                    {stockInfoCard('AKS')}
                </div>
                <div className="see-more-link">
                    <a href="/">see more..</a>
                </div>
            </div>
            
            <div className="trail">
                <Link to="/news">
                <div className="news-head">
                    stock news
                </div>
                <div className="news">
                    <div className="primary-news">
                        <img className="prim-news-image" src={trail} />
                        <div>Coal India subsidiary to set up 50-MW solar plant in Odisha</div>
                    </div>
                    <div className="secondary-news">
                        <div className="stry">
                            Amazon-Future tussle: CCI says it will pass an order in due course
                        </div>
                        <div className="stry">Indusind Bank's Hindujas welcome RBI move to up promoter holding to 26%</div>
                        <div className="stry">ITC to acquire 16% stake in D2C brand Mother Sparsh</div>
                        <div className="stry">Fitch affirms Bharti Airtel at 'BBB-'; outlook negative</div>
                    </div>
                </div>
                </Link>
                <div className="indices-table">
                    <div className="table-head">sectoral indices</div>
                    <table>
                        <thead>
                            <tr>
                                <th>indices</th>
                                <th>price</th>
                                <th>chg</th>
                                <th>%chg</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nifty midcap 100</td>
                                <td>29,920.40</td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -1006
                                </td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -3.25
                                </td>
                            </tr>
                            <tr>
                                <td>nifty IT</td>
                                <td>28,071.41</td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -751.34
                                </td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -2.61
                                </td>
                            </tr>
                            <tr>
                                <td>nifty bank</td>
                                <td>36,0325.50</td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -1339.25
                                </td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -3.58
                                </td>
                            </tr>
                            <tr>
                                <td>nifty auto</td>
                                <td>10,759.60</td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -1339.25
                                </td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -3.58
                                </td>
                            </tr>
                            <tr>
                                <td>nifty pharma</td>
                                <td>10,759.60</td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -1339.25
                                </td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -3.58
                                </td>
                            </tr>
                            <tr>
                                <td>nifty FMCG</td>
                                <td>10,759.60</td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -1339.25
                                </td>
                                <td style={{color:'darkred'}}>
                                    <i style={{fontSize:"12px"}} class="arrow down icon"></i>
                                    -3.58
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Body;