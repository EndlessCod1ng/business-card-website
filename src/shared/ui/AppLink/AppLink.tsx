import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import s from "./AppLink.module.scss";
interface AppLinkProps extends Omit<LinkProps, "to"> {
  children: ReactNode;
  to?: string;
  className?: string;
}
export const AppLink = ({ children, to = "/", className }: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={`${s.appLink} ${className ? className : ""}`}
    >
      {children}
    </Link>
  );
};
