
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import { Dashboard } from './Dashboard'
import { Home } from './Home'
import { Login } from './Login'
import { Profile } from './Profile'
import { Signup } from './Signup'

const router = createBrowserRouter([
  
  {
    path: "/login",  element: <Login />,
  },
  {
    path: "/", element: <Home />,
  },
  {
    path: "/signup", element: <Signup />,
  },
  {
    path: "/dashboard", element: <Dashboard />,
  },
  {
    path: "/:idPayment", element: <Profile />,
  },
]);

export const Router = () => 
<RouterProvider router={router} />
