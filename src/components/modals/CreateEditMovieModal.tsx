import React, { FC, useEffect, useState } from 'react';
import FormGroup from '../../shared/components/formGroup/formGroup';
import { Movie } from '../../shared/models/movie.type';

type formData = {
  label: string,
  id: string,
  placeholder?: string,
  readOnly?: boolean,
  value?: any,
}

type ModalProps = {
  data?: Movie,
  type?: string;
}

const formData: formData[] = [
  { label: 'title', id: 'title', placeholder: 'Title' },
  { label: 'release date', id: 'release_date', placeholder: 'Select Date'},
  { label: 'movie url', id: 'poster_path', placeholder: 'Movie URL here'},
  { label: 'genre', id: 'genres' },
  { label: 'overview', id: 'overview', placeholder: 'Overview here'},
  { label: 'runtime', id: 'runtime', placeholder: 'Runtime here'},
];

const defaultMovie: Partial<Movie> = {
  title: '',
  release_date: '',
  poster_path: '',
  overview: '',
  genres: [],
  runtime: '' as any,
}

const CreateEditMovieModal: FC<ModalProps> = (props) => {
  const [ movie, setMovie ] = useState(props.data || defaultMovie);
  const [ formFieldConfig, setFormFieldConfig ] = useState(formData);

  const setFormConfig = () => {
    if (props.type === 'edit') {
      const movieIdItem = {
        label: 'Movie Id',
        id: 'id',
        readOnly: true,
      }

      setFormFieldConfig([ movieIdItem, ...formFieldConfig]);
    }
  };

  const handleChange = (e: { id: string, value: string | number }) => {
    setMovie({ ...movie, [e.id]: e.value })
  };

  useEffect(setFormConfig, [props.type]);

  return (
      <form>
      {
        formFieldConfig.map(({ label, id , placeholder, readOnly = false}) => {
          return <FormGroup
            key={id}
            value={movie[id]}
            label={label}
            id={id}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={handleChange}/>
        })
      }
    </form>
  )
}

export default CreateEditMovieModal;
