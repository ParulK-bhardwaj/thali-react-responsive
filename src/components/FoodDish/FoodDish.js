import React from 'react';

// Link on the other hand is for general navigation that might appear anywhere else. The big difference is NavLink offers the extra feature of activeClassName and Link doesn't have this.
import { Link } from 'react-router-dom';

//className for the top level element in the component  should match it's name. 
// This will help us remember what styles apply to what, 
// and keep us from using the same names in different files.

function FoodDish(props) {
    // The attributes above set the values of the properties name, image and address props
    const { name, state, image, region, id } = props
    return (
        <div className="my-2 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
            <div className="relative rounded-lg overflow-hidden group bg-white shadow-md">
                <Link to={`/details/${id}`}>
                <img
                    className="h-96 w-full object-cover transition duration-500 transform group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/images/${image}`}
                    alt={name}
                />
                <div className="absolute inset-0 bg-white opacity-0"></div>
                <div className="absolute top-0 left-0 p-4 bg-white opacity-70 group-hover:opacity-80 flex flex-col justify-end items-start">
                    <h2 className="font-bold text-lg text-black-800">{name}</h2>
                </div>
                <div className="absolute bottom-0 right-0 p-4 bg-white opacity-70 group-hover:opacity-80 flex flex-col justify-end items-end">
                    <div className="text-black-800 font-medium">{state}, {region}</div>
                </div>
                </Link>
            </div>
        </div>
    )
};

export default FoodDish;