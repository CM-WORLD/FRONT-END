import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Action, createBrowserHistory } from "history";

import { pageRoutes } from "./routers/routes";
import Layout from "@components/global/Layout";
import NotFound from "@views/error/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: pageRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
