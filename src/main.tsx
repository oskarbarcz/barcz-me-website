import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import RootRoute from "./routes/RootRoute.tsx";
import I18nProvider from "./i18n/I18nProvider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <RouterProvider router={router}/>
    </I18nProvider>
  </React.StrictMode>
);
