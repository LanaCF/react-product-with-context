import React from 'react';
import { useProductContext } from '../hooks/useProductContext';
import DelProduct from './DelProduct';

const ProductsList = () => {
    const { products } = useProductContext();

    return (
        <div className="products-list">
            <h2>Products</h2>

            {
                products.map( product => (
                        
                        <div key={ product.id } className='product-item' >
                           <DelProduct productId={ product.id } />

                           { product.title }
                        </div>
                    )
                )
            }
            
        </div>
    );
};

export default ProductsList;