import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';
import Rockets from '../components/Rockets';

describe('Display Rockets Components', () => {
  it('Should rockets Mission items', () => {
    const container = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
