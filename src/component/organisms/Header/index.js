import React from 'react';
import './index.css';

export default function Header(props) {
    return (
        <div className='header'>
            <div className='logo-header'></div>
            {/* <img src='/cart-logo.png' alt='shopping-cart' /> */}
            <div className='title-header'>Shopping Site</div>
        </div>
    )
}