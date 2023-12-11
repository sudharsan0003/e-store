import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'slick-carousel/slick/slick.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import firebaseConfig from './firebase.config';
import { UserProvider } from './context/userContext';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </UserProvider>
  </React.StrictMode>
);
