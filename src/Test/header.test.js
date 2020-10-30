import React from 'react';
import { create } from "react-test-renderer";
import Header from '../component/organisms/Header/index';

let wrapper;
const renderComponent = props => <Header {...props} />;
const baseProps = {
    totalProductCount: 10,
};

beforeEach(() => {
  wrapper = create(renderComponent(baseProps));
});

describe('Testing Header Component Rendering', () => {
  it('Header Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
