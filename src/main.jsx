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
import RoomsDetails from "./pages/RoomsDetails";

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
        loader: async () => {
          const response = await fetch("http://localhost:5000/services");
          const data = await response.json();
          return data;
        },
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
        path: "/my_bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/rooms_details/:id",
        element: <RoomsDetails></RoomsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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