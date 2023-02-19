import React from 'react';
import FoodSpace from '../FoodSpace/FoodSpace.js';
import './FoodList.css';
import data from '../../indianfood-data.js';
import { useState } from 'react';

// map() returned an array of strings where 
// the callback function returned the title from each obj in the original array.

// FoodList is responsible for rendering its children contibuting to UI.
// Components represent UI elements.


export default function FoodList() {
    // use state for search feature.
    const [ query, setQuery ] = useState('')
    const spaces = data
    // true if query is in title or in address
    .filter(obj => obj.name.toLowerCase().includes(query.toLowerCase()) || obj.state.toLowerCase().includes(query.toLowerCase()))
    // Deconstruct obj into properties const { id, title, address, images, hours } = obj
    
    // when the array is filtered each object will always use the same value for the id.
    .map(({ id, name, state, images, region }) => {           
        return (
            <FoodSpace
            id={id}
            key={`${name}-${id}`} // The title and id that we added through data.js file could be a key
            name={name}
            state={state}
            image={images}
            region={region}
            />
        )
    })
    return (
    <div className="FoodList">
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
