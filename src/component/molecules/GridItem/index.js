import React from 'react';
import './index.css';

export default function GridItem(props) {
    return (
        <div className='grid-container'>
            <img className='product-image' src={props.image} alt={'Product'} width={300}/>
            <div className='product-text'>{props.name}</div>
            <div className='product-description'>{props.description}</div>
            <div className='product-info'><b>Price:</b> {props.price}</div>
            <div className='product-info'><b>Quality:</b> {props.quantity}</div>
            {parseInt(props.quantity)>0?<div  className='product-button' onClick={() => props.handleSelect(props.id)}>Add to Cart</div>: null}
        </div>
    );
}