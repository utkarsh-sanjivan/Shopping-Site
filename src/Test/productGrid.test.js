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

describe('Testing Product Grid Component Rendering with no selected product', () => {
  it('Product Grid Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

    it('should atleast 1 div component', () => {
        expect(root.findAllByType('div').length===1);
    });

    it('should no Grid Item component', () => {
        expect(root.findAllByType(GridItem).length===0);
    });
});

describe('Testing Product Grid Component Rendering with selected product', () => {
    wrapper = create(renderComponent({ 
        ...baseProps,
        cartItem: [{
        "id": 1,
        "name": "Product 1",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "price": "100.00",
        "Quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
        },]
    }));
    root=wrapper.root;

    it('Product Grid Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should atleast 1 div component', () => {
        expect(root.findAllByType('div').length===1);
    });

    it('should atleast 1 Grid Item component', () => {
        expect(root.findAllByType(GridItem).length===1);
    });
});

