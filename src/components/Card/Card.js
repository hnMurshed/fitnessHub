import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = ({ choosedProducts }) => {
    return (
        <div className='shadow-lg px-3 py-5 rounded-3 card-item'>
            <h4 className='mb-3'>Selected Items</h4>
            {
                choosedProducts.map(choosedProduct => <ChoosedProductInfo
                    key={choosedProduct.id}
                    choosedProduct={choosedProduct}
                ></ChoosedProductInfo>)
            }
            <button className='btn btn-primary my-2 btn-choose'>Choose 1 for me</button>
            <br />
            <button className='btn btn-primary btn-again'>Choose again</button>
        </div>
    );
};

const ChoosedProductInfo = ({ choosedProduct }) => {
    const { img, name } = choosedProduct;
    return (
        <div className='choosed-product-info my-2 p-2 rounded-pill'>
            <div className="img-box me-2">
                <img src={img} alt={name} />
            </div>
            <h5>{name}</h5>
            <FontAwesomeIcon icon={faTrash} className="ms-auto me-3"></FontAwesomeIcon>
        </div>
    )
}

export default Card;