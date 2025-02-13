import { layout, route } from '@react-router/dev/routes';

export default [
  layout('components/layouts/mainLayout.jsx', [route('*', 'routes/home.jsx')]),
];
