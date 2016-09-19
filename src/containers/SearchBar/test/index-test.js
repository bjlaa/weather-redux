import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
// import sinon from 'sinon';

import SearchBar from '../';

describe('<SearchBar/>', () => {
  it('should render all child elements', () => {
    const wrapper = shallow(<SearchBar />);
    const form = wrapper.find('form');
    const input = form. find('input');
    const span = form.find('span');
    const button = span.find('button');

    expect(form).to.have.length(1);
    expect(input).to.have.length(1);
    expect(span).to.have.length(1);
    expect(button).to.have.length(1);
  });

  it('should update the input value onChange', () => {
    const wrapper = mount(<SearchBar />);
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'Test'}});

    expect(input.get(0).value).to.equal('Test');
  });
});
