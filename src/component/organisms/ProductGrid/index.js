import React from 'react';
import GridItem from './../../molecules/GridItem/index';
import './index.css';

export default function ProductGrid(props) {
    /*
        Grid Component that holds a particular product.
        It has all the details of product along with price and quantity.
        It also has a 'Add To Cart' button that can be used to add the product to the cart.
    */
    return (
        <div className='product-grid'>
            {props.productList.map(product => 
                <GridItem
                    {...product}
                    key={product.id}
                    handleSelect={props.handleSelect}
                />
            )}
        </div>
    )
}