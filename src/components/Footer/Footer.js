import React from 'react';

// Stretch Challenge Footer component Date 
export default function Footer() {
    let date =  new Date().getFullYear();
    return(
        <footer className='Footer text-white text-center bg-gray-900 py-1'>
            <p>Parul Bhardwaj copyright {date}</p>
        </footer>
    )
}