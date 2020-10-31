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

describe('Testing Grid Item Component with 0 quantity', () => {
  it('Grid Item Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

    it('should atleast 5 div component', () => {
        expect(root.findAllByType('div').length===5);
    });

    it('should atleast 1 img component', () => {
        expect(root.findAllByType('img').length===1);
    });
});

describe('Testing Grid Item Component with 4 quantity', () => {
  it('Grid Item Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

    it('should atleast 6 div component', () => {
        expect(root.findAllByType('div').length===6);
    });

    it('should atleast 1 img component', () => {
        expect(root.findAllByType('img').length===1);
    });
});
