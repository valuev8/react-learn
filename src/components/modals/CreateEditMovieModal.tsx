import React, { FC, useEffect, useState } from 'react';
import FormGroup from '../../shared/components/formGroup/formGroup';
import { Movie } from '../../shared/models/movie.type';
import Button from '../../shared/components/button/Button';
import ModalWindow from '../../shared/components/modal/ModalWindow';
import useModal from '../../shared/hooks/useModal';

type formData = {
  label: string,
  id: string,
  placeholder?: string,
  readOnly?: boolean,
  value?: any,
  type?: "date" | "select" | "text" | "number";
}

type ModalProps = {
  data?: Movie,
  type?: string;
  onConfirm?: (movie: Partial<Movie> | Movie) => void;
}

const formData: formData[] = [
  { label: 'title', id: 'title', placeholder: 'Title' },
  { label: 'release date', id: 'release_date', placeholder: 'Select Date', type: 'date'},
  { label: 'movie url', id: 'poster_path', placeholder: 'Movie URL here'},
  { label: 'genre', id: 'genres', type: 'select' },
  { label: 'overview', id: 'overview', placeholder: 'Overview here'},
  { label: 'runtime', id: 'runtime', type: 'number', placeholder: 'Runtime here'},
  { label: 'Rating', id: 'vote_average', type: 'number', placeholder: 'Rating'},
];

const defaultMovie: Partial<Movie> = {
  title: '',
  release_date: '',
  poster_path: '',
  overview: '',
  genres: [],
  runtime: '' as any,
  vote_average: '' as any,
}

const CreateEditMovieModal: FC<ModalProps> = (props) => {
  const [ movie, setMovie ] = useState(props.data || defaultMovie);
  const [ formFieldConfig, setFormFieldConfig ] = useState(formData);
  const { isShowing, toggle } = useModal();

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

  const handleChange = (e: { id: string, value: string | string[] | number }) => {
    setMovie({ ...movie, [e.id]: e.value });
  };

  const handleConfirm = () => {
    props.onConfirm({
      ...movie,
      runtime: Number(movie.runtime),
      vote_average: Number(movie.vote_average),
    });
    toggle();
  }

  useEffect(setFormConfig, [props.type]);

  return (
    <React.Fragment>
      <Button
        width='100'
        onClick={toggle}>
        { props.type === 'edit' ? 'Edit' : 'Add Movie' }
      </Button>
      <ModalWindow isShowing={isShowing} hide={toggle} title='Edit Movie'>
        <form>
          {
            formFieldConfig.map((formField) => {
              const { label, id , placeholder, type, readOnly = false } = formField;
              return <FormGroup
                key={id}
                value={movie[id]}
                label={label}
                id={id}
                type={type}
                readOnly={readOnly}
                placeholder={placeholder}
                onChange={handleChange}/>
            })
          }
        </form>
        <div className="modal-footer">
          <Button onClick={ toggle }> Close </Button>
          <Button onClick={ handleConfirm } theme='success'> Confirm </Button>
        </div>
      </ModalWindow>
    </React.Fragment>
  )
}

export default CreateEditMovieModal;
