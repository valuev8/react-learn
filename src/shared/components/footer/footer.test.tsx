import { render } from '@testing-library/react';
import React from 'react';
import Footer from './footer';

describe('Footer', () => {
  it('Should render', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  })
})
