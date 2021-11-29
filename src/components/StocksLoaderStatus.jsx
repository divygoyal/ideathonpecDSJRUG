import React from 'react';
import loader from "./loading.jpeg";

const StocksLoaderStatus = props => {
  if(props.connectionError) {
    return (
      <div className='is-medium'>
        <span className='has-text-danger' >Server sent no data. Probably the market is closed at the moment. </span>
        <br />(Come back later? :-))
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <img style={{width:"100%"}} src={loader} alt=""></img>
        </div>
        <div className='tag is-large is-success' style={{backgroundColor:"	#ed5e5e"}}>
        
          <span className='loader' > &nbsp;</span>
        
          &nbsp; &nbsp; Fetching some stocks...
        </div>
      </div>

    );
  }
}

export default StocksLoaderStatus;