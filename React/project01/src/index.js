import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.render(
  <React.StrictMode>
      <App style={{
        background: 'url(./bg.png)', 
        backgroundSize: "fill", 
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: 100 + "vmin"
        }}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
