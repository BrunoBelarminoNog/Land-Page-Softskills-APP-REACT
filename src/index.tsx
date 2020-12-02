import React from 'react';
import ReactDOM from 'react-dom';
import {Router } from 'react-router-dom'
import App from './App';
import NavBar from './components/Navbar'
import history from './services/history'


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
