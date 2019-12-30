import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import thunk from "redux-thunk"
import reducer from "./store/reducer"


const store = createStore(reducer , compose(
    applyMiddleware(thunk)
))


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
