import React from 'react';

const FoodCard = ({item}) => {
    const {image,price,recipe,name}=item;
    return (
        <div className='text-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title flex flex-col items-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center 'text-center'">
    <button className="btn btn-outline border-0 border-b-4 mt-4 border-orange-400">add To Cart</button>

    </div>
  </div>
</div>
            
        </div>
    );
};

export default FoodCard;