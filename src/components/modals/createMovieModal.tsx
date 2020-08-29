import React from 'react';
import FormGroup from '../../shared/components/formGroup/formGroup';


const formData = [
  { label: 'title', id: 'movieTitle', placeholder: 'Title' },
  { label: 'release date', id: 'date', placeholder: 'Select Date'},
  { label: 'movie url', id: 'url', placeholder: 'Movie URL here'},
  { label: 'genre', id: 'genre' },
  { label: 'overview', id: 'overview', placeholder: 'Overview here'},
  { label: 'runtime', id: 'runtime', placeholder: 'Runtime here'},
];

const CreateMovieModal = () => (
  <form>
    { formData.map(({ label, id , placeholder}) => {
        return <FormGroup label={label} id={id} key={id} placeholder={placeholder}/>
      })
    }
  </form>
);

export default CreateMovieModal;
