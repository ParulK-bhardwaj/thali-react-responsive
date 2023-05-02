import React from 'react';
import { useParams } from 'react-router';
import data from '../../indianfood-data.js';
import SpiceLevelList from '../SpiceLevelList/SpiceLevelList.js';

function FoodDetails(props) {
  const params = useParams()
  const { id } = params // Food index
  const { images, name, description, diet, flavor_profile, where_to_eat, where_to_eat_link, city, state, ingredients } = data[id]

  return (
    <div className='FoodDetails'>
      <div className='FoodDetails-image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images}`} 
         height="600"
         alt={name} />
      </div>

      <div className='FoodDetails-info'>
        <h1 className='FoodDetails-name'>{ name }</h1>
        <p className='FoodDetails-desc'>{ description }</p>
        <p className='FoodDetails-ingredient'><span>Ingredients: </span> {ingredients.join(', ')}</p>
        <p className='FoodDetails-diet'><span>Diet: </span> { diet }</p>
        <p className='FoodDetails-flavor'><span>Flavor Profile: </span> {flavor_profile.join(', ')}</p>
        <SpiceLevelList flavor_profiles={ flavor_profile }/>
        <p>
          <span>Where to Eat: </span>
          <a href={where_to_eat_link} target="_blank" rel="noopener noreferrer" className="FoodDetails-where">
            {where_to_eat}
          </a>
        </p>
        <p><span>City: </span> {city}, {state}</p>

      </div>
    </div>
  )
}

export default FoodDetails