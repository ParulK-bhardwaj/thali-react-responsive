import React from 'react';
import './App.css';
import Title from '../Title/Title.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
