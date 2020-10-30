import React from 'react';
import { create } from "react-test-renderer";
import GridItem from '../component/molecules/GridItem/index';

let wrapper;
const renderComponent = props => <GridItem {...props} />;
const baseProps = {
    key: '1',
    image: '',
    name: 'Product1',
    description: 'lorem ipsum',
    price: '100.00',
    quantity: '10',
    handleSelect: () => {},
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
});

describe('Testing Grid Item Component Rendering', () => {
  it('Grid Item Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
