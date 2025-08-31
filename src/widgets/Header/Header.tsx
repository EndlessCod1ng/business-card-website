import { Nav } from "@/features/Nav/Nav";
import s from "./Header.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Socials } from "@/features/Socials/Socials";
import { Container } from "@/shared/ui/Container/Container";

interface HeaderProps {
  className?: string;
  changeTheme: () => void;
}
export const Header = ({ className, changeTheme }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <Container className={s.container}>
        <Logo />
        <button onClick={() => changeTheme()}>changeTheme</button>
        <div className={s.navWrapper}>
          <Nav />
          <Socials />
        </div>
      </Container>
    </header>
  );
};
