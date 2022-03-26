import React from 'react';
import Products from '../Products/Products';

const Shop = () => {
    return (
        <div className='row container mx-auto p-0'>
            <div className="col-8">
                <h2>products container</h2>
                <Products></Products>
            </div>
            <div className="col-4">
                <h2>card container</h2>
            </div>
        </div>
    );
};

export default Shop;