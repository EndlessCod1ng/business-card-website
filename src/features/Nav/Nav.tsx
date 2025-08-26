import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className={`${className ? className : ""} ${s.nav}`}>
      <ul className={`${s.list} ${isOpen ? s.isOpen : ""}`}>
        {links.map((l) => {
          return (
            <li
              key={l.link}
              onClick={() => setIsOpen((prev) => !prev)}
            >
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
      <div
        className={`${s.burgerWrapper} ${isOpen ? s.isOpen : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={s.burger}></div>
      </div>
    </nav>
  );
};
