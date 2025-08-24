import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import s from "./AppLink.module.scss";

type ColorType = "primary" | "secondary" | "accented" | "accentedGradient";
type Variant = "clear" | "decorated";

interface AppLinkProps extends Omit<LinkProps, "to"> {
  children: ReactNode;
  to?: string;
  className?: string;
  colorType?: ColorType;
  variant?: Variant;
}
export const AppLink = ({
  children,
  to = "/",
  colorType = "primary",
  variant = "clear",
  className,
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={`${s.appLink} ${s[colorType]} ${s[variant]} ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
};
