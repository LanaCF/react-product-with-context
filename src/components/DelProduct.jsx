import React from 'react';
import { useProductContext } from '../hooks/useProductContext';

const DelProduct = ({ productId }) => {
    const { products, setProducts } = useProductContext();

    const handlerDel = () => {
        const newProductsArr = products.filter(item => item.id !== productId);
        console.log(newProductsArr);
        setProducts([...newProductsArr]);
    }

    return (
        <>
            <button onClick={ handlerDel } className='del-red'>X</button>
        </>
    );
};

export default DelProduct;