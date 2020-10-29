import React from 'react';
import './index.css';

export default function CartItem(props) {
    return (
        <div className='cart-product-container'>
            <div className='cart-product-name-container'>
                <img className='cart-product-image' src={props.image} width={50}/>
                <div className='cart-product-name'>{props.name}</div>
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