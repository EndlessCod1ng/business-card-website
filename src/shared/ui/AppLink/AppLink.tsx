import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import s from "./AppLink.module.scss";

type ColorType = "primary" | "secondary" | "accented" | "accentedGradient";

interface AppLinkProps extends Omit<LinkProps, "to"> {
  children: ReactNode;
  to?: string;
  className?: string;
  colorType?: ColorType;
}
export const AppLink = ({
  children,
  to = "/",
  colorType = "primary",
  className,
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={`${s.appLink} ${s[colorType]} ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
};
