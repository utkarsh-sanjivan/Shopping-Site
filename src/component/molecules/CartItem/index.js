import React from 'react';
import './index.css';

export default function CartItem(props) {
    /*
        Cart Item Component that holds the products inside the cart component.
        It has the body of the cart that holds the indivisual product their indivisual price, quantity and total price.
        It also has total amount of the cart.
    */
    return (
        <div className='cart-product-container'>
            <div className='cart-product-name-container'>
                <img className='cart-product-image' src={props.image} alt={'Cart Product'} width={50}/>
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