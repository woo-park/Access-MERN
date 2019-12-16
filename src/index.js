import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//reducer and redux setup

// import allReducer from './reducers';

import { Provider } from 'react-redux'  //hook it up
import { createStore } from 'redux';    //combineReducers will be placed inside reducers/index.js for simplicity sake

const store = createStore(()=>{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
        <Provider store = {store}>
          <App />
        </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
