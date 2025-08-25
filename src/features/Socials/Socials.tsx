import s from "./Socials.module.scss";
interface SocialsProps {
  className?: string;
}
const socialNetworks = ["g", "tw", "in"];
export const Social = ({ className }: SocialsProps) => {
  return (
    <div className={`${s.socials} ${className ? className : ""}`}>
      {socialNetworks.map((social) => {
        return (
          <div
            key={social}
            className={`${s.socialItem}`}
          >
            {social}
          </div>
        );
      })}
    </div>
  );
};
