import { RouterProvider } from 'react-router-dom';
import router from './router/index';
import './index.css';

export default function App() {
  return <RouterProvider router={router} />;
}
