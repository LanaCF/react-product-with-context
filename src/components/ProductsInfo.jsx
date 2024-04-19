import React from 'react';
import { useProductContext } from '../hooks/useProductContext';

const ProductsInfo = () => {
    const { products } = useProductContext();

    return (
        <div className='products-info'>
            Products count: { products.length }
        </div>
    );
};

export default ProductsInfo;