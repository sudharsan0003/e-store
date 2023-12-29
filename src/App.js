import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import { productData } from './Api/Api';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Registration from './Pages/Registration';
import Profile from './Pages/Profile';
import { auth } from './firebase.config';
import { ToastContainer } from 'react-toastify';
import About from './Pages/About';
import FilterPage from './Pages/FilterPage';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/',
          element: <Home />,
          loader: productData,
        },
        {
          path: '/registration',
          element: <Registration />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/filter',
          element: <FilterPage />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        Draggable
        pauseOnHovertheme='light'
      />
      <div className='font-bodyFont bg-gray-100'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
};

export default App;
