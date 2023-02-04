import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
        <img src={logo} className="App-logo" alt="logo" />
      <Footer />
    </div>
  );
}

export default App;
