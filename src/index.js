import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import FoodDetails from './components/FoodDetails/FoodDetails';
import FoodList from './components/FoodList/FoodList.js';
import About from './components/About/About';
import reportWebVitals from './reportWebVitals';
// HashRouter and BrowserRouter are two options. 
// They act the same and only differ in how they handle the URL/Path.
// HashRouter includes a # in the URL, while BrowserRouter does not include the #.
// we're using HashRouter because GitHub pages doesn't work with BrowserRouter!
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<FoodList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<FoodDetails />} />
      </Route>
    </Routes>
  </Router>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
