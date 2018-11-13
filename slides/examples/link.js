import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/heroes">Heroes</Link>
      <Link to="/villains">Villains</Link>
    </nav>
  );
};
