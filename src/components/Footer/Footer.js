import React from 'react';

// Stretch Challenge Footer component Date 
export default function Footer() {
    let date =  new Date().getFullYear();
    return(
        <div className='Footer'>
            <p>Parul Bhardwaj copyright {date}</p>
        </div>
    )
}