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

describe('Testing Footer Component Rendering', () => {
    it('Footer Component should render properly', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should atleast 35 div component', () => {
        expect(root.findAllByType('div').length===35);
    });
});
