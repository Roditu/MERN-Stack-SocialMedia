/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reducers from './reducers'
import App from './App';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <GoogleOAuthProvider clientId='375668782508-5obom80h3ji413flumsbr39ags174ijf.apps.googleusercontent.com'>
    <Provider store = {store}>
        <App />
    </Provider>
    </GoogleOAuthProvider>,
document.getElementById('root'));