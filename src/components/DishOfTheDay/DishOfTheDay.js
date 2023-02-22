//React Router provides the useNavigate hook to programatically navigate to another route.
import { useNavigate } from 'react-router-dom';
import './DishOfTheDay.css';
// to know the length of the list.
import data from '../../indianfood-data.json';

// component that outputs a single button.
// The code here handles a click on the button with onClick. 
function DishOfTheDay() {
	const navigate = useNavigate()

    return (
        <button 
        className="DishOfTheDay"
        onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            navigate(`/details/${id}`)
        }}>
        Dish of the Day
        </button>
    )
};

export default DishOfTheDay;