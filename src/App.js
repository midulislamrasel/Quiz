import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './leyout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Order from './components/Order/Order';
import Quiz from './components/Quiz/Quiz';
import Footer from './components/Footer/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '',
          element:<Home></Home>
        },
        {
          path: 'home',
          element:<Home></Home>
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/order',
          element:<Order></Order>
        },
        {
          path: '/quiz',
          element:<Quiz></Quiz>
        },
        {
          path: '/footer',
          element:<Footer></Footer>
        }
      ],
    },
    {
      path: '*',
      element:<div>Page is not found</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}>

      </RouterProvider>
    </div>
  );
}

export default App;
