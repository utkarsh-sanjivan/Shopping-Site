import React from 'react';
import { create } from "react-test-renderer";
import CartItem from '../component/molecules/CartItem/index';

let wrapper;
let root;
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
  root=wrapper.root;
});

// Unit Test Cases for testing Cart Item Component.
describe('Testing Cart Item Component Rendering', () => {
    // Test for matching the snapshot when no products are available in the cart.
    it('Cart Item Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    // Test for numbers of div DOM element in the Cart Item component.
    it('should atleast 6 div component', () => {
        expect(root.findAllByType('div').length).toEqual(6);
    });

    // Test for numbers of img DOM element in the Cart Item component.
    it('should atleast 1 img component', () => {
        expect(root.findAllByType('img').length).toEqual(1);
    });

    // Test for numbers of span DOM element in the Cart Item component.
    it('should atleast 2 span component', () => {
        expect(root.findAllByType('span').length).toEqual(2);
    });
});
