import React from 'react';
import { create } from "react-test-renderer";
import Cart from '../component/organisms/Cart/index';
import CartItem from '../component/Molecules/CartItem/index';

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

describe('Testing Cart Component with No Items', () => {
  it('Cart Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();;
  });

  it('should atleast 6 div component', () => {
    expect(root.findAllByType('div').length===6);
  });

  it('should have atleast no Cart Item Component', () => {
    expect(root.findAllByType(CartItem).length===0);
  });
});

describe('Testing Cart Component with Items', () => {
  wrapper = create(renderComponent({ 
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
  root=wrapper.root;

  it('Cart Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();;
  });

  it('should atleast 8 div component', () => {
    expect(root.findAllByType('div').length===8);
  });

  it('should have atleast no Cart Item Component', () => {
    expect(root.findAllByType(CartItem).length===0);
  });
});
