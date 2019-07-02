import Dashboard from '@/views/dashboard';
import Diary from '@/views/diary';

export default [
  {
    path: '/',
    exact: true,
    title: 'Главная',
    component: Dashboard,
  },
  {
    path: '/diary',
    exact: false,
    title: 'Дневник',
    component: Diary,
  },
];
