import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/heroes">Heroes</Link>
      </li>
      <li>
        <Link to="/villains">Villains</Link>
      </li>
    </ul>
  );
};
