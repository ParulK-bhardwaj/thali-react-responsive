import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import POPOSList from './POPOSList';
import About from './About';
import POPOSDetails from './POPOSDetails'
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
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
