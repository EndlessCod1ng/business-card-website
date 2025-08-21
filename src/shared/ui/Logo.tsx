import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  link?: boolean;
}
export const Logo = ({ className, link = true }: LogoProps) => {
  return (
    <>
      {link ? (
        <Link
          className={`${className ? className : ""}`}
          to="/"
        >
          V914
        </Link>
      ) : (
        <div className={`${className ? className : ""}`}>V914</div>
      )}
    </>
  );
};
