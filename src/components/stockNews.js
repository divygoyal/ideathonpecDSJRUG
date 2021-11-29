import React from "react";
import "./stockNews.css";
import endslow from "./endslow.jpg"
import rbi from "./rbi.jpg"
import paytm from "./paytm.jpg"
import { Link } from "react-router-dom";

const stockNewsCard = (link,headline,content) => {
    return (
        <div className="stock-news-card">
            <img src={link} />
            <div>
                <div className="stock-news-card-head">
                    {headline}
                </div>
                <p className="stock-news-card-content">
                    {content}
                </p>
            </div>
        </div>
    );
}

const StockNews = () => {
    return(
        <div>
            <div className="news-component">
                
                <div className="stock-news-header">
                    News thats moving markets
                </div>
                <div className="stock-news-container">
                    {stockNewsCard(
                        endslow,
                        'Closing Bell: Nifty ends below 18,000, Sensex falls 433 pts dragged by auto, metals',
                        `Index closed a week at 17746 with loss of nearly 
                        two percent and formed a bearish candle on weekly 
                        chart hinting weakness in the markets. Now next good 
                        support for the market is coming near 17600 zone if 
                        managed to hold above-said levels one can expect a 
                        good pull back in the index again towards 18k mark but 
                        if failed to hold then we may see more drag down in Nifty 
                        towards 17300-17000 mark. The immediate hurdle is coming near 
                        17830-17940 zone where one can again lock their gains in `
                    )}
                    <hr />
                    {stockNewsCard(
                        paytm,
                        'Paytm’s weak listing: Hang in there, business model is strong: CEO Vijay Shekhar Sharma tells investors',
                        `Shares of Paytm, the largest and one of the most anticipated IPOs in 
                        India, plunged by 27 percent from the issue price within hours of listing. 
                        While Paytm listing has raised larger questions for tech IPOs, fintech, 
                        and the funding frenzy in startups, Sharma remains hopeful and optimistic.`
                    )}
                    <hr />
                    {stockNewsCard(
                        rbi,
                        'RBI panel recommends separate law to prevent illegal digital lending',
                        `The recommendations include subjecting the Digital Lending Apps to a 
                        verification process by a nodal agency to be setup in consultation with
                         stakeholders and setting up of a Self-Regulatory Organisation (SRO) 
                         covering the participants in the digital lending ecosystem`
                        )}
                </div>
                <br />
            </div>
        </div>
    );
}

export default StockNews;