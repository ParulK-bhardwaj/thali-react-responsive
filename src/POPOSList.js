import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

// map() returned an array of strings where 
// the callback function returned the title from each obj in the original array.

// POPOSList is responsible for rendering its children contibuting to UI.
// Components represent UI elements.
export default function POPOSList() {
    const spaces = data.map((obj) => {
        // Deconstruct obj into properties
        const { title, address, images, hours } = obj
        return (
            <POPOSSpace
            key={title} // The title could be a key
            name={title}
            address={address}
            image={images[0]}
            hours={hours}
            />
        )
    })
    return (
    <div className="POPOSList">
        { spaces }
    </div>
    )
}
