import React from 'react';
import SpiceLevel from '../SpiceLevel/SpiceLevel.js';

// This component will take an array of strings and return an array of SpiceLevel components.
function SpiceLevelList(props) {
	const icons = props.flavor_profiles.map((flavor_profile) => {
    return <SpiceLevel key={flavor_profile} name={flavor_profile} />
    })
	return (
    <section className="SpiceLevelList">{icons}</section>
    )
}

export default SpiceLevelList;