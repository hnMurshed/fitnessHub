import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [chooseProducts, setChoosedProducts] = useState([]);
    console.log(chooseProducts);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    
    const getChoosedProducts = (product) => {
        if (chooseProducts.includes(product)) {
            console.log('already exist');
        }
        else if (chooseProducts.length === 4) {
            console.log("you can't choose over 4");
        }
        else {
            const choosedProducts = [...chooseProducts, product];
            setChoosedProducts(choosedProducts);
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
                <p>Selectem Items: {chooseProducts.length}</p>
                <Card></Card>
            </div>
        </div>
    );
};

export default Shop;