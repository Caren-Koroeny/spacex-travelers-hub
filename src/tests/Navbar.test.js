import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../components/Navbar';

describe('Navigation component', () => {
  it('should render Header component', () => {
    const { container } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,

    );

    expect(container).toMatchSnapshot();
  });
});
