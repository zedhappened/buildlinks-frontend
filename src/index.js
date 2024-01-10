import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import router from './routes/routes';
import "./styles.css";
import Spinner from './spinner';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);

