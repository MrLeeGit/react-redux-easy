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


// react-redux 的方式

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import Counter from './apps'
// import { Provider, connect } from 'react-redux'
// import { increaseAction } from './action'
// import reducer from './reducer'

// // Store
// const store = createStore(reducer)

// // Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }


// // Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
