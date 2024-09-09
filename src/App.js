import { RouterProvider } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.js";
import './App.css';
import router from './router/router';

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
