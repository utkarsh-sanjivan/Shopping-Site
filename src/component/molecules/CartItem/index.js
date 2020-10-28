import React from 'react';
import './index.css';

export default function CartItem(props) {
    return (
        <div className='product-container'>
            <div className='product-name-container'>
                <img className='product-image' src={props.image} width={50}/>
                <div className='product-name'>{props.name}</div>
            </div>
            <div className='cart-product-info'>₹{props.price}</div>
            <div className='cart-product-info'>
                <span onClick={() => props.removeOne(props.id, props.cartQuantity, props.index)}>-</span>
                {props.cartQuantity}
                <span onClick={() => props.addOne(props.id)}>+</span>
            </div>
            <div className='cart-product-info'>₹{parseInt(props.price)*parseInt(props.cartQuantity)}</div>
        </div>
    );
}