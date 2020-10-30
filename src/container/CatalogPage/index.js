import React, { useState, useEffect } from 'react';
import ProductGrid from './../../component/organisms/ProductGrid/index';
import Cart from './../../component/organisms/Cart/index';
import './index.css';
import axios from './../../utils/axios';

export default function CatalogPage(props) {
    const { setTotalProductCount, totalProductCount } = props;
    const [productList, setProductList] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        axios.get('aea5d98a-654d-4423-bd99-6fbb90843730')
            .then(data => {
                setProductList(data.data.data);
            })
    }, []);

    /* 
        Function to select a product from the product grid.
        Takes in the the id for the product.
        If the product doesnot exits then add the product to cart and reduce the count in the product grid.
        If the product exists in the cart then increase the count in cart and decrease in the product grid.
    */
    const handleSelect = currentProductId => {
        let cartIndex = cartItem.findIndex(val => val.id===currentProductId);
        if (cartIndex>-1) {
            let tempCartItem = [ ...cartItem ];
            setTotalProductCount(tempCartItem[cartIndex].quantity===0? totalProductCount :totalProductCount+1);
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
            setTotalProductCount(totalProductCount+1);
            setProductList(tempProduct);
            setCartItem([
                ...cartItem,
                tempCart,
            ]);
        }
    }

    /*
        Function to add product in the cart.
        Takes in the the id for the product.        
    */
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
                setTotalProductCount(val.quantity===0? totalProductCount :totalProductCount+1);
                return val.quantity===0?
                    val
                    : { ...val, quantity: val.quantity-1, cartQuantity: val.cartQuantity+1 }
            }
            return val;
        });
        setProductList(tempProduct);
        setCartItem(tempCartItem);
    }

    /*
        Function to remove product in the cart.
        Takes in the the id for the product.
        If the product count in cart is 1 then remove the product from the cart.
        If the product count in the cart is more than 1 then just decrease the count by 1..
    */
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
        setTotalProductCount(totalProductCount-1);
    }

    /*
        Main body of the shopping catalog which contain two parts.
        Product Grid -> Contains all the product in the for of grid that has the detail of the product as well as the 'Add to Cart' button.
        Cart -> Cart component that contains all the selected products, their price and their count.
    */
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