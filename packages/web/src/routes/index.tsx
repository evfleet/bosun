import { createBrowserRouter } from "react-router-dom";
import Docs from "./Docs";
import Landing from "./Landing";
import Pricing from "./Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

export default router;
