import React from 'react';
import './App.css';
import PageHeader from '../PageHeader/PageHeader.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
