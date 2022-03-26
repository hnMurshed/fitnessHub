import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [choosedProducts, setChoosedProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const getChoosedProducts = (product) => {
        if (choosedProducts.includes(product)) {
            console.log('already exist');
        }
        else if (choosedProducts.length === 4) {
            console.log("you can't choose over 4");
        }
        else {
            const addedProducts = [...choosedProducts, product];
            setChoosedProducts(addedProducts);
        }
    }
    return (
        <div className='row container mx-auto p-0 mt-5'>
            <div className="col-8">
                <Products
                    products={products}
                    getChoosedProducts={getChoosedProducts}
                ></Products>
            </div>
            <div className="col-4">
                <Card
                    choosedProducts={choosedProducts}
                ></Card>
            </div>
        </div>
    );
};

export default Shop;