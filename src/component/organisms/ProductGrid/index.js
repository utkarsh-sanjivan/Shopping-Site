import React from 'react';
import GridItem from './../../molecules/GridItem/index';
import './index.css';

export default function ProductGrid(props) {
    return (
        <div className='product-grid'>
            {props.productList.map(product => 
                <GridItem
                    {...product}
                    handleSelect={props.handleSelect}
                />
            )}
        </div>
    )
}