import { createBrowserRouter } from "react-router-dom";
import LivePage from "../pages/Live";
import ResultsPage from "../pages/Result";

const router = createBrowserRouter([
  { path: "/live", element: <LivePage /> },
  { path: "/results", element: <ResultsPage /> }
]);

export default router;
