import React, {FC, FormEvent, useState} from 'react';
import FormGroup from '../../shared/components/formGroup/formGroup';
import {Movie} from '../../shared/models/movie.type';
import Button from '../../shared/components/button/Button';
import ModalWindow from '../../shared/components/modal/ModalWindow';
import useModal from '../../shared/hooks/useModal';
import {Formik, FormikProps} from 'formik';
import {movieFormValidator} from '../../shared/validation/movie-form.validation';

type fieldConfig = {
  label: string,
  placeholder?: string,
  readOnly?: boolean,
  type?: 'date' | 'select' | 'text' | 'number';
}

type ModalProps = {
  data?: Movie,
  type?: string;
  onConfirm?: (movie: Partial<Movie> | Movie) => void;
}

const fieldConfig: { [key: string]: fieldConfig } = {
  title: {placeholder: 'Title', type: 'text', label: 'title'},
  release_date: {placeholder: 'Select Date', type: 'date', label: 'release date'},
  poster_path: {placeholder: 'Movie URL here', type: 'text', label: 'movie url'},
  overview: {placeholder: 'Overview here', type: 'text', label: 'overview'},
  genres: {placeholder: 'Select genre', type: 'select', label: 'genre'},
  runtime: {placeholder: 'Runtime here', type: 'number', label: 'runtime'},
  vote_average: {placeholder: 'Rating', type: 'number', label: 'rating'},
};

const defaultMovie: Partial<Movie> = {
  title: '',
  release_date: '',
  poster_path: '',
  overview: '',
  genres: [],
  runtime: '' as any,
  vote_average: '' as any,
};

const CreateEditMovieModal: FC<ModalProps> = (props) => {
  const [movie] = useState(props.data || defaultMovie);
  const {isShowing, toggle} = useModal();

  const handleConfirm = (movie: Movie | Partial<Movie>) => {
    props.onConfirm({
      ...movie,
      runtime: Number(movie.runtime),
      vote_average: Number(movie.vote_average),
    });
    toggle();
  };

  // TODO: move form to separate component //
  return (
    <React.Fragment>
      <Button
        width='100'
        onClick={ toggle }>
        { props.data ? 'Edit' : 'Add Movie' }
      </Button>
      <ModalWindow
        isShowing={ isShowing }
        hide={ toggle }
        title={ props.data ? 'Edit Movie' : 'Add Movie' }>
        <Formik
          validate={ movieFormValidator }
          initialValues={ movie }
          onSubmit={ handleConfirm }>
          {(props: FormikProps<Movie>) => (
            <form onSubmit={(e: FormEvent) => {
              e.preventDefault();
              props.handleSubmit();
            }}>
              { Object.keys(fieldConfig).map((key: string) =>
                <FormGroup
                  key={ key }
                  name={ key }
                  label={ fieldConfig[key].label }
                  type={ fieldConfig[key].type }
                  placeholder={ fieldConfig[key].placeholder } />,
              )}
              <div className="modal-footer">
                <Button onClick={ toggle }> Close </Button>
                <Button
                  type='submit'
                  theme='success'> Confirm </Button>
              </div>
            </form>
          )}
        </Formik>
      </ModalWindow>
    </React.Fragment>
  );
};

export default CreateEditMovieModal;
