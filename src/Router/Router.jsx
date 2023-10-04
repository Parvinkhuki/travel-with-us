import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Componet/Root';
import News from './Componet/News';
import Home from './Componet/Home';


    const router = createBrowserRouter([
        {
          path: "/",
          element:<Root></Root>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: "/news",
                element:<News></News>
          }]
        },
      ]);
   

export default router;