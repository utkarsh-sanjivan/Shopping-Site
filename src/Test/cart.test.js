import React from 'react';
import { create } from "react-test-renderer";
import Cart from '../component/organisms/Cart/index';

let wrapper;
const renderComponent = props => <Cart {...props} />;
const baseProps = {
  cartItem: [],
  addOne: () => {},
  removeOne: () => {},
  totalAmount: () => {},
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
});

describe('Testing Cart Component Rendering', () => {
  it('Cart Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();;
  });
});
