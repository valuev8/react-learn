import axios from 'axios';
import {SERVER_API_URL} from '../shared/constants/constants';

axios.interceptors.response.use((response) => response.data);

export default function callApi(endpoint: string, method = 'get', body?: any, params?: any) {
  return body ?
    axios[method](`${SERVER_API_URL}/${endpoint}`, body) :
    axios[method](`${SERVER_API_URL}/${endpoint}`, {params});
}
