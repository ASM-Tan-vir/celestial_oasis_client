import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Layout from "./layout/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyBookings from "./pages/MyBookings";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/sign_in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign_up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/my_booKings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
