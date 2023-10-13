import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: ()=>fetch("/photos.json")
  },
]);

export default Routers;
