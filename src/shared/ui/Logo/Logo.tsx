import { AppLink } from "../AppLink/AppLink";
import s from "./Logo.module.scss";
type ColorType = "primary" | "accentedGradient";
interface LogoProps {
  className?: string;
  link?: boolean;
  colorType?: ColorType;
}
export const Logo = ({
  className,
  link = true,
  colorType = "accentedGradient",
}: LogoProps) => {
  return (
    <>
      {link ? (
        <AppLink
          colorType={colorType}
          className={`${s.logo} ${className ? className : ""}`}
        >
          <div className={s.top}>
            {"{ "}
            {"Code"}
            {" }"}
          </div>
          <div className={s.bottom}>Liberty</div>
        </AppLink>
      ) : (
        <div className={`${s.logo} ${className ? className : ""}`}>V914</div>
      )}
    </>
  );
};
