import { Link } from "react-router-dom";
import { Logo } from "@/shared/ui/Logo";
import s from "./Nav.module.scss";

interface NavProps {
  className?: string;
}

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Teach Stack", link: "/stack" },
  { name: "Projects", link: "/projects" },
  { name: "Contacts", link: "/contacts" },
];
export const Nav = ({ className }: NavProps) => {
  return (
    <nav className={`${className ? className : ""} ${s.nav}`}>
      <Logo />
      <ul>
        {links.map((l) => {
          return (
            <li key={l.link}>
              <Link to={l.link}>{l.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
