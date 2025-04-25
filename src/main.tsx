import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="flex justify-center items-center ">
    <div className="w-full max-w-7xl px-4 mx-auto">
      <RouterProvider router={router} />
    </div>
  </div>
);
