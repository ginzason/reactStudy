import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router'
import {
  RouterProvider,
} from "react-router-dom";
import Navigator from './components/Navigator'
import Footer from './components/Footer'
import './App.css'

const height = {
  height: '100dv'
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigator></Navigator>
    <RouterProvider router={router} style={height} />
    <Footer></Footer>
  </React.StrictMode>
);
