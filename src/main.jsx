import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Interface from "./components/Interface.jsx";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { AuthLayout } from "./components/index.js";
import {Login} from "./components/index.js";
import {Signup} from "./components/index.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Interface />,
},
{
    path: "/login",
    element: (
        <AuthLayout authentication={false}>
            <Login />
        </AuthLayout>
    ),
},
{
    path: "/signup",
    element: (
        <AuthLayout authentication={false}>
            <Signup />
        </AuthLayout>
    ),
},
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
