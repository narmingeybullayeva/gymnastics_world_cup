import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-7 p-2.5 bg-emerald-400 p">
      <Link to="results">Results</Link>
      <Link to="/">Live</Link>
    </nav>
  );
};

export default Navbar;
