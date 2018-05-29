import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PostList from "./PostList";

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<PostList />, document.getElementById('root'));
registerServiceWorker();
