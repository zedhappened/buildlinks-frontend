import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import router from './routes';
import Spinner from './pages/spinner';
import store from './app/store';
import { Provider } from 'react-redux'

import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    </React.Suspense>
  </React.StrictMode>
);

