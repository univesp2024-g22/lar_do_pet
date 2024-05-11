import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Signup } from "../pages/signup";
import { Pets } from "../pages/pets/pets";
import { Login } from "../pages/login";
import { Petsing } from "../pages/petsing/petsing";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/pets',
      element: <Pets />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/petsing',
      element: <Petsing />
    }, 
  ]
)