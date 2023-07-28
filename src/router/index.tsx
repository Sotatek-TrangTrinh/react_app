import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import SignUp from '@/pages/SignUp';
import WorkflowDesign from '@/pages/WorkflowDesign';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/flows/abc',
    element: <WorkflowDesign />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
