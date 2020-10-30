import React from 'react';
import './index.css';
import CartItem from '../../molecules/CartItem';

export default function Cart(props) {
    /*
        Cart Component that holds selected products.
        It has the body of the cart that holds the product list their indivisual price, quantity and total price.
        It also has a footer part that displays the total amount of the cart.
    */
    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <div className='header-item'>Product</div>
                <div className='header-item'>Price</div>
                <div className='header-item'>Quantity</div>
                <div className='header-item'>Total</div>
            </div>
            {props.cartItem.map((item, index) => 
                <CartItem 
                    {...item}
                    index={index}
                    key={props.id}
                    removeOne={props.removeOne}
                    addOne={props.addOne}
                />
            )}
            {props.cartItem.length>0?
                <div className='cart-footer'>
                    <hr />
                    <div className='footer-item'>Total: ₹{props.totalAmount}</div>
                </div>
            : null}
        </div>
    )
} 