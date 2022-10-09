import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import BookDetails from "./BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/books",
        loader: async () => {
          return fetch("https://api.itbook.store/1.0/new");
        },
        element: <Books></Books>,
      },
      { path: "/about", element: <About></About> },
      {
        path: "/book/:id",
        loader: async ({params}) => {
          return fetch(`https://api.itbook.store/1.0/books/${params.id}`);
        },
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);
