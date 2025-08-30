import { Logo } from "@/shared/ui/Logo/Logo";
import s from "./Footer.module.scss";
import { AppText } from "@/shared/ui/AppText/AppText";
import { Socials } from "@/features/Socials/Socials";
interface FooterProps {
  className?: string;
}
export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`${s.footer} ${className ? className : ""}`}>
      <div className={s.top}>
        <Logo colorType="primary" />
        <div className={s.info}>
          <AppText text="+7-999-99-99" />
          <AppText text="Endlesscoding@yahoo.com" />
          <Socials />
        </div>
      </div>
      <div className={s.bottom}></div>
    </footer>
  );
};
