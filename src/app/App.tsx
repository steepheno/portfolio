import { RouterProvider } from 'react-router-dom';
import './style/App.scss';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
