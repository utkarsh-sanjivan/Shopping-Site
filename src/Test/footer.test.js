import React from 'react';
import { create } from "react-test-renderer";
import Footer from '../component/organisms/Footer/index';

let wrapper;
let root;
const renderComponent = props => <Footer {...props} />;
const baseProps = {

};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
  root=wrapper.root;
});

// Unit Test Cases for testing Footer Component.
describe('Testing Footer Component Rendering', () => {
    // Test for matching the snapshot for Footer Component.
    it('Footer Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    // Test for numbers of div DOM element in the Footer component.
    it('should atleast 35 div component', () => {
        expect(root.findAllByType('div').length).toEqual(35);
    });
});
