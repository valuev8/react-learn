import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import MovieCard from '../components/movieCard/movieCard';
import {Movie} from '../shared/models/movie.type';

export default {
  title: 'MovieCard',
  component: MovieCard,
  decorators: [(Story) => <div style={{margin: '0 30%'}}><Story/></div>],
} as Meta;

const Template: Story<Movie> = (movie: Movie) => <MovieCard movie={movie} />;
export const card = Template.bind({});
card.args = {
  id: 12,
  title: 'Test',
  tagline: 'interesting movie',
  vote_average: 6,
  vote_count: 6,
  release_date: '2020-01-03',
  poster_path: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRK8b_R0E8iRFY1DmlR3m9pF6YXqjaOQeIFIQInrfrG0rW1X9o6',
  overview: 'movie overview',
  budget: 123000,
  revenue: 5000,
  genres: ['action'],
  runtime: 12,
};
