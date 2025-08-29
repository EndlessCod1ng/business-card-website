import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Contacts.module.scss";
interface ContactsProps {
  className?: string;
}
export const Contacts = ({ className }: ContactsProps) => {
  return (
    <section className={`${s.contacts} ${className ? className : ""}`}>
      <AppText
        Tag="h2"
        text="For any questions please mail me:"
      />
      <AppText
        Tag="h2"
        colorType="accentedGradient"
        text="Endlesscoding@yahoo.com"
      />
    </section>
  );
};
