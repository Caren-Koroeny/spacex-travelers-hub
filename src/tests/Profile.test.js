import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';
import Profile from '../components/Profile';

describe('Display profile components', () => {
  it('Should display Profile items', () => {
    const container = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
