import { createBrowserRouter, Navigate } from "react-router-dom";
import LivePage from "../pages/Live";
import ResultsPage from "../pages/Result";
import Layout from "../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LivePage /> },
      { path: "/results", element: <ResultsPage /> },
      {
        path: "*", // wildcard
        element: <Navigate to="/" replace />,
      },
    
    ],
  },
]);

export default router;
