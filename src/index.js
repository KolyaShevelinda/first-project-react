import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/store'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from "./route";

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
