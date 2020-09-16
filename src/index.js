import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Join, Discord, Mission} from './App';

import {SideBar, Stuff} from './sideBar';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<App />, document.getElementById('root'));


//mission statement centered in middle of screen
//ReactDOM.render(<Mission />, document.getElementById('mission'));

ReactDOM.render(<SideBar />, document.getElementById('sb'));

ReactDOM.render(<Stuff />, document.getElementById('stf'));
//ReactDOM.render(<Join />, document.getElementById('join'));


//ReactDOM.render(<Discord />, document.getElementById('cord'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
