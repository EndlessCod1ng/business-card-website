import s from "./AppText.module.scss";
type ColorType = "primary" | "accentedGradient";
interface AppTextProps {
  text: string;
  Tag?: "div" | "h2" | "h3" | "h4" | "h5" | "h6";
  colorType?: ColorType;
  className?: string;
}
export const AppText = ({ text, Tag = "div",colorType="primary", className }: AppTextProps) => {
  return (
    <Tag className={`${s.appText} ${s[colorType]} ${className ? className : ""}`}>{text}</Tag>
  );
};
