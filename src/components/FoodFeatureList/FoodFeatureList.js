import React from 'react';
import FoodFeature from '../FoodFeature/FoodFeature.js';
import './FoodFeatureList.css';

// This component will take an array of strings and return an array of FoodFeature components.
function FoodFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <FoodFeature key={feature} name={feature} />
    })
	return (
    <div className="FoodFeatureList">{icons}</div>
    )
}

export default FoodFeatureList;