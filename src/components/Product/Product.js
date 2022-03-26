import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, price } = props.product;
    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt={name}></img>
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <h5 class="card-title">{price}</h5>
                </div>
                <button className="add-to-card">
                    <span className='me-2'>Add to Card</span>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;