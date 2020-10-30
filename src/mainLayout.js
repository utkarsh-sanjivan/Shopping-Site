import React, { useState } from 'react';
import './index.css';
import CatalogPage from './container/CatalogPage/index';
import Header from './component/organisms/Header/index';
import Footer from './component/organisms/Footer/index';

export default function MainLayout(props) {
    const [totalProductCount, setTotalProductCount] = useState(0);
    return (
        <>
            <Header totalProductCount={totalProductCount}/>
            <CatalogPage totalProductCount={totalProductCount} setTotalProductCount={setTotalProductCount}/>
            <Footer />
        </>
    )
}