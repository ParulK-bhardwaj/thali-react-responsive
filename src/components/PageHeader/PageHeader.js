import React from 'react';
import './PageHeader.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function PageHeader() {
    return (
        <div className='PageHeader'>
            <header>
                <h1>SFPOPOS</h1>
                <div className='Header-Subheader'>San Franciscos Privately Owned Public Spaces</div>
                <div className='Navigation'>
                {/* A function to determine what class name should be applied to any link. 
                React Router will pass an isActive prop. This is a Boolean. 
                /True when the link is active and False when not. */}
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">List</NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about">About</NavLink>
                <RandomSpace />
                </div>
            </header>
        </div>
    )
  }
  
export default PageHeader;