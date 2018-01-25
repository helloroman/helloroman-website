import React from 'react';
import IndexPage from './';

describe('Index page', () => {
  it('should render', () => {
    const wrapper = shallow(<IndexPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
