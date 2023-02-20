// Now we need to convert an array of words to an array of emoji. 
// Array.map is the tool for the job. 
// Map is meant for transforming an array of one type into an array of another type. 
// Here we have converted an array of text strings into an array of emoji strings.

import React from 'react';
import './SpiceLevel.css';

function getSpiceLevel(str) {
	switch(str) {
		case 'Spicy':
			return '🌶️🌶️🌶️'
		case 'Mildly Spicy':
			return '🌶️🌶️'
		case 'Mild':
			return '🌶️'
		default:
			return ''
	}
};

function SpiceLevel(props) {
	const emoji = getSpiceLevel(props.name)
	return <div className="SpiceLevel">{emoji}</div>
};

export default SpiceLevel;