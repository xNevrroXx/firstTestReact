import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Header} from './App';

// const elem = <h2>Hello, world!</h2>;

/* const text = "Hello, World!";
const elem = (
  <div>
    <h2>Текст: {text}</h2>
    <input type="text" />
    <button className="first class" tabIndex={0} data-btn="1">Click</button>
  </div>
) */

// const elem = React.createElement('h2', {className:"greetings"}, "Hello, world!");

ReactDOM.render(
  // elem,
  // <App/>,
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
