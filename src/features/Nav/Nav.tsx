import { AppLink } from "@/shared/ui/AppLink/AppLink";

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
      <ul>
        {links.map((l) => {
          return (
            <li key={l.link}>
              <AppLink
                className={s.link}
                to={l.link}
              >
                {l.name}
              </AppLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
