import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Link,
  Route,
  Routes,
  RouterProvider,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import { productData } from './Api/Api';
import Signin from './Pages/Signin';

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
        <Route path='/signin' element={<Signin />}></Route>
      </Route>
    )
  );
  return (
    <div className='font-bodyFont bg-gray-100'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
