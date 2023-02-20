import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import data from '../../indianfood-data.js';
import SpiceLevelList from '../SpiceLevelList/SpiceLevelList.js';
import './FoodDetails.css';

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
        <p className='FoodDetails-ingredient'>Ingredient: {ingredients.join(', ')}</p>
        <p className='FoodDetails-diet'>Diet: { diet }</p>
        <p className='FoodDetails-flavor'>Flavor Profile: {flavor_profile.join(', ')}</p>
        <SpiceLevelList flavor_profiles={ flavor_profile }/>
        <p>Where to Eat: <Link to={{ pathname: `${where_to_eat_link}`, target: "_blank", rel: "noopener noreferrer" }} className="FoodDetails-where">{where_to_eat}</Link></p>
        <p>City: {city}, {state}</p>

      </div>
    </div>
  )
}

export default FoodDetails