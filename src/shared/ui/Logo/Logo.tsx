import { AppLink } from "../AppLink/AppLink";
import s from "./Logo.module.scss";
interface LogoProps {
  className?: string;
  link?: boolean;
}
export const Logo = ({ className, link = true }: LogoProps) => {
  return (
    <>
      {link ? (
        <AppLink
          colorType="accentedGradient"
          className={`${s.logo} ${className ? className : ""}`}
        >
          <div className={s.top}>Code</div>
          <div className={s.bottom}>Liberty</div>
        </AppLink>
      ) : (
        <div className={`${s.logo} ${className ? className : ""}`}>V914</div>
      )}
    </>
  );
};
