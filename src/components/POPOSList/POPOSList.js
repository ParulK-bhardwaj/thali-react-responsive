import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace.js';
import './POPOSList.css';
import data from '../../sfpopos-data.js';
import { useState } from 'react';

// map() returned an array of strings where 
// the callback function returned the title from each obj in the original array.

// POPOSList is responsible for rendering its children contibuting to UI.
// Components represent UI elements.


export default function POPOSList() {
    // use state for search feature.
    const [ query, setQuery ] = useState('')
    const spaces = data
    // true if query is in title or in address
    .filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
    // Deconstruct obj into properties const { id, title, address, images, hours } = obj
    
    // when the array is filtered each object will always use the same value for the id.
    .map(({ id, title, address, images, hours }) => {           
        return (
            <POPOSSpace
            id={id}
            key={`${title}-${id}`} // The title and id that we added through sfpopos-data.js file could be a key
            name={title}
            address={address}
            image={images[0]}
            hours={hours}
            />
        )
    })
    return (
    <div className="POPOSList">
        {/* Created the input field for the search feature. */}
        {/* we have created a variable query that holds the value you entered into the field. */}
        <form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
		</form>
        { spaces }
    </div>
    )
}
