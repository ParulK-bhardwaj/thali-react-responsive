import React from 'react';
import FoodDish from '../FoodDish/FoodDish.js';
import data from '../../indianfood-data.js';
import { useState } from 'react';

// map() returned an array of strings where 
// the callback function returned the name from each obj in the original array.

// FoodList is responsible for rendering its children contibuting to UI.
// Components represent UI elements.


export default function FoodList() {
    // use state for search feature.
    const [ query, setQuery ] = useState('');
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isNonVegetarian, setIsNonVegetarian] = useState(false);
    const [spiceLevel, setSpiceLevel] = useState('');

    const handleVegetarianChange = () => {
        setIsVegetarian(prevState => !prevState);
        setIsNonVegetarian(false);
    };
    
    const handleNonVegetarianChange = () => {
        setIsVegetarian(false);
        setIsNonVegetarian(prevState => !prevState);
    };
    
    const dishes = data
    // true if query is in name or in state or in region
    .filter(obj => 
        obj.name.toLowerCase().includes(query.toLowerCase()) 
    || obj.state.toLowerCase().includes(query.toLowerCase())
    || obj.region.toLowerCase().includes(query.toLowerCase())
    || obj.city.toLowerCase().includes(query.toLowerCase())
    )
    // filter by dishes starting with "veg" or "non"
    .filter((obj) => {
        if (isVegetarian && obj.diet.toLowerCase().startsWith('veg')) {
            return true;
        } else if (isNonVegetarian && obj.diet.toLowerCase().startsWith('non')) {
        return true;
        } else if (!isVegetarian && !isNonVegetarian) {
        // return all dishes if no filters are selected
        return true;
        }
        return false;
    })

    // filter by spice level
    .filter(obj => {
        if (spiceLevel === '') {
          return true;
        } else {
          return obj.flavor_profile.includes(spiceLevel);
        }
    })

    // Deconstruct obj into properties const { id, name, state, images, region } = obj
    // when the array is filtered each object will always use the same value for the id.
    .map(({ id, name, state, images, region, description }) => {           
        return (
            <FoodDish
            id={id}
            key={`${name}-${id}`} // The name and id that we added through data.js file could be a key
            name={name}
            state={state}
            image={images}
            region={region}
            description={description}
            />
        )
    })
    return (
        <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-gray-950">
            <section className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mt-4">
                <label htmlFor="searchInput" className="sr-only">Search Input</label>
                <input
                    type="text"
                    value={query}
                    placeholder="Search by Dish, City, State, Region"
                    onChange={(e) => setQuery(e.target.value)}
                    className="block w-full py-2 px-2 border border-gray-300 rounded-md shadow-sm sm:text-md text-sm"
                    id="searchInput"
                 />
            </section>
            <form className="flex flex-col sm:flex-row sm:space-x-4 mt-4 justify-center">
                <label htmlFor="vegetarianInput" className="inline-flex items-center text-md text-white mb-4">
                    <input
                        type="checkbox"
                        checked={isVegetarian}
                        onChange={handleVegetarianChange}
                        className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                        id="vegetarianInput"
                        />
                <span className="ml-2">Vegetarian</span>
                </label>
                <label htmlFor="nonVegetarianInput" className="inline-flex items-center text-md text-white mb-4">
                    <input
                    type="checkbox"
                    checked={isNonVegetarian}
                    onChange={handleNonVegetarianChange}
                    className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                    id="nonVegetarianInput"
                    />
                    <span className="ml-2">Non-vegetarian</span>
                </label>
                <div className="relative">
                    <select
                        value={spiceLevel}
                        onChange={(e) => setSpiceLevel(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-3 py-1 pr-5 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md text-sm"
                        id="spiceLevelInput"
                    >
                        <option value="" disabled>Spice Level</option>
                        <option value="">All</option>
                        <option value="Spicy">Spicy</option>
                        <option value="Mildly Spicy">Mildly Spicy</option>
                        <option value="Mild">Mild</option>
                    </select>
                    {/* displaying a small arrow icon on the right side of a search input field */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-label="down arrow icon"
                        >
                        <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>
            </form>
            <section className="flex flex-wrap my-8 -mx-1">
                {dishes}
            </section>
        </main>      
    )
}