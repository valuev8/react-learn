import React from 'react';
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

// TODO: 1) rework modals
const CreateEditMovieModal = ({ data, type }: ModalProps) => {
  let formData: formData[] = [
    { label: 'title', id: 'movieTitle', placeholder: 'Title' },
    { label: 'release date', id: 'release_date', placeholder: 'Select Date'},
    { label: 'movie url', id: 'poster_path', placeholder: 'Movie URL here'},
    { label: 'genre', id: 'genres' },
    { label: 'overview', id: 'overview', placeholder: 'Overview here'},
    { label: 'runtime', id: 'runtime', placeholder: 'Runtime here'},
  ];

  if (type === 'edit') {
    const movieIdItem = {
      label: 'Movie Id',
      id: 'id',
      readOnly: true,
      value: data.id
    }

    const movieKeysObject: { [ key: string ]: any } = { ...data };

    const editFormData = formData.map((item: formData) => {
      return {...item, value: movieKeysObject[item.id]};
    })

    formData = [ movieIdItem, ...editFormData]
  }

  const handleChange = (e: any) => console.log(e.target, e.target.value, e.target.name);
  return (
    <form>
      { formData.map(({ label, id , placeholder, value, readOnly}) => {
          return <FormGroup
            key={id}
            value={value}
            label={label}
            id={id}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={handleChange}/>
        })
      }
    </form>)
};

export default CreateEditMovieModal;
