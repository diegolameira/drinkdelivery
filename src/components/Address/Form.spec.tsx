/* eslint-env jest */

import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Theme } from '@/Theme';

import { AddressForm } from './Form';

Enzyme.configure({ adapter: new Adapter() });

describe(`AddressForm`, () => {
  const theme = new Theme();
  const component = renderer.create(<AddressForm theme={theme} />);
  const wrapper = shallow(<AddressForm theme={theme} />);
  let tree: ReactTestRendererJSON = component.toJSON();

  beforeEach(() => {});
  it('should render as expected', () => {
    const props = {
      label: 'Label',
      placeholder: 'placeholder'
    };
    expect(tree).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();

    tree.props = props;
    wrapper.setProps(props);

    expect(tree).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });
});
