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
import Book from "./components/Book";
import ErrorPAge from "./components/ErrorPAge";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPAge></ErrorPAge>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const response = await fetch(
            "https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.app/services"
          );
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: async () => {
          const response = await fetch(
            "https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.apps/ervices"
          );
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
        // loader: async () => {
        //   const response = await fetch("https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.app/bookings");
        //   const data = await response.json();
        //   return data;
        // },
      },
      {
        path: "/rooms_details/:id",
        element: <RoomsDetails></RoomsDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.appservices/${params.id}`
          ),
      },
      {
        path: "/book/:id",
        element: <Book></Book>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.app${params.id}`
          ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
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
