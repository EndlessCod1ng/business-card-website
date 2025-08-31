import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Socials.module.scss";
interface SocialsProps {
  className?: string;
}
const socialNetworks = ["g", "tw", "in"];
export const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={`${s.socials} ${className ? className : ""}`}>
      {socialNetworks.map((social) => {
        return (
          <AppLink
            key={social}
            className={`${s.socialItem}`}
          >
            {social}
          </AppLink>
        );
      })}
    </div>
  );
};
