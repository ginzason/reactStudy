import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
]);

export default router;
