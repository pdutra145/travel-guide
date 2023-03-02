import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as locationInfoLoader } from "../pages/Home";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
    path: "/travel-guide",
    loader: locationInfoLoader,
  },
]);

function AppRouter() {
  // const regions = [
  //   "/travel-guide/africa",
  //   "/travel-guide/americas",
  //   "/travel-guide/antarctic",
  //   "/travel-guide/antarctic-ocean",
  //   "/travel-guide/asia",
  //   "/travel-guide/europe",
  //   "/travel-guide/oceania",
  //   "/travel-guide/polar",
  // ];

  return <RouterProvider router={router} />;
}

export default AppRouter;
