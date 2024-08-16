import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

export function App() {
  return (<div id="Alex">
     <RouterProvider router={router} />
  </div>
   
  );  
}

export default App;
