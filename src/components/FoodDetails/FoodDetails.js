import React from 'react';
import { useParams } from 'react-router';
import data from '../../indianfood-data.js';
import FoodFeatureList from '../FoodFeatureList/FoodFeatureList.js';
import './FoodDetails.css';

function FoodDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className='FoodDetails'>
      <div className='FoodDetails-image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>

      <div className='FoodDetails-info'>
        <h1 className='FoodDetails-title'>{ title }</h1>
        <p className='FoodDetails-desc'>{ desc }</p>
        <p className='FoodDetails-hours'>{ hours }</p>
        <FoodFeatureList features={ features }/>
        <p className='FoodDetails-geo'>{ geo.lat } { geo.lon }</p>
      </div>
    </div>
  )
}

export default FoodDetails