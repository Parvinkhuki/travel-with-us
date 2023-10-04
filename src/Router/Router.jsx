import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


    const router = createBrowserRouter([
        {
          path: "/",
          element: <div className='font-Mono'>Hello world!</div>,
        },
      ]);
   

export default router;