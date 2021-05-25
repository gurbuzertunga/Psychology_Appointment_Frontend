import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Appointments from '../../containers/Appointments';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});
const setup = () => shallow(
  <Provider store={store}>
    <Appointments />
  </Provider>,
);

describe('Appointments Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  test('renders the Consultancies List Component', () => {
    const page = component.find('.appointmentList');
    expect(page).toMatchSnapshot();
  });
});
