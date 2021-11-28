import React,{useState} from "react";
import ReactDOM from 'react-dom';
import "./info.css";
import info from './info.jpg';


const Appi=()=>{

  //const [scroll,setscroll] = useState('')
  //setscroll(scroll=>'h1')
  const handleClick=(e,scrollid)=>{
    var x = document.getElementById(scrollid)
    x.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
    return false
  };
  

    return(
    <div>
      <div className="get-started">
        <div className="get-started-head">let's get you <u>started</u> .</div>
        <div className="get-started-cont">
          
          <div className="get-started-points">
            <ol type="a">
              <li onClick={e=> handleClick(e,'h1')}>What is stock market?</li>
              <li onClick={e=> handleClick(e,'h2')}>Why should you know about stock market terminology?</li>
              <li onClick={e=> handleClick(e,'h3')}>Basic Stock Market Terms</li>
              <li onClick={e=> handleClick(e,'h4')}>Stock Market Basics</li>
              <li onClick={e=> handleClick(e,'h5')}>What are shares?</li>
              <li onClick={e=> handleClick(e,'h6')}>Why do companies need shares?</li>
              <li onClick={e=> handleClick(e,'h7')}>What are stock exchanges and how many are there?</li>
              <li onClick={e=> handleClick(e,'h8')}>What are Nifty and Sensex?</li>
              <li onClick={e=> handleClick(e,'h9')}>When can you conduct stock market transactions?</li>
              <li onClick={e=> handleClick(e,'h10')}>How do you make money from Stocks?</li>
              <li onClick={e=> handleClick(e,'h11')}>What is Share Market?</li>
              <li onClick={e=> handleClick(e,'h12')}>Type Of Share Markets</li>
              <li onClick={e=> handleClick(e,'h13')}>What Is Traded On The Share Market?</li>
            </ol>
          </div>
          <div className="info-image">
              <img src={info} alt="info"/>
            </div>
        </div>

      </div>
      
    <div className="stock" id="stock">
        <p className="heading" id="h1" >
        What is stock market?
        </p>
        <p className="content">
        Stock market is a place where equity shares of companies are bought and sold by the participants (buyers and sellers of stocks). The participants can be investors and traders who seek profits over the short time or the long run. The investors mainly have a long-term horizon and benefit from capital appreciation over time. Traders, however, look for quick profits by focusing on the small price changes in equity shares which mostly last for a few minutes or the whole trading session.<br />
        In India, the Bombay Stock Exchange and National Stock Exchange are the major platforms where most of the stock trading happens. Here, the buyers and sellers place orders through brokers who offer online trading services. The settlement cycle follows the T+2 format. In simple terms, you have two days for the trade cycle to be completed from initiation to final settlement.
        The first step of the trade life cycle involves placing the order. It is followed by the matching and execution of the placed order. The clearing house of the stock exchange would then clear the trade. The final stage is the settlement which involves the pay in and pay out of funds and securities which takes place on the last day of the trade cycle.
        </p>
        <p className="heading" id="h2">
        Why should you know about stock market terminology?
        </p>
        <p className="content">
        Stock market terminology relates to industry-specific jargon which are used in the stock markets regularly. Even the experts and amateurs use these terms frequently to explain trading strategies, indices, stock market patterns and other components of the stock market. As an equity enthusiast, you must know these terms really well in order to make money in the stock markets. Moreover, it will also enhance your understanding of the relationship between stock markets and events happening in the economy.
        <br /> Some of the most common terms used in the stock market are the bull and the bear market. When the stock market is on the rise and the economy is sound, you have a bull market. If the stock market experiences prolonged periods of price declines, you have a bear market. It’s typically a condition where the prices of securities fall by 20% from the recent highs
        </p>
        <p className="heading" id="h3">
        Basic Stock Market Terms
        </p>
        <p className="content">
        Whether you are a budding or seasoned stock investor, knowledge of the basic terms used in the stock market is necessary. You will end up becoming not only a better investor but also a successful trader as your vocabulary on the stock market grows. Here is a glossary of basic terms that you need to know as an investor:
        <br />  <text className="void">• Agent:</text><br /> An agent is a stock brokerage firm which does the buying/selling of shares on behalf of the investor in the stock market.
        <br />   <text className="void"> • Ask/Offer:</text><br /> It refers to the lowest price at which the owner of the equity share is willing to sell the share in the stock market.
        <br />  <text className="void"> • At the money:</text><br /> Under this scenario, the strike price of an option is equal to the market price of the underlying asset which it represents.
        <br />  <text className="void"> • Broker: </text><br />A person who purchases or sells investments/stocks on behalf of the investor/trader in return for a commission.
        <br /> <text className="void"> • Bear Market:</text><br /> It refers to a period in which the prices of equity shares fall consistently. It’s usually a condition where share prices fall by 20% from recent hghs.
        <br /> <text className="void"> • Bull Market:</text><br /> An opposite of the bear market, a bull market is a market where the prices of the stocks are increasing over a prolonged period of time. A single stock and a sector can be bullish at one time and bearish at another time.
        <br /> <text className="void"> • Beta: </text><br />It measures the association between the price of an equity share and the overall movement of the stock
          market. Beta of the market is assumed to be 1. A stock’s beta of more than 1 shows a higher risk than the market. A beta of less than 1 shows that stock is less riskier than the market or it would fall lower as compared to the market.
          <br /> <text className="void">• Bid:</text><br /> It is the highest price that the buyer of a stock is ready to pay for a particular stock.
          <br /> <text className="void"> • Blue Chip Stock:</text><br /> These are equity shares of companies which are well-established and financially stable. These generally have a relatively high market capitalization.
          <br /> <text className="void">• Board Lot:</text><br /> Each exchange board defines a standard trading unit which relies on the per share price. Some of the popular board lot sizes are 50, 100, 500, 1000 units.
          <br /> <text className="void">  • Bonds: </text><br />A bond is a fixed income investment which is issued by the government or a company to its buyers. It shows a specified amount which an investor lends to the issuer of the bond for a specified period of time at a variable or fixed interest rate called the coupon rate.
          <br /> <text className="void">• Book:</text> <br />It relates to an electronic record which is used to organise all the buy and sell orders of particular stocks which have remained pending.
          <br /> <text className="void"> • Call Option: </text><br />In this, the buyer of the option gets the right but not the obligation to purchase the underlying asset at a specified price and time.
          <br />  <text className="void"> • Close Price:</text><br /> It is the final price on a specific trading day at which the equity shares of a company are sold or traded.
          <br /> <text className="void"> • Convertible Securities: </text><br />It is a security like preferred stocks, bonds, debentures which are issued by an issuer capable of being converted into other securities of that issuer.
          <br />  <text className="void"> • Debentures:</text><br /> It is a form of fixed-income instrument which is not backed by security of any physical assets or collateral of the issuer.
          <br /> <text className="void"> • Defensive Stock:</text><br /> These stocks offer consistent earnings and stable dividends irrespective of the state of the stock market. FMCG, Pharma and IT are popular defensive sectors.
          <br />  <text className="void"> • Delta:</text><br /> A delta relates to the ratio of change in the price of a derivative in response to change in the price of the underlying asset. A higher delta suggests higher sensitivity to the price changes of the underlying asset.
          <br />  <text className="void">  • Face value:</text><br /> It relates to the amount of money or the value in cash that the holder of a security will obtain from the issuer of
          the security when the security matures at the specific date.
          <br />  <text className="void"> • Moving Average:</text><br /> It refers to the average price per unit of an equity share with respect to a specific period of time. Some popular time frames used to study the moving average of a stock include 50- and 200-day moving averages.
          <br />  <text className="void">• One-sided Market:</text><br />It refers to a situation wherein a market only contains potential sellers/ buyers instead of both being present simultaneously. Market makers show only the bid price or an offer price indicating that the market is heading in one direction.
          <br /> <text className="void">• Spread: </text><br />It refers to the difference between the bid and the ask prices of an equity share. You may perceive it as the difference between the amount at which you would like to buy and the amount at which you would like to sell a stock.
          <br />  <text className="void"> • Volatility:</text> <br />It refers to the fluctuations in the price of an equity share. Highly volatile stocks witness severe ups and downs during trading sessions. These are highly risky bets which can bring huge profits for the skilled trader. However, stocks may crash in a short time and extreme volatility could result in a severe loss.
          <br />  <text className="void"> • Volume: </text><br />It shows the average number of stocks which are traded during a particular time, usually the daily trading volume.
          <br />  <text className="void"> • Dividend Yield:</text><br /> It shows how much a company or firm pays out in dividends every year as compared to the stock price.
        </p>
        <p className="heading" id="h4">
        Stock Market Basics
        </p>
        <p className="content">
        All companies need money to run their business. Sometimes the profit acquired from selling goods or services is not sufficient to meet the working capital requirements. And so, companies invite normal people like you and me to put some money in their company so that they can run it efficiently and in return investors get a share of whatever profit they make. Understanding this is the first step towards understanding stock market basics. Let’s learn about this in detail
        </p>
        <p className="heading" id="h5">
        What are shares?
        </p>
        <p className="content">
        Shares are a way to own a part of the company’s value. In proportion to the capital you invest, you can get ownership rights to a certain percentage in the company. Say you own 2% of the shares being traded in the market, you can say you have 2% ownership in the company.
        Hence, shares are units of ownership in the company and its financial assets. Shares are also known as stocks, equity, scrips etc. After purchasing them you will be known as a stockholder or a shareholder of the company.
        </p>
        <p className="heading" id="h6">
        Why do companies need shares?
        </p>
        <p className="content">
        Why does a company need money from the market? As mentioned before, when a company is scaling up, expanding its business etc, it will need more capital. During such times, a company can tap into the share market and offer a certain number of shares based on its market value, which investors can buy.
        Investors will be paying the company some money and in return get to be part owners. So when the value of shares rises, the value of shares investors own rises. Investors are however not lending money to the company so they are not creditors. These indeed share market basics for beginners because it is essential to understand why companies need shares at all.
        </p>
        <p className="heading" id="h7">
        What are stock exchanges and how many are there?
        </p>
        <p className="content">
        Stock exchanges is a place or a platform where traders and buyers come together to buy and sell stocks. There are two primary stock exchanges in the country: Bombay Stock Exchange (BSE) and National Stock Exchange
        (NSE). This is extremely important information to know about stock market basics in India.
        </p>
        <p className="heading" id="h8">
        What are Nifty and Sensex?
        </p>
        <p className="content">
        All companies who want to get listed approach either NSE, BSE or both. All stock exchanges need equity benchmarks to signify the trend in the stock market in the best way possible. Both BSE and NSE have 100s and 1000s of companies listed on them. But if you have to pick the top 30 stocks, or look at what the bottom 100 are doing, it will be difficult for you to siphon through this huge number of companies listed. What indices like Nifty and Sensex do is to group them together.
        <br /> Nifty 50 is a collection of the top 50 companies listed on NSE and Sensex is a collection of the top 30 stocks listed on BSE by way of market capitalisation. The top companies are the ones that influence the stock market the most and influence the country’s economy the most. Hence an index with the top and largest companies is the best gauge for how the entire stock market.
        <br /> There is also BSE500, Nifty Midcap, BSE Smallcap and many more such indices. However, Nifty 50 and Sensex are primary benchmarks.
        <br />There are sectoral indices as well; Nifty Pharma, BSEBankex, Nifty PSU and many such sectoral indices that
        group the top stocks in each sector which helps us to understand how the sector is doing.
        <br /> In Short: Indices tell us in ashort, concise and easy way, how is the market doing.
        </p>
        <p className="heading" id="h9">
        When can you conduct stock market transactions?
        </p>
        <p className="content">
        To know about the stock market basics in India, you should also know when you are permitted to buy and sell shares. The stock market business hours in India run from 9.15 a.m. to 3.30 p.m. There are a few days in the country when the stock market is shut, they are known as market holidays. Few examples of market holidays are Holi, Id, Independence Day, Republic Day etc.
        </p>
        <p className="heading" id="h10">
        How do you make money from Stocks?
        </p>
        <p className="content">
        Naturally, when you buy shares at a lower price and sell it at a higher price, you earn the capital gain. However there are two ways you can do this and if you are a beginner, it is especially important for you to know the difference between stock trading basics and stock investment basics.
        <br /> There are two ways:-
        <br /> <text className="void">Stock investors:</text><br /> Stock investors are those who keep their money in the stock for a longer period of time, sometimes even years. Returns are compounded over a period of
        time. Investors use fundamental analysis. They look at the growth trajectory of the company because your investment literally grows with the company in the long term.
        <br /> <text className="void">Stock traders:</text><br /> Stock traders generally buy and sell within the same trading session. Traders use technical analysis to understand which stocks to invest in. Traders look for short and quick gains. Stock trading basics will require you to learn technical indicators like momentum oscillators, bollinger bands, charts and more.
        </p>
        <p className="heading" id="h11">
        What is Share Market?
        </p>
        <p className="content">
        A market where shares are publicly issued and traded is known as a share market. The answer to ‘what is stock market’ is pretty similar to that of a share market. The key difference between share markets and stock markets is that the former only allows one to trade shares. The latter allows you to trade in financial instruments such as derivatives, bonds, mutual funds, as well as the shares of listed companies.
        The key factor is that the basic platform offers trading facilities that companies can use to trade stocks in the stock market. On a stock exchange, one can only buy and sell those stocks that are listed on it. Hence, buyers and sellers meet on a stock market. India’s prime stock exchanges are the National Stock Exchange and the Bombay Stock Exchange.
        </p>
        <p className="heading" id="h12">
         Type Of Share Markets:-
        </p>
        <p className="content">
        Now that we understand the stock market meaning, one key aspect of stock market basics is that one can trade on one of two market segments. In other words, there are two types of share markets in India. These are primary markets and secondary markets.
        <br /> <text className="void">1. Primary Share Markets</text><br />
        A primary share market is a place where a company first gets registered with the goal of raising money and issues a certain amount of shares. The goal of being publicly listed on a primary stock exchange is to raise money. This where a company gets registered to issue a certain amount of shares and raise money. If the company decides to sell its shares for the first time, this is known as an initial public offering.
        <br /><text className="void"> 2. Secondary Market</text><br />
        Once a company’s new securities have been sold in the primary market, they are then traded in the secondary stock market. On the secondary market, investors get the opportunity to exit their investment and sell off their shares. Transactions on the secondary market mostly comprise trades where one investor chooses to buy shares from a separate investor at the prevailing market price.
        Based on whatever prices the two parties agree to set or the prevailing market price, one investor will buy shares from another on a secondary market. Typically investors conduct these transactions through a broker or other such intermediary
        who can facilitate this process. Brokers offer these trading opportunities at different plans.
        </p>
        <p className="heading" id="h13">
        What Is Traded On The Share Market?
        </p>
        <p className="content">
        We cannot discuss stock market basics without addressing the key financial instruments that are traded on it. There are four categories of financial instruments traded on the stock exchange. They are shares, bonds, derivatives, and mutual funds. They are as follows:
        <br /> <text className="void"> 1.Shares</text><br />
          A share is a unit denoting equity ownership in a corporation that exists as a financial asset providing equitable distribution for any profits earned. Hence, when you buy shares, you buy a stake in the company whose shares you have bought. This means that if the company becomes profitable over time, shareholders are rewarded with dividends. Traders often choose to sell shares at a price higher than which they purchased them.
          <br /> <text className="void">2.Bonds</text><br />
        A company requires money so they can undertake projects. They pay their investors dividends from the revenue earned on their projects. One way of raising the capital for operations and other company procedures is via bonds. When a company chooses to borrow money from a bank, they take a loan which they repay through periodic interest payments. On a similar note, when a company opts to borrow funds from a variety of investors, this is known as a bond, which is also paid off
        through timely interest payments. Take the following example as an explanation of how bonds work.
        Imagine that your goal is to start a project that will begin to earn money in two years’ time. To undertake this project, you will require some initial amount to get you started. Suppose you acquire the required funds in the form of a loan from a friend and write down the receipt of the loan stating that you owe them ₹1 lakh which you will repay in five years with an interest rate of 5% per annum. Suppose that your friend now holds this receipt. It means that they have just purchased a bond by lending out money to your company. Since you have promised to pay the principal amount at a 5% interest, you do so and finally extinguish your principal repayment by the time the fifth year comes to a close.
        <br /> <text className="void"> 3. Mutual Funds</text><br />
        One key financial instrument part of share market basics is mutual funds investing. Mutual funds are investments that allow you to indirectly invest in the share market. You can find mutual funds for a variety of financial instruments like equity, debt, or hybrid funds, to name a few. Mutual funds work by pooling money from all the investors that fund them. This aggregate amount is then invested in financial instruments. Mutual funds are handled professionally by a fund manager.
        Each mutual fund scheme issues units that are of a certain value similar to a share. When you invest in such funds, you become a unit-holder in that mutual fund scheme. When
        instruments that are part of that mutual fund scheme earn revenue over time, the unit-holder receives that revenue reflected as the net asset value of the fund or in the form of dividend payouts.
        <br /> <text className="void">4. Derivatives</text><br />
         The market value of shares listed on a stock market continues to fluctuate. It is difficult to fix the value of a share at one particular price. This is where derivatives enter the picture. Derivatives are instruments that allow you to trade at a price that has been fixed by you today. To put it simply, you enter into an agreement where you choose to either sell or buy a share or any other instrument at a certain fixed price.
        </p>
    </div>
    </div>
    
    
    );
};

ReactDOM.render(<Appi />,document.querySelector("#root"));
  
export default Appi;