import { Link } from "react-router-dom";

interface NavProps {
  className?: string;
}
export const Nav = ({ className }: NavProps) => {
  return (
    <nav className={`${className ? className : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/not-found-page">NotFound</Link>
        </li>
      </ul>
    </nav>
  );
};
