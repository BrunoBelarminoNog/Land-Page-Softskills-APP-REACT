import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './styles/global.css';
import "./styles/animation.css"

import NavBar from './components/Navbar'

import Routes from "./routes"

function App() {
  return (
    <BrowserRouter >
          <NavBar />
          <Routes />
    </BrowserRouter>
  );
}

export default App;
