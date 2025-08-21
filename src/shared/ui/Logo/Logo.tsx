import { AppLink } from "../AppLink/AppLink";

interface LogoProps {
  className?: string;
  link?: boolean;
}
export const Logo = ({ className, link = true }: LogoProps) => {
  return (
    <>
      {link ? (
        <AppLink className={`${className ? className : ""}`}>V914</AppLink>
      ) : (
        <div className={`${className ? className : ""}`}>V914</div>
      )}
    </>
  );
};
