import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatalogPage from './container/CatalogPage/index';
import Header from './component/organisms/Header/index';
import Footer from './component/organisms/Footer/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CatalogPage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
