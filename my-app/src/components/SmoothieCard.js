import React from 'react';
import '../index.css';
// Interface defining the properties for the SmoothieCard component


// SmoothieCard component to display information about a smoothie
const SmoothieCard = ( { smoothie }) => {
    return (
        // Container for the smoothie card with the "smoothie-card" class
        <div className="smoothie-card">
            <img src={smoothie.image} alt="Smoothie" className='smoothie-image' />
            <h3>{smoothie.title}</h3>
            <p>{smoothie.allergens}</p>
            <p>{smoothie.ingredients}</p>
            <div className="rating">{smoothie.rating}</div>
        </div>
    )
}

export default SmoothieCard;