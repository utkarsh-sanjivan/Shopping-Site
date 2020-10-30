import React from 'react';
import './index.css';

export default function Header(props) {
    /*
        Header Component of the page.
        It has the logo, name and the product count of the product added.
    */
    return (
        <div className='header'>
            <div className='logo-header'></div>
            <div className='title-header'>Shopping Site</div>
            <div className='cart-item-count'>
                <i className="fas fa-shopping-cart cart-icon"></i>
                {props.totalProductCount>0?<div className='total-count'>{props.totalProductCount}</div> :null}
            </div>
        </div>
    )
}