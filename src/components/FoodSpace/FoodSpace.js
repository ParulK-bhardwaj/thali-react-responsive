// import logo from './logo.svg'
import './FoodSpace.css';

// Link on the other hand is for general navigation that might appear anywhere else. The big difference is NavLink offers the extra feature of activeClassName and Link doesn't have this.
import { Link } from 'react-router-dom';

//className for the top level element in the component  should match it's name. 
// This will help us remember what styles apply to what, 
// and keep us from using the same names in different files.

function FoodSpace(props) {
    // The attributes above set the values of the properties name, image and address props
    const { name, state, image, region, id } = props
    return (
        <div className='FoodSpace'>
            <Link className='FoodSpace-title' to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`}
                    width="300"
                    height="300"
                    alt="Dishes"
                />
            </Link> 
            <h1>
                <Link to={`/details/${id}`}>
                    {name}
                </Link>
            </h1>
            <div className='FoodSpace-info'>
                <div>{state}</div>
                <div>{region}</div>
            </div>
        </div>
    )
};

export default FoodSpace;