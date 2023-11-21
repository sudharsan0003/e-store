import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Link,
  Route,
  Routes,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import { productData } from './Api/Api';
import Signin from './Pages/Signin';
import Cart from './Pages/Cart';
import Registration from './Pages/Registration';
import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        Draggable
        pauseOnHovertheme='colored'
      />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} loader={productData}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/registration/:id' element={<Registration />} />
        </Route>
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
