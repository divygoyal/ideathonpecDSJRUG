import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';
import Body from './components/Body';

ReactDOM.render(<>
    <NavBar/>

    <Body/>
    
    
    <App />
</>
 , document.getElementById('root'));


serviceWorker.unregister();
