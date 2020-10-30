import React, { useState } from 'react';
import './index.css';
import CatalogPage from './container/CatalogPage/index';
import Header from './component/organisms/Header/index';
import Footer from './component/organisms/Footer/index';

export default function MainLayout(props) {
    const [totalProductCount, setTotalProductCount] = useState(0);

    /* 
        Main Layout of the shopping page
        There are three parts,
        Header -> The header with logo, name and cart icon with total number of items in cart
        Body ->  Body with  product list and a cart.
        Footer ->  Footer with website details 
    */
    return (
        <>
            <Header totalProductCount={totalProductCount}/>
            <CatalogPage totalProductCount={totalProductCount} setTotalProductCount={setTotalProductCount}/>
            <Footer />
        </>
    )
}