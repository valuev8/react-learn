const API_URLS = {
  dev: 'http://localhost:4000',
  prod: 'http://localhost:4000',
};

export const SERVER_API_URL = process.env.NODE_ENV === 'development'
  ? API_URLS.dev
  : API_URLS.prod;
