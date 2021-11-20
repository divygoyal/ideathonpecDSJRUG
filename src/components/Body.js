import React from "react";
import "./Body.css"

const stockInfoCard = (props) => {
    return(
        
        <div className="stock-info-card">
            <div className="stock-info-card-one">
                {props}
            </div>
            <div className="stock-info-card-two">
                Prev. Close:---
            </div>
            <div className="stock-info-card-three">
                Prev. Open:---
            </div>
        </div>
        
    );
}

const stockNewsCard = (headline,content) => {
    return (
        <div className="stock-news-card">
            <div className="stock-news-card-head">
                {headline}
            </div>
            <p className="stock-news-card-content">
                {content}
            </p>
        </div>
    );
}

const Body = () => {
    return (
        <div>
            <div>
                <div className="stock-info-header">
                    Top Potential Stocks
                </div>
                <div className="stock-info-all-cards">
                    {stockInfoCard('RIL')}
                    {stockInfoCard('PVR')}
                    {stockInfoCard('IRCTC')}
                    {stockInfoCard('SBIN')}
                    {stockInfoCard('HDFC')}
                </div>
                <div className="see-more-link">
                    <a href="/">see more..</a>
                </div>
            </div>
            <div>
                <div className="stock-news-header">
                    News Related To Top Potential Stocks
                </div>
                <div className="stock-news-container">
                    {stockNewsCard(
                        'relaince to buy everyone',
                        'eanoneaofnaoufboaubfeanoneaofnaooufboaubfeanoneaofnaoufboaubf'
                    )}
                    {stockNewsCard(
                        'relaince to buy everyone',
                        'eanoneaofnaoufboaubfeanoneaofnaoufboaeaofnaoufboaubf'
                    )}
                    {stockNewsCard(
                        'relaince to buy everyone',
                        'eanoneaofnaoufboaubfeanoneaofnaaofnaoufbfeanoneaofnaoufboaubf'
                    )}
                </div>
                <br />
            </div>
        </div>
    );
}

export default Body;