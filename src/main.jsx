import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import RootRoute from "./routes/RootRoute.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ConferencesRoute from "./routes/ConferencesRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute/>,
  },
  {
    path: "/events",
    element: <ConferencesRoute/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
