import React from 'react';
import CreateEditMovieModal from './CreateEditMovieModal';
import { render } from '@testing-library/react';
import { Movie } from '../../shared/models/movie.type';

const mockData = {
  title: 'test'
} as Movie;

describe('CreateEditMovieModal', () => {
  it('Should render', () => {
    const { asFragment } = render(<CreateEditMovieModal type='create' onConfirm={() => {}}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should have Edit titles if data is provided', () => {
    const { getByText } = render(<CreateEditMovieModal data={mockData} type='create' onConfirm={() => {}}/>);
    const element = getByText(/edit/i);

    expect(element).toBeTruthy();
  });

  it('Should have Add Movie titles if data is provided', () => {
    const { getByText } = render(<CreateEditMovieModal type='create' onConfirm={() => {}}/>);
    const element = getByText(/add movie/i);

    expect(element).toBeTruthy();
  });
});
