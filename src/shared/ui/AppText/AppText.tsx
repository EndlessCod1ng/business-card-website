import s from "./AppText.module.scss";
interface AppTextProps {
  text: string;
  Tag?: "span" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}
export const AppText = ({ text, Tag = "span", className }: AppTextProps) => {
  return (
    <Tag className={`${s.appText} ${className ? className : ""}`}>{text}</Tag>
  );
};
