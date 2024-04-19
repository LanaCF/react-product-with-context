import ProductsList from "./ProductsList";
import ProductsInfo from "./ProductsInfo";
import ProductAdd from "./ProductAdd";

const ProductsBlock = () => {
    return (
        <div className='products-block'>
            <ProductAdd />

            <ProductsInfo />

            <ProductsList />
        </div>
    );
};

export default ProductsBlock;