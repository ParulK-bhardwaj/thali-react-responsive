import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title() {
    return (
        <div className='Title'>
            <header>
                <h1>SFPOPOS</h1>
                <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
                <div>
                {/* A function to determine what class name should be applied to any link. 
                React Router will pass an isActive prop. This is a Boolean. 
                /True when the link is active and False when not. */}
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">List</NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about">About</NavLink>

                </div>
            </header>
        </div>
    )
  }
  
export default Title