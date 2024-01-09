import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import './styles/global.scss'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Home from './Pages/Home/Home.jsx';
import { Navbar } from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import { Footer } from './Components/Footer/Footer';




const queryClient = new QueryClient();
const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        // {
        //   path: "/users",
        //   element: <Users />,
        // },
        // {
        //   path: "/products",
        //   element: <Products />,
        // },
        // {
        //   path: "/users/:id",
        //   element: <User />,
        // },
        // {
        //   path: "/products/:id",
        //   element: <Product />,
        // },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);



  return <RouterProvider router={router} />;
}


export default App
