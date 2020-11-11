import {Movie} from '../models/movie.type';

enum requiredFields {
  title = 'title',
  runtime = 'runtime',
  poster_path = 'poster_path',
  genres = 'genres',
  overview = 'overview',
}

enum numericFields {
  budget = 'Budget',
  revenue = 'Revenue',
  runtime = 'Runtime',
}

export const movieFormValidator = (values: Movie) => {
  const errors: any = {};

  Object.values(requiredFields).forEach((key: string) => {
    if (!values[key] || key === 'genres' && !values[key].length) {
      errors[key] = 'Field is required!';
    }
  });

  Object.keys(numericFields).forEach((key: string) => {
    if (values[key] < 0) {
      errors[key] = `${numericFields[key]} can't be less than 0`;
    }
  });

  if (!values.poster_path.match(/^http.*\.(jpeg|jpg|gif|png)$/)) {
    errors.poster_path = 'Invalid URL address';
  }

  return errors;
};
