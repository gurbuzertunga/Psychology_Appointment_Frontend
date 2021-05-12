import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Consultancies from '../../containers/Consultancies';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});
const setup = () => shallow(
  <Provider store={store}>
    <Consultancies />
  </Provider>,
);

describe('Consultancies Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  test('renders the Consultancies List Component', () => {
    const page = component.find('.consultanciesList');
    expect(page).toMatchSnapshot();
  });
});
