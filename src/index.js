import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import myReducer from './reducers/index'
import App from './App';
import UserContext from './contextapi/UserContext'
import * as serviceWorker from './serviceWorker';
const store = createStore(myReducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store = {store}>
<UserContext>
<App />
</UserContext>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
