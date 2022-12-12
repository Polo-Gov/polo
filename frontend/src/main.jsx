import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import BuscarImoveis from "./pages/buscarImoveis";
import CadastrarImoveis from "./pages/cadastrarImoveis";
import LoginMeta from "./pages/loginMetamask"
import "./index.css";
import EditarContrato from "./pages/editarContrato";
import CadastrarContratos from "./pages/CadastrarContratos";
import MetamaskProvider from "./context/metamaskContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/",
    element: <MetamaskProvider><LoginMeta /></MetamaskProvider> ,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/imóveis",
    element: <MetamaskProvider><BuscarImoveis /></MetamaskProvider> ,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/cadastrarImóveis",
    element: <MetamaskProvider><CadastrarImoveis /></MetamaskProvider> ,
    errorElement: <NotFound></NotFound>,
  },
  {
    path:"/cadastrarContratos",
    element:<MetamaskProvider><CadastrarContratos/></MetamaskProvider> ,
    errorElement: <NotFound></NotFound>
  },
  {
    path:"/editarContrato/:id",
    element:<MetamaskProvider> <EditarContrato/></MetamaskProvider>,
    errorElement: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
