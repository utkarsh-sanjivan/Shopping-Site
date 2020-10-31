import React from 'react';
import { create } from "react-test-renderer";
import GridItem from '../component/molecules/GridItem/index';

let wrapper;
let root;
const renderComponent = props => <GridItem {...props} />;
const baseProps = {
    key: '1',
    image: '',
    name: 'Product1',
    description: 'lorem ipsum',
    price: '100.00',
    quantity: '0',
    handleSelect: () => {},
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
  root=wrapper.root;
});

// Unit Test Cases for testing Grid Item Component with 0 quantity.
describe('Testing Grid Item Component with 0 quantity', () => {
    // Test for matching the snapshot when there is 0 quantity.
    it('Grid Item Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    // Test for numbers of div DOM element in the Grid Item component when there is 0 quantity.
    it('should atleast 5 div component', () => {
        expect(root.findAllByType('div').length).toEqual(5);
    });

    // Test for numbers of img DOM element in the Grid Item component when there is 0 quantity.
    it('should atleast 1 img component', () => {
        expect(root.findAllByType('img').length).toEqual(1);
    });
});

describe('Testing Grid Item Component with 4 quantity', () => {
    // Test for matching the snapshot when there is 4 quantity.
  it('Grid Item Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

    // Test for numbers of div DOM element in the Grid Item component when there is 4 quantity.
    it('should atleast 5 div component', () => {
        expect(root.findAllByType('div').length).toEqual(5);
    });

    // Test for numbers of div DOM element in the Grid Item component when there is 4 quantity.
    it('should atleast 1 img component', () => {
        expect(root.findAllByType('img').length).toEqual(1);
    });
});
