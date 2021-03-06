import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductsGrid = () => {

    const productGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '15px',
    }

    const { products} = useContext(ProductsContext)

    return ( 
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div style={productGrid}>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
        </div>
     );
}
 
export default ProductsGrid;