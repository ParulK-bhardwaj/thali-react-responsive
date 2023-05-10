import React from 'react';
import PageHeader from '../PageHeader/PageHeader.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';

// https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
function App() {
  return (
    <main className="App bg-black">
      <div className='min-h-screen'>
        <PageHeader />
        <div className='bg-gray-950 '>
          <Outlet /> 
        </div>
      </div>
      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </main>
  );
}

export default App;
