import { Nav } from "@/features/Nav/Nav";
import s from "./Header.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Socials } from "@/features/Socials/Socials";

interface HeaderProps {
  className?: string;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <Logo />
      <div className={s.navWrapper}>
        <Nav />
        <Socials />
      </div>
    </header>
  );
};
