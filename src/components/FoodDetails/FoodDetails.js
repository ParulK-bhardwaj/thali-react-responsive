import React from 'react';
import { useParams } from 'react-router';
import data from '../../indianfood-data.js';
import SpiceLevelList from '../SpiceLevelList/SpiceLevelList.js';

function FoodDetails(props) {
  const params = useParams()
  const { id } = params // Food index
  const { images, name, description, diet, flavor_profile, where_to_eat, where_to_eat_link, city, state, ingredients } = data[id]

  return (
    <section className='FoodDetails text-white bg-gray-950 flex flex-wrap justify-center m-2'>
      <div className='FoodDetails-info w-full md:w-1/2 px-6 py-4 order-2 md:order-1 h-full'>
        <h1 className='FoodDetails-name text-4xl font-bold mb-4'>{ name }</h1>
        <p className='FoodDetails-desc mb-4'>{ description }</p>
        <p className='FoodDetails-ingredient mb-2'><span className="font-bold text-orange-300">Ingredients: </span> {ingredients.join(', ')}</p>
        <p className='FoodDetails-diet mb-2'><span className="font-bold text-orange-300">Diet: </span> { diet }</p>
        <p className='FoodDetails-flavor mb-2'><span className="font-bold  text-orange-300">Flavor Profile: </span> {flavor_profile.join(', ')}</p>
        <SpiceLevelList flavor_profiles={ flavor_profile }/>
        <p className="mt-4">
          <span className="font-bold text-orange-300">Where to Eat: </span>
          <button className="bg-yellow-700 hover:bg-yellow-900 font-bold py-2 px-2 rounded">
            <a href={where_to_eat_link} target="_blank" rel="noopener noreferrer" className="text-white">
              {where_to_eat}
            </a>
          </button>
        </p>
        <p className='mt-2'>
          <span className="font-bold text-orange-300">City: </span> 
          {city}, {state}
        </p>
      </div>
      <div className='FoodDetails-image w-full md:w-1/2  py-5 px-2 overflow-hidden order-1 md:order-2'>
        <img src={`${process.env.PUBLIC_URL}/images/${images}`} 
        alt={name} className="h-4/5 w-full flex-1 rounded-lg border" />
      </div>
    </section>
  )
}

export default FoodDetails;