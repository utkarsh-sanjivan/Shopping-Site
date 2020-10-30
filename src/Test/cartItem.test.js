import React from 'react';
import { create } from "react-test-renderer";
import CartItem from '../component/molecules/CartItem/index';

let wrapper;
const renderComponent = props => <CartItem {...props} />;
const baseProps = {
    key: '1',
    image: '',
    name: 'Product1',
    description: 'lorem ipsum',
    price: '100.00',
    cartQuantity: '10',
    handleSelect: () => {},
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
});

describe('Testing Cart Item Component Rendering', () => {
  it('Cart Item Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
