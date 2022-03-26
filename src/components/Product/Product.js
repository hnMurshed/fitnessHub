import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({getChoosedProducts, product}) => {
    const { img, name, price } = product;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt={name}></img>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-title">{price}</h5>
                </div>
                <button onClick={() => getChoosedProducts(product)} className="add-to-card">
                    <span className='me-2'>Add to Card</span>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;