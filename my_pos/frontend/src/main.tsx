import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";

import AdminLayout from "./layouts/AdminLayout.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import Home from "./pages/Home.tsx";

//authlayout
const Login = lazy(() => import("./pages/Login.tsx"));
const Signup = lazy(() => import("./pages/Signup.tsx"));

//adminlayout
const Admin = lazy(() => import("./pages/Admin.tsx"));
const AllProduct = lazy(() => import("./pages/AllProduct.tsx"));
const Avaliable_Product = lazy(() => import("./pages/Avaliable_Product.tsx"));
const Market = lazy(() => import("./pages/Market.tsx"));
const Stock = lazy(() => import("./pages/Stock.tsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
    ],
  },

  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/all",
        element: <AllProduct />,
      },
      {
        path: "/avalable",
        element: <Avaliable_Product />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/stock",
        element: <Stock />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </StrictMode>
);
