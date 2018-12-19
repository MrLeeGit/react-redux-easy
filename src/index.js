import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { addToCart, deleteFromCart, updateCart } from './actions/index';
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500mg', 1, 250));
store.dispatch(deleteFromCart('bread 700g'));
store.dispatch(updateCart('milk 500ml',10,100));


unsubscribe();