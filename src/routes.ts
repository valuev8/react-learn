import Homepage from './features/homepage/Homepage';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage
  },
  {
    path: '/movies',
    component: Homepage
  }
];

export default routes;
