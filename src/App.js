import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Routes,
  RouterProvider,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import { productData } from './Api/Api';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} loader={productData}></Route>
      </Route>
    )
  );
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
