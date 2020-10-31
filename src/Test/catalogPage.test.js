import React from 'react';
import { create } from "react-test-renderer";
import CatalogPage from './../container/CatalogPage/index';
import ProductGrid from './../component/organisms/ProductGrid/index';
import Cart from './../component/organisms/Cart/index';

let wrapper;
let root;
const renderComponent = props => <CatalogPage {...props} />;
const baseProps = {
    totalProductCount: 0,
    setTotalProductCount: () => {},
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
  root=wrapper.root;
});

describe('Testing Catalog Page with 0 product count', () => {
    it('Catalog Page should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    // Test for numbers of div DOM element when no products are available in the cart.
    it('should atleast 8 div component', () => {
        expect(root.findAllByType('div').length).toEqual(8);
    });

    // Test for numbers of Cart Component when no products are available in the cart.
    it('should atleast Cart component', () => {
        expect(root.findAllByType(Cart).length).toEqual(1);
    });

    // Test for numbers of Product Grid Component when no products are available in the cart.
    it('should atleast 1 Product Grid component', () => {
        expect(root.findAllByType(ProductGrid).length).toEqual(1);
    });
});