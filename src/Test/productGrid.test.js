import React from 'react';
import { create } from "react-test-renderer";
import ProductGrid from '../component/organisms/ProductGrid/index';
import GridItem from '../component/molecules/GridItem/index';

let wrapper;
let root;
const renderComponent = props => <ProductGrid {...props} />;
const baseProps = {
    productList: [],
    handleSelect: () => {}
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
  root=wrapper.root;
});

// Unit Test Cases for testing Grid Component with no selected products.
describe('Testing Product Grid Component Rendering with no selected product', () => {
    // Test for matching the snapshot when no products selected.
    it('Product Grid Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    // Test for numbers of div DOM element in the Grid component with no selected products.
    it('should atleast 1 div component', () => {
        expect(root.findAllByType('div').length).toEqual(1);
    });

    // Test for numbers of Grid Item component in the Grid component with no selected products.
    it('should no Grid Item component', () => {
        expect(root.findAllByType(GridItem).length).toEqual(0);
    });
});

// Unit Test Cases for testing Grid Component with selected products.
describe('Testing Product Grid Component Rendering with selected product', () => {
    let wrapperWithSelectedProduct = create(renderComponent({ 
        ...baseProps,
        productList: [{
        "id": 1,
        "name": "Product 1",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "price": "100.00",
        "Quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
        },]
    }));
    let rootWithSelectedProduct=wrapperWithSelectedProduct.root;

    // Test for matching the snapshot when products selected.
    it('Product Grid Component should render properly', () => {
        expect(wrapperWithSelectedProduct.toJSON()).toMatchSnapshot();
    });

    // Test for numbers of div DOM element in the Grid component with selected products.
    it('should atleast 1 div component', () => {
        expect(rootWithSelectedProduct.findAllByType('div').length>0).toBe(true);
    });

    // Test for numbers of Grid Item component in the Grid component with selected products.
    it('should atleast 1 Grid Item component', () => {
        expect(rootWithSelectedProduct.findAllByType(GridItem).length).toEqual(1);
    });
});

