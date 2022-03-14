import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ConTextProvider} from "./Context";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(

    <ConTextProvider>
        <BrowserRouter>
            <App />
    </BrowserRouter>
    </ConTextProvider>
   ,
    document.getElementById('root')
);
