  import React from 'react';
  import Thali from './thali.jpg';

  function About() {
    return (
      <div className='About text-white'>
        <h1 className='text-center text-4xl mt-8 mb-8'>About Us</h1>
        <div className='flex flex-wrap justify-center items-center'>
          <div className="w-full md:w-1/2 p-2">
            <div className='About-image border rounded-lg overflow-hidden'>
              <img src={Thali} alt='Indian-thali'></img>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <p className='About-desc border rounded-lg p-4 text-md'>Welcome to the ultimate guide to Indian cuisine! Our site is dedicated to showcasing the rich and diverse flavors of India, featuring the most popular dishes from each of the 29 states. 
              India is a country with a rich and diverse cultural heritage, and this is reflected in its cuisine. From the spicy street food of Mumbai to the rich and flavorful biryanis of Hyderabad, Indian cuisine has something to offer for every taste and preference.
              On our site, you will find detailed information on the most popular dishes from each state, including ingredients for each dish and recommendations on where to try these dishes.
              We have carefully researched and tasted the dishes to bring you the most comprehensive information on Indian cuisine. 
              Whether you are a seasoned foodie or a newcomer to Indian cuisine, our site is the perfect resource to discover and explore the rich and diverse flavors of India.
              So what are you waiting for? Start exploring the many delicious dishes that India has to offer, and discover a new world of flavors and cultural heritage.
              Just do a search for either Dish name, state or region. 
            </p>
          </div>  
        </div> 
      </div>
    )
  }

  export default About;