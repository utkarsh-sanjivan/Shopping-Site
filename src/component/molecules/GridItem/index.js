import React from 'react';
import './index.css';

export default function GridItem(props) {
    return (
        <div className='grid-container' onClick={() => props.handleSelect(props.id)}>
            <img className='product-image' src={props.image} width={300}/>
            <div className='product-text'>{props.name}</div>
            <div className='product-description'>{props.description}</div>
            <div className='product-info'>Price: {props.price}</div>
            <div className='product-info'>Quality: {props.quantity}</div>
        </div>
    );
}