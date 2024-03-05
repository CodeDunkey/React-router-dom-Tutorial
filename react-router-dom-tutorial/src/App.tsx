import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { AppRoutes } from './Routes/Routes';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
        </ul>
      </nav>
      <AppRoutes />
    </>
  );
}

export default App;
