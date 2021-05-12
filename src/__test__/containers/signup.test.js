import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SignUp from '../../containers/SignUp';

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore({});
const setup = () => shallow(
  <Provider store={store}>
    <SignUp />
  </Provider>,
);

describe('SignUp Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  test('renders the Consultancies List Component', () => {
    const page = component.find('.consultancyList');
    expect(page).toMatchSnapshot();
  });
});