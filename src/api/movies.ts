import axios from 'axios';
import {config} from './config';

export const getMovies = () => axios.get(`movies`, config())
    .then((res) => res.data);
