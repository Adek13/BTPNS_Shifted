import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router } from "react-router-dom"
import {Provider} from "react-redux"
import App from './App'
import AllReducers from "./reducers"
import { persistStore } from "redux-persist"
import { createStore } from 'redux';
import { PersistGate } from "redux-persist/integration/react"

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor = {persistor}>
        <Router>
          <App style={{
            background: 'url(./bg.png)', 
            backgroundSize: "fill", 
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            minHeight: 100 + "vmin"
            }}/>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
