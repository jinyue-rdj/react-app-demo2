import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PostList from "./PostList";
import LoginForm from "./LoginForm";

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
<PostList />,

//<LoginForm />,

 document.getElementById('root'));
registerServiceWorker();
