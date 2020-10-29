import React, { useState, useEffect } from 'react';
import ProductGrid from './../../component/organisms/ProductGrid/index';
import Cart from './../../component/organisms/Cart/index';
import './index.css';
import axios from './../../utils/axios';

export default function CatalogPage(props) {
    const [productList, setProductList] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        axios.get('aea5d98a-654d-4423-bd99-6fbb90843730')
            .then(data => {
                setProductList(data.data.data);
            })
    }, []);

    const handleSelect = currentProductId => {
        let cartIndex = cartItem.findIndex(val => val.id===currentProductId);
        if (cartIndex>-1) {
            let tempCartItem = [ ...cartItem ];
            setTotalAmount(tempCartItem[cartIndex].quantity===0? totalAmount: totalAmount+parseInt(tempCartItem[cartIndex].price));
            tempCartItem[cartIndex].cartQuantity+=tempCartItem[cartIndex].quantity===0? 0: 1;
            tempCartItem[cartIndex].quantity-=tempCartItem[cartIndex].quantity===0? 0 :1;
            setCartItem(tempCartItem);
        } else {
            let tempProduct = [];
            let tempCart = {};
            productList.forEach(val => {
                if(val.id===currentProductId) {
                    val = { ...val, quantity: val.quantity-1, cartQuantity: 1 };
                    tempCart=val;
                    setTotalAmount(totalAmount+parseInt(val.price));
                }
                tempProduct.push(val);
            });
            setProductList(tempProduct);
            setCartItem([
                ...cartItem,
                tempCart,
            ]);
        }
    }

    const addOne = currentProductId => {
        let tempProduct = [ ...productList ];
        tempProduct = tempProduct.map(product => {
            if (product.id === currentProductId) {
                return { 
                    ...product,
                    quantity: product.quantity===0? product.quantity :product.quantity-1,
                    cartQuantity: product.quantity===0? product.cartQuantity :product.cartQuantity+1
                };
            }
            return product;
        })
        let tempCartItem = cartItem.map(val => {
            if(val.id===currentProductId) {
                if (val.quantity>0) setTotalAmount(totalAmount+parseInt(val.price));
                return val.quantity===0?
                    val
                    : { ...val, quantity: val.quantity-1, cartQuantity: val.cartQuantity+1 }
            }
            return val;
        });
        setProductList(tempProduct);
        setCartItem(tempCartItem);
    }

    const removeOne = (currentProductId, currentProductQuantity, currentProductIndex) => {
        let tempCartItem = [ ...cartItem ];
        if (parseInt(currentProductQuantity) === 1) {
            setProductList(productList.map(product => {
                if (product.id===currentProductId) {
                    return { ...product, quantity: product.quantity+1, cartQuantity: product.cartQuantity-1 }
                }
                return product;
            }));
            setTotalAmount(totalAmount-parseInt(tempCartItem[currentProductIndex].price));
            tempCartItem.splice(currentProductIndex, 1);
            setCartItem(tempCartItem);
        } else {
            let tempProduct = [ ...productList ];
            tempProduct = tempProduct.map(product => {
                if (product.id === currentProductId) {
                    return { 
                        ...product,
                        quantity: product.cartQuantity===0? product.quantity :product.quantity+1,
                        cartQuantity: product.cartQuantity===0? product.cartQuantity :product.cartQuantity-1
                    };
                }
                return product;
            })
            let tempCartItem = cartItem.map(val => {
                if(val.id===currentProductId) {
                    if (val.cartQuantity>0) setTotalAmount(totalAmount-parseInt(val.price));
                    return val.cartQuantity===0?
                        val
                        : { ...val, quantity: val.quantity+1, cartQuantity: val.cartQuantity-1 }
                }
                return val;
            });
            setProductList(tempProduct);
            setCartItem(tempCartItem);
        }
    }

    return (
        <div className='body'>
            <ProductGrid 
                productList={productList}
                handleSelect={handleSelect}
            />
            <Cart 
                cartItem={cartItem}
                addOne={addOne}
                removeOne={removeOne}
                totalAmount={totalAmount}
            />
        </div>
    );
}