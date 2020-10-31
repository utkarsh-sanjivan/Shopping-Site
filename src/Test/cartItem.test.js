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

describe('Testing Cart Item Component Rendering', () => {
    it('Cart Item Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should atleast 6 div component', () => {
        expect(root.findAllByType('div').length===6);
    });

    it('should atleast 1 img component', () => {
        expect(root.findAllByType('img').length===1);
    });

    it('should atleast 2 span component', () => {
        expect(root.findAllByType('span').length===2);
    });
});
