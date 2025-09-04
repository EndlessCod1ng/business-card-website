import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Banner.module.scss";
import ava from "@/shared/assets/banner/ava.png";
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
        <img
          src={ava}
          className={s.img}
        />
      </div>
    </section>
  );
};
