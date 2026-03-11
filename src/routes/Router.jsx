import { createBrowserRouter } from "react-router-dom";
import { App, About, Contact, ErrorPage, Home, Skills } from "@pages";

export const Router = createBrowserRouter([
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
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);