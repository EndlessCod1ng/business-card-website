import s from "./Banner.module.scss";
interface BannerProps {
  className?: string;
}
export const Banner = ({ className }: BannerProps) => {
  return (
    <section className={`${s.banner} ${className ? className : ""}`}>
      <div>
        <div>Hi, My name is</div>
        <div>Viacheslav L.C.</div>
        <div>I build things for web</div>
      </div>
      <div className={s.imageWrapper}>
        <div className={s.img}></div>
      </div>
    </section>
  );
};
