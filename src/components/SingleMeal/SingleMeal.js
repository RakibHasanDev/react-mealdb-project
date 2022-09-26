import React from 'react';
import './SingleMeal.css'

const SingleMeal = ({ meal }) => {
    console.log(meal);
    const { strMeal, strMealThumb, strCategory, strInstructions, strArea
 } = meal;
    return (
        <div className='single-meal'>
            <img src={strMealThumb} alt="" />
            <div className='product-details'>
                <h4>Name: {strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p>Tradition: {strArea}</p>
                <p>Introduction: {strInstructions.length >50 ? strInstructions.slice(0,50) +'....':strInstructions}</p>
            </div>
            <button className='cart-button'>Add to Cart</button>

            
       </div>
    );
};

export default SingleMeal;