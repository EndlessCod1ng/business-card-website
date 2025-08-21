import { Nav } from "@/features/Nav/Nav";
import s from "./Header.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";

interface HeaderProps {
  className?: string;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <Logo />
      <Nav />
    </header>
  );
};
