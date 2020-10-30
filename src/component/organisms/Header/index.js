import React from 'react';
import './index.css';

export default function Header(props) {
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