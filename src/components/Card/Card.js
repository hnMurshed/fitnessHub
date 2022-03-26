import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className='shadow-lg px-3 py-5 rounded-3 card-item'>
            <h4>Selected Items</h4>
            <button className='btn btn-primary mb-2 mt-3 btn-choose'>Choose 1 for me</button>
            <br />
            <button className='btn btn-primary btn-again'>Choose again</button>
        </div>
    );
};

export default Card;