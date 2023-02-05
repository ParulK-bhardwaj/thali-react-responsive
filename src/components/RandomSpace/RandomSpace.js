//React Router provides the useNavigate hook to programatically navigate to another route.
import { useNavigate } from 'react-router-dom';
import './RandomSpace.css';
// to know the length of the list.
import data from '../../sfpopos-data.json';

// component that outputs a single button.
// The code here handles a click on the button with onClick. 
function RandomSpace() {
	const navigate = useNavigate()
    return (
            <button 
        className="RandomSpace"
        onClick={(e) => {
                const id = Math.floor(Math.random() * data.length)
                navigate(`/details/${id}`)
                }}>Show me a random space</button>
    )
};

export default RandomSpace;