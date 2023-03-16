import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';
import Mission from '../components/Mission';

describe('Display Mission Components', () => {
  it('Should display Mission items', () => {
    const container = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
