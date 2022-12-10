import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import BuscarImoveis from "./pages/buscarImoveis";
import "./index.css" 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path:"/imóveis",
    element:<BuscarImoveis/>,
    errorElement: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);