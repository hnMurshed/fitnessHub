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

    const chooseOne = () => {
        // let choosedProductForMe;
        const randomNumber = Math.floor(Math.random() * choosedProducts.length);
        const productChoosed = choosedProducts.find(product => choosedProducts.indexOf(product) === randomNumber);
        // choosedProductForMe = productChoosed;
        setChoosedProducts([productChoosed]);
        
        return (
            <div>
                <button className='btn btn-danger'>Buy Now</button>
            </div>
        )
    }

    const clearProducts = () => {
        setChoosedProducts([]);
    }

    const trashProduct = trashedProduct => {
        const restProducts = choosedProducts.filter(product => product !== trashedProduct);
        setChoosedProducts(restProducts);
    }
    return (
        <div className='shop-container row container mx-auto p-0 mt-5 flex-row-reverse flex-md-row '>
            <div className="col-12 col-md-8">
                <Products
                    products={products}
                    getChoosedProducts={getChoosedProducts}
                ></Products>
            </div>
            <div className="col-12 col-md-4">
                <Card
                    chooseOne={chooseOne}
                    trashProduct={trashProduct}
                    clearProducts={clearProducts}
                    choosedProducts={choosedProducts}
                ></Card>
            </div>
        </div>
    );
};

export default Shop;