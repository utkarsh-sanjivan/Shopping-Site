import React from 'react';
import { create } from "react-test-renderer";
import Header from '../component/organisms/Header/index';

let wrapper;
let root;
const renderComponent = props => <Header {...props} />;
const baseProps = {
    totalProductCount: 0,
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
  root=wrapper.root;
});

// Unit Test Cases for testing Footer Component with 0 product count.
describe('Testing Header Component with 0 totalProductCount', () => {
    // Test for matching the snapshot for Header Component with 0 product count.
  it('Header Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

    // Test for numbers of div DOM element in the Header component with 0 product count.
    it('should atleast 4 div component', () => {
        expect(root.findAllByType('div').length).toEqual(4);
    });

    // Test for numbers of i DOM element in the Header component with 0 product count.
    it('should atleast 1 i component', () => {
        expect(root.findAllByType('i').length).toEqual(1);
    });
});

// Unit Test Cases for testing Footer Component with 10 product count.
describe('Testing Header Component with 10 totalProductCount', () => {
    wrapper = create(renderComponent({ totalProductCount: 10 }));
    root=wrapper.root;

    // Test for matching the snapshot for Header Component with 10 product count.
    it('Header Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    // Test for numbers of div DOM element in the Header component with 10 product count.
    it('should atleast 4 div component', () => {
        expect(root.findAllByType('div').length).toEqual(4);
    });

    // Test for numbers of i DOM element in the Header component with 10 product count.
    it('should atleast 1 i component', () => {
        expect(root.findAllByType('i').length).toEqual(1);
    });
});
