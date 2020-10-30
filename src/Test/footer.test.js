import React from 'react';
import { create } from "react-test-renderer";
import Footer from '../component/organisms/Footer/index';

let wrapper;
const renderComponent = props => <Footer {...props} />;
const baseProps = {

};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
});

describe('Testing Footer Component Rendering', () => {
  it('Footer Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
