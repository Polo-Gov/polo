import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import NavBar from "./components/NavBar";
import "./index.css" 

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello worl!</div>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/dashboard",
    element: <Login />,
    errorElement: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);