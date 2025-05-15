import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import LoginScreen from './Screens/LoginScreen.jsx';
import RegisterScreen from './Screens/RegisterScreen.jsx';
import HomeScreen from './Screens/HomeScreen.jsx';
import BlogDetails from './Screens/BlogDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeScreen/>,
  },
  {
    path: "/login",
    element:<LoginScreen/>,
  },
  {
    path: "/register",
    element:<RegisterScreen/>,
  },

  {
    path: "/blog",
    element:<BlogDetails/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
