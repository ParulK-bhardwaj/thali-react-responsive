//React Router provides the useNavigate hook to programatically navigate to another route.
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './DishOfTheDay.css';
// to know the length of the list.
import data from '../../indianfood-data.json';

// component that outputs a single button.
// The code here handles a click on the button with onClick. 
function DishOfTheDay() {
	const navigate = useNavigate()
    // this will get us date and time
    const currentDate = new Date();
    // getDate will get us an integer between 1 to 31 referencing the date only
    const today = currentDate.getDate()
    const dataLength = data.length

    return (
        <button 
        className="DishOfTheDay"
        onClick={(e) => {
            const id = today % dataLength
            navigate(`/details/${id}`)
        }}>
        Dish of the Day
        </button>
    )
};

export default DishOfTheDay;