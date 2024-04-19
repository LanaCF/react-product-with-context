import React, { useState } from 'react';
import { useProductContext } from '../hooks/useProductContext';

const ProductAdd = () => {
    const { products, setProducts } = useProductContext();
    const [addProduct, setAddProduct] = useState('');

    const disabled = !addProduct;

    const handlerChange = (e) => {
        setAddProduct(e.target.value);
    }

    const renderProduct = () => {
        const newProduct = {
            id: Date.now(),
            // id: Math.random().toString(36).substring(2),   // це два способи створення унікального ID. Ще можна встановити бібліотеку uuid - npm install uuid. Після цього import { v4 as uuidv4 } from 'uuid'; const newProduct = { id: uuidv4(), title: addProduct };
            title: addProduct
        };

        setProducts([...products, newProduct]);
        setAddProduct('');
    }

    console.log(products);

    return (
        <div className='add-products'>
            <input type="text" onChange={ handlerChange } value={ addProduct } className='addProduct' />

            <button onClick={ renderProduct } className='btn-add' disabled={ disabled } >
                Add
            </button>
        </div>
    );
};

export default ProductAdd;