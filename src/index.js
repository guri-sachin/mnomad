import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-absdj1gblfls1yc5.us.auth0.com"
      clientId="mO7DXCzx84a6RXHseBmOgunvHboM3E3i"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
    <Router>
    <App/>
    </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
