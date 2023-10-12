import "./App.css";
import ResponsiveAppBar from "./pages/header/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Welcome from "./pages/welcome/Welcome";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import { RootLayout } from "./pages/Root";
import { Error } from "./pages/errorPage/Error";
import DropDown from "./pages/custominput/DropDown";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      // { index: true, element: <DropDown /> },
      { path: "/", element: <Welcome /> },
      { path: "/Products", element: <Products /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
