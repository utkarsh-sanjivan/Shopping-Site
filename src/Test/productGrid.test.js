import React from 'react';
import { create } from "react-test-renderer";
import ProductGrid from '../component/organisms/ProductGrid/index';

let wrapper;
const renderComponent = props => <ProductGrid {...props} />;
const baseProps = {
    productList: [],
    handleSelect: () => {}
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
});

describe('Testing Product Grid Component Rendering', () => {
  it('Product Grid Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
