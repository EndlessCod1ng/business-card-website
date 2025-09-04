import s from "./AppImage.module.scss";
interface AppImageProps {
  src: string;
  className?: string;
}
export const AppImage = ({ src, className }: AppImageProps) => {
  return (
    <img
      src={src}
      className={`${s.appImage} ${className ? className : ""}`}
    />
  );
};
