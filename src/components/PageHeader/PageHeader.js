import React from 'react';
import { NavLink } from 'react-router-dom';
import DishOfTheDay from '../DishOfTheDay/DishOfTheDay';
import Logo from './logo-no-background.png';

function PageHeader() {
    return (
        <div className='PageHeader'>
            <header>
                <img src={Logo} alt='Thali Must Eats Logo' className='Logo h-60 w-auto block mx-auto' />
                {/* <h1 className="text-2xl font-bold text-gray-800" >THALI - MUST EATS</h1>
                <div className='Header-Subheader'>Flavors of India!</div> */}
                <div className='Navigation flex items-center justify-center text-navy bg-grey-200 mb-8'>
                {/* A function to determine what class name should be applied to any link. 
                React Router will pass an isActive prop. This is a Boolean. 
                /True when the link is active and False when not. */}
                    <NavLink 
                        className={({ isActive }) => isActive ? "text-green-700 text-xl mx-4" : "text-yellow-700 font-large mx-4" }
                        to="/">Home</NavLink>
                    <NavLink 
                        className={({ isActive }) => isActive ? "text-green-700 text-xl mx-4" : "text-yellow-700 font-large mx-4"  }
                        to="/about">About</NavLink>
                    <DishOfTheDay className="DishOfTheDay text-green-700 font-large mx-4"/>
                </div>
            </header>
        </div>
    )
  }
  
export default PageHeader;