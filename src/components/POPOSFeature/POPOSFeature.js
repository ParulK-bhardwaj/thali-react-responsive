// Now we need to convert an array of words to an array of emoji. 
// Array.map is the tool for the job. 
// Map is meant for transforming an array of one type into an array of another type. 
// Here we have converted an array of text strings into an array of emoji strings.

import React from 'react';
import './POPOSFeature.css';

function getFeature(str) {
	switch(str) {
		case 'outdoors':
			return '🌲'
		case 'coffee':
			return '☕️'
		case 'art':
			return '🖼'
		case 'toilet':
			return '🚽'
		case 'power':
			return '🔌'
		default:
			return '？'
	}
};

function POPOSFeature(props) {
	const emoji = getFeature(props.name)
	return <div className="POPOSFeature">{emoji}</div>
};

export default POPOSFeature;