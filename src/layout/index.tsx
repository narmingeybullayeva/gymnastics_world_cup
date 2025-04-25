import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useResultsStore } from "../store/useResultsStore";

const Layout = () => {
  const { fetchResults } = useResultsStore();

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
