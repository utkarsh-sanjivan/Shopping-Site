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

describe('Testing Header Component with 0 totalProductCount', () => {
  it('Header Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

    it('should atleast 4 div component', () => {
        expect(root.findAllByType('div').length===4);
    });

    it('should atleast 1 i component', () => {
        expect(root.findAllByType('i').length===1);
    });
});

describe('Testing Header Component with totalProductCount', () => {
    wrapper = create(renderComponent({ totalProductCount: 10 }));
    root=wrapper.root;
  it('Header Component should render properly', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

    it('should atleast 5 div component', () => {
        expect(root.findAllByType('div').length===5);
    });

    it('should atleast 1 i component', () => {
        expect(root.findAllByType('i').length===1);
    });
});
