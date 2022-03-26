import React from 'react';
import Product from '../Product/Product';

const Products = ({products, getChoosedProducts}) => {
    
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    getChoosedProducts={getChoosedProducts}
                ></Product>)
            }
        </div>
    );
};

export default Products;