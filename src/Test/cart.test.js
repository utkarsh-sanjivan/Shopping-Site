import React from 'react';
import { create } from "react-test-renderer";
import Cart from '../component/organisms/Cart/index';
import CartItem from '../component/molecules/CartItem/index';

let wrapper;
let root;
const renderComponent = props => <Cart {...props} />;
const baseProps = {
  cartItem: [],
  addOne: () => {},
  removeOne: () => {},
  totalAmount: () => {},
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
  root=wrapper.root;
});

// Unit Test Cases for testing Cart Component with No items in the cart.
describe('Testing Cart Component with No Items', () => {
  // Test for matching the snapshot when no products are available in the cart.
  it('Cart Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Test for numbers of div DOM element when no products are available in the cart.
  it('should atleast 6 div component', () => {
    expect(root.findAllByType('div').length).toEqual(6);
  });

  // Test for numbers of Cart Item Component when no products are available in the cart.
  it('should have atleast no Cart Item Component', () => {
    expect(root.findAllByType(CartItem).length).toEqual(0);
  });
});

// Unit Test Cases for testing Cart Component with items in the cart.
describe('Testing Cart Component with Items', () => {
  let wrapperWithSelectedProduct = create(renderComponent({ 
    ...baseProps,
    cartItem: [{
      "id": 1,
      "name": "Product 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
      "price": "100.00",
      "cartQuantity": "10",
      "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
    },]
  }));
  let rootWithSelectedProduct=wrapperWithSelectedProduct.root;

    // Test for matching the snapshot when products are available in the cart.
  it('Cart Component should render properly', () => {
    expect(wrapperWithSelectedProduct.toJSON()).toMatchSnapshot();
  });

  // Test for numbers of div DOM element when products are available in the cart.
  it('should atleast 6 div component', () => {
    expect(rootWithSelectedProduct.findAllByType('div').length>5).toBe(true);
  });

  // Test for numbers of Cart Item Component when products are available in the cart.
  it('should have atleast no Cart Item Component', () => {
    expect(rootWithSelectedProduct.findAllByType(CartItem).length).toEqual(1);
  });
});
