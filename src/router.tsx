import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Tag from "./pages/Tag";
import GuestBook from "./pages/GuestBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Tag",
    element: <Tag />,
  },
  {
    path: "/GuestBook",
    element: <GuestBook />,
  },
]);

export default router;
