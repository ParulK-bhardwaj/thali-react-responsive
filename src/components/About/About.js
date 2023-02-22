  import React from 'react';
  import './About.css'

  function About() {
    return (
      <div><h1 className='About-title'>About Us</h1>
        <div className='About'>
          
          <div className='About-image' >
            <img src='images/thali.jpg' alt='Indian-thali'></img>
          </div>
            <p className='About-desc'>Welcome to the ultimate guide to Indian cuisine! Our site is dedicated to showcasing the rich and diverse flavors of India, featuring the most popular dishes from each of the 29 states. 
              India is a country with a rich and diverse cultural heritage, and this is reflected in its cuisine. From the spicy street food of Mumbai to the rich and flavorful biryanis of Hyderabad, Indian cuisine has something to offer for every taste and preference.
              On our site, you will find detailed information on the most popular dishes from each state, including ingredients for each dish and recommendations on where to try these dishes.
              We have carefully researched and tasted the dishes to bring you the most comprehensive information on Indian cuisine. 
              Whether you are a seasoned foodie or a newcomer to Indian cuisine, our site is the perfect resource to discover and explore the rich and diverse flavors of India.
              So what are you waiting for? Start exploring the many delicious dishes that India has to offer, and discover a new world of flavors and cultural heritage.
              Just do a search for either Dish name, state or region. 
            </p>
        </div>
      </div>
    )
  }

  export default About;