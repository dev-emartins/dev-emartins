import { createBrowserRouter } from "react-router-dom";
import App from "@pages";
import Home from "@pages/home";
import About from "@pages/about";
import Skills from "@pages/skills";
import Contact from "@pages/contact";
import ErrorPage from "@pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);