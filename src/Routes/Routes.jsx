import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/MainLayout";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
