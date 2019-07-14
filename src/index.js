import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Context from './Context';
// import Lazy from './Lazy';
// import Memo from './Memo';
// import UseState from './UseState'
import ContextHooks from "./ContextHooks";
import UseMemoHooks from "./UseMemoHooks";
import UseRefHook from "./UseRefHook";
import CustomHook from "./CustomHook";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CustomHook />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
