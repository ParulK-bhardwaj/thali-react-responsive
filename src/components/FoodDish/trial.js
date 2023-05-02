<div className="my-2 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link className='FoodDish-name' to={`/details/${id}`}>
            <img
              className="h-96 w-full object-cover transition duration-500 transform hover:scale-110"
              src={`${process.env.PUBLIC_URL}/images/${image}`}
              alt={name}
            />
          </Link>
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800">
              <Link className='FoodDish-name' to={`/details/${id}`}>
                {name}
              </Link>
            </h2>
            <div className="mt-2 text-gray-600">
              <div>{state}</div>
              <div>{region}</div>
            </div>
          </div>
        </div>
      </div>      