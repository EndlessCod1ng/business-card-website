import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Stack.module.scss";
interface StackProps {
  className?: string;
}
export const Stack = ({ className }: StackProps) => {
  return (
    <div className={`${s.stack} ${className ? className : ""}`}>
      <AppText
        Tag="h2"
        text="Tech Stack"
      />
      <AppText
        Tag="h3"
        text="Technologies I’ve been working with recently"
      />
      <div className={s.stackList}>Array("")</div>
    </div>
  );
};
