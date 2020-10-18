import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const style = {
  margin: '0.5em',
  paddingLeft: 0,
  listStyle: 'none',
  background: '#f00'
};

ReactDOM.render(
  <React.StrictMode>
    <App style={style}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
