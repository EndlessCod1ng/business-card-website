import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Banner.module.scss";
interface BannerProps {
  className?: string;
}
export const Banner = ({ className }: BannerProps) => {
  return (
    <section className={`${s.banner} ${className ? className : ""}`}>
      <div>
        <AppText
          Tag="h2"
          text="Hi 👋"
        />
        <AppText
          Tag="h2"
          text="My name is"
        />
        <AppText
          colorType="accentedGradient"
          Tag="h2"
          text="Viacheslav L.C."
        />
        <AppText
          Tag="h2"
          text="I build things for web"
        />
      </div>
      <div className={s.imageWrapper}>
        <div className={s.img}></div>
      </div>
    </section>
  );
};
