import { createBrowserRouter } from "react-router";
import About from "../components/About";
import Body from "../components/Body";
import App from "../App";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

const appRouter = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path:"/",
        Component:Body
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path:"/restaurant/:title",
        Component: Menu
      }
    ],
    errorElement: <ErrorPage/>
  },
]);

export default appRouter;
